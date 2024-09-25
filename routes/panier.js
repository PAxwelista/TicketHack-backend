var express = require('express');
var router = express.Router();

const Tripspanier= require('../models/tripspanier');

/* GET all trips in cart ----------------------*/
router.get('/', (req, res) =>{
  Tripspanier.find().then ((dbDdata)=>res.json({alltrips:dbDdata }))
  ;
});

router.post("/", (req,res)=>{
  const newTripsPanier = new Tripspanier({
    departure : req.body.departure,
    arrival : req.body.arrival,
    date : req.body.date,
    price : req.body.price,
    isPaid : false,
  })
  newTripsPanier.save().then(()=>res.json({result : true}))
})

module.exports = router;

/*remove trip in DB by id--------------------*/
//-----------------------------------1ere methode params marche pas !!!!!!!!!!-------------------
// router.delete('/:_id', (req,res)=>{
// Tripspanier.deleteOne({_id:req.params._id})
// .then(data=>{res.json({result:"trip deleted"})})
// });

router.delete('/', (req,res)=>{
  Tripspanier.deleteOne({_id:req.body._id})
  .then(data=>{res.json({result:"trip deleted"})})
  });
