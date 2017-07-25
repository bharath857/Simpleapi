var express= require('express');
var app= express();             //get express lib and invoke it

var port= process.env.PORT || 2000;// universal port  while uploading to server or local port

//app.set('port',process.env.PORT||3000);

var mongoose = require('mongoose');// get mongoose lib
var config= require('./config/index'); //get the mongodb database url or login id.
mongoose.connect(config.getdbconnectionstring());//mongodb conection to stored data
               //mongodb://bharathbaymax:bharathbaymax857@ds157282.mlab.com:57282/nodetodosample
app.use('/',function(request,responce,next){
       console.log('request url:'+request.url);
       console.log('request :'+request.method);
   //    console.log('request:'+request.pathname);  
       next();
});

var setupcontroller =require('./controllers/setupcontrollers');//intial system or intial members.
var apicontrollers = require('./controllers/apicontroller');// to access  how to require or intial setup.

//this part is not included
app.use('/assets', express.static('./public'));// hmml pages which is not included.
app.set('view engine','ejs'); // css or stylesheets with extentions ejs.


setupcontroller(app);
apicontrollers(app);

//app.get("port")
app.listen(port);
