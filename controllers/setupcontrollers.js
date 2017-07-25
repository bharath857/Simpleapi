var work =require('../models/todomodel');
// the way in which rest to the people or object and propertyvalues to be added

module.exports = function(app){

    app.get('/api/setup',function(req,res){

        var starter=[
            {   company:'crazy',
                username:'aaaa',
                job:'eat',
                isdone:'false',
                backs:'false'
            },
            {   
                company:'crazy',
                username:'bbbb',
                job:'ctv',
                isdone:'false',
                backs:'false'
            },
            {
                company:'crazy',
                username:'cccc',
                job:'play',
                isdone:'false',
                backs:'false'
            },
            {
                company:'crazy',
                username:'dddd',
                job:'sleep',
                isdone:'false',
                backs:'false'
            }
        ];
        
        work.create(starter,function(err,data){// using model or intial setup create function find and send
              res.send(data);
        });
    });
}