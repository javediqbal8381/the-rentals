const express = require("express")
const router = express.Router();
const Autocare = require("../models/autocareModel");

router.post("/addcartoautocare", async (req, res) => {
  try {
    const newautocare = new Autocare(req.body);
    await newautocare.save();
    res.send("Car added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});
router.get('/getcarfromautocare',async(req,res)=>{
  try{
    const autocares = await Autocare.find();

    res.send(autocares)
  }
  catch(error){
return res.status(400).json(error);
  }
})
module.exports = router;
