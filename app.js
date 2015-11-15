var shelljs = require('shelljs');
var express = require('express');
var app = express();


app.post('/deploy', function (req, res) {
    // res.send('Hello World!');

    var repo = req.query.repo;
    var apiFolder = req.query.apiFolder;
    var makeScript = req.query.makeScript;
    var org = req.query.org;
    var env = req.query.env;

    console.log(repo);
    console.log(apiFolder);
    console.log(makeScript);
    console.log(org);
    console.log(env);

    shelljs.exec("git clone "+repo+" "+org+env, function(code, output){
            console.log('Exit code:', code);
            console.log('Program output:', output);
            shelljs.cd(org+env);
            console.log(shelljs.exec(apiFolder+"/"+makeScript));
    });

    // console.log(shelljs.exec('sh testing/apiproxies/apigee-nodejs-fileserver/make.sh'));

    // //** look into packaging this outside
    // //cd apiproxies/apigee-nodejs-fileserver
    // shelljs.cd('testing/apiproxies/apigee-nodejs-fileserver');
    // //npm install **look at later
    // console.log(shelljs.exec('npm install').output);
    // //cd node
    // shelljs.cd('node');
    // //npm install
    // console.log(shelljs.exec('npm install').output);
    // //grunt-cli
    // //shell.exec('grunt --env=test --curl=true --username=akoo@apigee.com --password=$ae_password --upload-modules=true --debug=true --force');

})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});



