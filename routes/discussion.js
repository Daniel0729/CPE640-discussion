const express = require('express');
const router = express.Router();
const passport = require('passport');//need to figout how to use authentication
const Dis = require('../models/discussion');

//createDiscussion
router.post('/creatediscussion',(req,res) => {
    let newDis = new Dis({
        topic: req.body.topic,
        content: req.body.content
    });

        Dis.createDiscussion(newDis,(err,newDis)=>{
        if(err)
        {
            res.json({sucess: false, msg:err});
        }
        else
        {
            res.json({success: true, msg:"User register Sucessfully"});
        }
    });
});
module.exports = router;