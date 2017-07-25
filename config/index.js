var config= require('./configaration');// get the username and password

module.exports={
    getdbconnectionstring: function(){
     return 'mongodb://' + config.username + ':' +config.password + '@ds157282.mlab.com:57282/nodetodosample';

    }// export the url with username and password
}
/*mongodb://<dbuser>:<dbpassword>@ds157282.mlab.com:57282/nodetodosample
//"username":,
//"password":

 let aswq=function(){
     return 'mongodb://' + config.username + ':' +config.password + '@ds157282.mlab.com:57282/nodetodosample';

    }
module.exports={
 aswq // export the url with username and password
}

*/

