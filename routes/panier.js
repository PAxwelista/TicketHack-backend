var express = require('express');
var router = express.Router();

const Tripspanier= require('../models/tripspanier');

/* GET all trips in cart */
router.get('/', (req, res) =>{
  Tripspanier.find().then ((dbDdata)=>res.json({alltrips:dbDdata }))
  ;
});

module.exports = router;
