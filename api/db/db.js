const mongoose =require('mongoose');

const connectDB = async () => {
try{
    mongoose.set("strict", false);
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("mongo connecté");
    
    
}
catch(err){

    console.error(err);
    process.exit(1);
}

};

module.exports = connectDB ;