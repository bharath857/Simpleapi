var work  = require('../models/todomodel');
var bodyparser= require('body-parser');

module.exports= function(app){
       app.use(bodyparser.json());//include the body parser
       app.use(bodyparser.urlencoded({extended:true })); //encode the url

        app.get('/api/details/:company',function(req,res){//find the detsils by company
           work.find({ company: req.params.company},function(err,data){
               if(err) throw err;
               res.send(data);
                     });
             });


       app.get('/api/detailsbyname/:username',function(req,res){// find the details by username
           work.find({ username: req.params.username},function(err,data){
               if(err) throw err;
               res.send(data);
                     });
             });

        app.get('/api/detailsbyid/:id',function(req,res){// find the details by id
            work.findById({_id: req.params.id},function(err,data){
                if(err) throw err;
                res.send(data);
                         });
               });

         app.post('/api/newdetails', function(req,res){ // addation of new member or updating the user
             if(req.body.id){                         // updata the existing member (try useing put)
                 work.findByIdAndUpdate(
                            req.body.id,{username:req.body.username,
                                              job:req.body.job,
                                           isdone:req.body.isdone,
                                            backs:req.body.backs }, function(err,data){
                                                              if(err) throw err;
                                                                 res.send('success');
                                         })
                            }
             else{// new member
                 var newwork= work({
                     company:'crazy',
                     username:req.body.username,
                     job:req.body.job,
                     isdone:req.body.isdone,
                     backs:req.body.backs
                    });
                    newwork.save(function(err){
                        if(err) throw err;
                        res.send('success');
                    });

                 };
                });
          app.delete('/api/details',function(req,res){//delect the member finding him by id
              work.findByIdAndRemove(req.body.id,function(err){
                                                    if(err) throw err;
                                                    res.send('success');
                                                     });

          });                 



}
