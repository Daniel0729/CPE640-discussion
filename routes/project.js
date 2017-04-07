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
router.get('/projectlist', function (req, res) {
  console.log('I received a GET request');

  db.projectlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

router.post('/projectlist', function (req, res) {
  console.log(req.body);
  db.projectlist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

router.delete('/projectlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.projectlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

router.get('/projectlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.projectlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

router.put('/projectlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.projectlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, info: req.body.info}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});
module.exports = router;