var express = require('express');
var router = express.Router();

const Trip = require("../models/trips")

/* GET home page. */
router.get('/', function(req, res, next) {
  const {departure,arrival,date} = req.body;

    if (!(date && departure && arrival)) {
        res.json({result : false , error : "Il manque une information"});
        return;
    }
    const dateInf = new Date(date);
    const dateSup = new Date(date);
    dateSup.setDate(dateInf.getDate()+1);

    console.log(dateInf)
    console.log(dateSup)

    Trip.find({departure,arrival,date : {$gte : dateInf,$lt : dateSup}})
        .then(data=> {
            if (data.length === 0) {
                res.json({result : false , error : "Aucun voyage trouvé"});
                return;
            }
            res.json({result : true , trips : data})
        });
});


module.exports = router;
