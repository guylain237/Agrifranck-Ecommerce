
const express = require('express');

module.exports.payement = async (req, res) => { 
 
    try{
        const params = {
            submit_type : 'pay',
            mode : "payment",
            payment_method_types : ['card'],
            billing_address_collection : "auto",
            shipping_options : [{shipping_rate : "sk_test_51OjCnYDlW7t3vO4Co8OUs7vvj6OFdcEmAU4qbcshG6ToFcVPZ28EOrumlN3Me3HhiFhkh9FwuyPWUdMsjG3bUNqH006pS7E8nP"}],
  
            line_items : req.body.map((item)=>{
              return{
                price_data : {
                  currency : "inr",
                  product_data : {
                    name : item.name,
                    // images : [item.image]
                  },
                  unit_amount : item.price * 100,
                },
                adjustable_quantity : {
                  enabled : true,
                  minimum : 1,
                },
                quantity : item.qty
              }
            }),
  
            success_url : `${process.env.FRONTEND_URL}/success`,
            cancel_url : `${process.env.FRONTEND_URL}/cancel`,
  
        }
  
        
        const session = await stripe.checkout.sessions.create(params)
        // console.log(session)
        res.status(200).json(session.id)
       }
       catch (err){
          res.status(err.statusCode || 500).json(err.message)
       }
  
  }