const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectDB = require('./db/db');
const cookie = require('cookie-parser');
const app = express();

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '100mb'}));
app.use(cors());

cookie();

const PORT = process.env.PORT || 3001;
//MONGODB CONNECTION
//console.log(process.env.MONGODB_URL);
connectDB();


//API user
app.use('/', require('./Router/userRoute') );

app.use('/', require('./Router/Contact') );

app.use('/signup',require('./Router/userRoute'));

app.use('/login',require('./Router/userLogin'));

app.listen(PORT, () => {
  //api produit
app.use('/', require('./Router/productRouter') );


//api payement
app.use('/', require('./Router/Payement') );

  console.log(`votre server demarre sur le  port ${PORT}!`);
});