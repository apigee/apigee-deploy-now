var shelljs = require('shelljs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



app.post('/deploy', function (req, res) {
    var repo = req.body.repo;
    var apiFolder = req.body.apiFolder;
    var makeScript = req.body.makeScript;
    var org = req.body.org;
    var env = req.body.env;
    var userName = req.body.userName;
    var pw = req.body.pw;

    console.log(userName);
    console.log(repo);
    console.log(apiFolder);
    console.log(makeScript);
    console.log(org);
    console.log(env);

    console.log(shelljs.exec('ae_username="'+userName+'" sh -c \'echo "Hello $ae_username"\''));

//     while(true){
//     console.log(shelljs.exec("echo $ae_username"));
// }
    // shelljs.exec("git clone "+repo+" "+org+env, function(code, output){
    //         console.log('Exit code:', code);
    //         console.log('Program output:', output);
    //         shelljs.cd(org+env+"/"+apiFolder);
    //         console.log(shelljs.exec(makeScript));
    // });

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



