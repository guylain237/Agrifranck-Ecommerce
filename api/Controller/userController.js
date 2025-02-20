const userModel = require("../Models/userModel");
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

require("dotenv").config();
const path = require("path");

//const app = express();
//app.use(express.static(path.join(__dirname, '../views/')));

//verifier l'email
const UserVerification = require("../Models/userVerification");
const nodeMailer = require("nodemailer");
const {v4 : uuidv4} = require("uuid");
//const { render } = require("ejs");
require("dotenv").config();


//NODEMAILER transporter
const transporter= nodeMailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
    auth:{
        user:process.env.AUTH_EMAIL,
        pass:process.env.AUTH_PASSWORD
    },
    pool:true,
    maxConnections:50,
});

//verification du transporteur
transporter.verify((error,success)=>{
    if(error){
        console.log(error);
    }else{
        console.log("serveur pret a prendre des messages");
        console.log(success);
    }

})

module.exports.userCreate = async (req, res) => {
  console.log(req.body);
  const email = req.body.email; // email de l'utilisateur
  const password = req.body.password; // mot de passe de l'utilisateur

  try {
    const result = await userModel.findOne({ email: email });

    console.log(result);

    if (result) {
      res.status(400).send({
        message: "Email existe déjà",
        alert: false
      });
    } else {
      // Hachage du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);

      // Création d'un nouvel utilisateur avec le mot de passe haché
      const newUser = new userModel({
        ...req.body,
        password: hashedPassword, 
        verify: false 
      });

      const savedUser = await newUser.save();

      // Création du token
      const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET);


 // Envoyer l'e-mail de vérification
 await sendVerificationEmail(savedUser, res);

      res.status(200).send({ message: "Utilisateur créé avec succès", alert: true, token: token });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: err.message,
    });
  }
};



//verification de l'email
const sendVerificationEmail = async ({ _id, email }, res) => {
  // URL de vérification de l'email
  const ports = process.env.PORT || 5000;
  const uniqueString = uuidv4() + _id;

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: 'Vérification de l\'email',
    html: `<h1>Veuillez cliquer sur le lien pour vérifier votre email</h1>
           <p>Si vous n'avez pas créé de compte, veuillez ignorer ce message</p>
           <a href="http://localhost:5000/verify/${_id}/${uniqueString}">Cliquez ici</a>
           <p>Si le lien ne fonctionne pas, veuillez copier et coller ce lien dans votre navigateur</p>`
  };
  
  try {
    const hash = await bcrypt.hash(uniqueString, 10);
    const newVerification = new UserVerification({
      userId: _id,
      uniqueString: hash,  // Assurez-vous que le champ est correctement nommé
      createdAt: Date.now(),
      expireAt: new Date(Date.now() + 21 * 60 * 60 * 1000) // 21 heures
    });

    // Vérification de l'email
    await newVerification.save();
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
        return;
      } 


      

        console.log(info);

        res.status(200).json({ message: 'Email envoyé avec succès' });



     
    });
  } catch (err) {
    console.error("Erreur lors de la sauvegarde de la vérification de l'email :", err);
    res.status(500).json({ message: "Erreur interne du serveur lors de l'envoi de l'email de vérification." });


  }
};



module.exports.verifyEmail = async (req, res) => {
  try {
    // Extraire les paramètres de la requête
    const { userId, uniqueString } = req.params;

    // Chercher le document correspondant à l'utilisateur
    const result = await UserVerification.findOne({ userId });

    // Définir les messages d'erreur constants
    const EXPIRED_LINK_MESSAGE = "Le lien a expiré";
    const INVALID_LINK_MESSAGE = "Le lien n'est pas valide, veuillez vérifier votre email";
    const EMAIL_ERROR_MESSAGE = "Erreur lors de la vérification de l'email";

    if (!result) {
      // Si le document n'existe pas, rediriger vers la page d'erreur avec le message approprié
      return res.redirect(`verified?error=true&message=${EXPIRED_LINK_MESSAGE}`);
    }

    // Extraire les propriétés du document
    const { expireAt, uniqueString: hash } = result;

    // Vérifier si le lien a expiré
    if (expireAt < Date.now()) {
      // Si le lien a expiré, supprimer le document et l'utilisateur associé
      UserVerification.deleteOne({ userId });
      userModel.deleteOne({ _id: userId });

      // Rediriger vers la page d'erreur avec le message approprié
      return res.redirect(`verified?error=true&message=${EXPIRED_LINK_MESSAGE}`);
    }

    // Vérifier si le lien est valide en comparant le hash
    const isValidLink = await bcrypt.compare(uniqueString, hash);

    if (isValidLink) {
      // Si le lien est valide, mettre à jour le statut de vérification de l'utilisateur
      await userModel.updateOne({ _id: userId }, { verify: true });
      // Supprimer le document de vérification
      await UserVerification.deleteOne({ userId });

      // Envoyer le fichier HTML de confirmation
      return res.render(path.join(__dirname, '../views/verified.ejs'));
   // return res.json({ message: "Email vérifié avec succès" });
    } else {
      // Si le lien n'est pas valide, rediriger vers la page d'erreur avec le message approprié
      return res.redirect(`verified?error=true&message=${INVALID_LINK_MESSAGE}`);
    }
  } catch (err) {
    // En cas d'exception, afficher l'erreur dans la console
    console.error(err);
    // Rediriger vers la page d'erreur avec le message approprié
    return res.redirect(`verified?error=true&message=${EMAIL_ERROR_MESSAGE}`);
  }
};

// Vérifier la page route
// Je n'ai pas trouvé d'erreur dans cette partie du code, mais vous pouvez utiliser un outil comme ESLint[^5^][5] pour vérifier votre code JavaScript de manière plus approfondie.


//verifier la page route
module.exports.verified =  async (req, res) => {
   res.render(path.join(__dirname, '../views/verified.ejs'),);


};










module.exports.userLogin = async (req, res) => {
  const { email, password } = req.body; // get password from request body

  try {
    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(404).send({
        message: "L'email n'est pas disponible, veuillez vous inscrire.",
        alert: false,
      });
    }

    // Vérifier si l'email est vérifié
    if (!user.verify) {
      return res.status(401).json({ message: "Veuillez vérifier votre email svp." });
    }

    // Check if password matches
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Create token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

      const dataSend = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        image: user.image,
      };

      res.status(200).send({
        message: "Connexion réussie.",
        alert: true,
        data: dataSend,
        token: token, // send token in response
      });
    } else {
      res.status(401).send({
        message: "Mot de passe incorrect.",
        alert: false,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: err.message,
    });
  }
};