var mysql = require('mysql');
var express = require('express');
var app = express();
var path =require("path");
const dbcredentials=require("./dbcredentials.js");

//app.use(express.logger());
var con; 
app.use((req,res,next)=>{
 con = mysql.createConnection(dbcredentials);
	con.on('error',(err) =>{
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      console.log(err);                        // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      //throw err;                                  // server variable configures this)
    }
  });
	console.log("connect meddleware");

	next();
});





app.get('/',function(request,response){

con.query("SELECT * FROM department_types", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	response.send(JSON.stringify(result));
  });


});


app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

var port = process.env.PORT || 5000;

app.listen(port,function(){
console.log("Listening on "+port);
});