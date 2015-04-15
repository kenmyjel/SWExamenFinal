var express = require('express');
var router = express.Router();

/* GET home page. */
function apiRoutes(db){
  var sleepDataSet = db.collection("sleepDataSet");

  router.get('/dataset', function(req, res, next) {
    sleepDataSet.find().toArray(function(err, dataset){
      if(err){
        return next(err, req, res);
      }
      console.log(dataset);
      res.status(200).json(dataset);
    });
  });

  router.get('/dataset/2', function(req, res, next) {
    sleepDataSet.find({"group":2}).toArray(function(err, docs){
      if(err) throw err;
      res.status(200).json(docs);
    })
  });

  router.get('/dataset/1', function(req, res, next) {
    sleepDataSet.find({"group":1}).toArray(function(err, docs){
      if(err) throw err;
      res.status(200).json(docs);
    })
  });


  /*router.get('/dataset/2', function(req, res, next) {
    //implementar
    res.status(500).json({"error":"not implemented"});
  });*/

  /*router.get('/dataset/1', function(req, res, next) {
    //implementar
    res.status(500).json({"error":"not implemented"});
  });*/

  router.get('/dataset/person/:id', function(req, res, next) {
    //implementar
    res.status(500).json({"error":"not implemented"});
  });

  router.post('/dataset/modAll', function(req, res, next) {
    //implementar
    res.status(500).json({"error":"not implemented"});
  });
  return router;
}
module.exports = apiRoutes;
