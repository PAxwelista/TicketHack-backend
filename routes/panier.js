var express = require('express');
var router = express.Router();

const Tripspanier= require('../models/tripspanier');

router.get('/', (req, res) =>{
  Tripspanier.find()
    .then ((dbDdata)=>res.json({alltrips:dbDdata.sort((a,b)=>a.date-b.date)}))
  });


router.get('/unpaid', (req, res) =>{
  Tripspanier.find({isPaid:false}).then ((dbDdata)=>res.json({unpaidTrips:dbDdata }))
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

router.delete('/', (req,res)=>{
  Tripspanier.deleteOne({_id:req.body._id})
  .then(data=>{res.json({result:"trip deleted"})})
  });

router.put("/book", (req,res)=>{
  Tripspanier.updateMany({isPaid : false} , {isPaid : true})
    .then(()=>res.json({result : true}))
})

module.exports = router;