const express = require('express');
const router = express.Router();
const passport = require('passport');//need to figout how to use authentication
const Project = require('../models/project');

//createProject
router.post('/createproject',(req,res) => {
    let newPro = new Project({
        project_name: req.body.project_name,
        description: req.body.description,
        start: req.body.start_time,
        end: req.body.end_time

    });

        Project.createProject(newPro,(err,newPro)=>{
        if(err)
        {
            res.json({sucess: false, msg:err});
        }
        else
        {
            res.json({success: true, msg:"successful createproject"});
        }
    });
});
module.exports = router;