const  EmailSender = require("../sendEmail");

module.exports.setContact = async (req, res ) =>{
  const { fullName,email,phone,message} = req.body;
    try {
      await  EmailSender({fullName,email,phone,message});
        res.json({ msg: "votre message a été envoyé avec success" });
      } catch (error) {
        res.status(404).json({ msg: "Erreur ❌" });
      }

};
