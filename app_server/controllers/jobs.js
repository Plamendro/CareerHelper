
/*var apiOptions = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://whispering-plateau-31971.herokuapp.com/";
}
*/
var NodeCouchDB=require('node-couchdb');

const couch=new NodeCouchDB();
const dbName='employers';
const viewURL='_design/employers/_view/allJobs';

var cradle = require('cradle');
var db = new(cradle.Connection)().database('employers');

module.exports.getAll=function(req,res){
  couch.get(dbName,viewURL).then(function(data){
      console.log(data.data.rows);
      res.render('jobs',
      {employers:data.data.rows });
},
  function(err){
      res.send("Error 404");
  });
};
 module.exports.getDetailedJob=function(req,res){
  var name=req.params.id;
  console.log(name);
  db.get(name, function (err, doc) {
  console.log(doc); 
 res.render('detailedJobs',{"doc":doc});
 if(err){
   console.log("Error 404");
 }
});
};
