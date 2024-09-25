var express = require('express');
var router = express.Router();

const Trip = require("../models/trips")

/* GET home page. */
router.post('/', (req, res) =>{
  const {departure,arrival,date} = req.body;

    if (!(date && departure && arrival)) {
        res.json({result : false , error : "Il manque une information"});
        return;
    }
    const dateInf = new Date(date);
    const dateSup = new Date(date);
    dateSup.setDate(dateInf.getDate()+1);
    
    Trip.find({
        departure : {$regex: new RegExp(departure,'i')},
        arrival : {$regex: new RegExp(arrival,'i')},
        date : {$gte : dateInf,$lt : dateSup}
    })
        .then(data=> {
            if (data.length === 0) {
                res.json({result : false , error : "Aucun voyage trouvé"});
                return;
            }
            res.json({result : true , trips : data})
        });
});

router.get("/:id" , (req,res) => {
    Trip.findById(req.params.id)
        .then(data=>res.json({trip : data}))
})


module.exports = router;
