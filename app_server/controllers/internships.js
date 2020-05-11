var NodeCouchDB=require('node-couchdb');

const couch=new NodeCouchDB();
const dbName='employers';
  const viewURL='_design/employers/_view/allInternships';

var cradle = require('cradle');
var db = new(cradle.Connection)().database('employers');

module.exports.getInternships=function(req,res){
    couch.get(dbName,viewURL).then(function(data){
        console.log(data.data.rows);
        res.render('internships',
        {employers:data.data.rows});
  },
    function(err){
        res.send("Error 404");
    });
  };
  module.exports.getDetailedInternship=function(req,res){
    var name=req.params.id;
    console.log(name);
  db.get(name, function (err, doc) {
    console.log(doc); 
   res.render('detailedInternships',{"doc":doc});
   if(err){
     console.log("Error 404");
   }
  });
  };