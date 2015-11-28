var shelljs = require('shelljs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser'),
    cors = require('cors');
var bluebird = require('bluebird');
app.use(express.static('public'));
//var rimraf = bluebird.promisifyAll(require('rimraf'));
var rimraf = require('rimraf');
var path = require('path');
var util = require('./lib/util');
var config = require('./config');

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/deploy', function (req, res) {
    var repo = req.body.repo;
    var apiFolder = req.body.apiFolder;
    var makeScript = 'make.sh' || req.body.makeScript;
    var org = req.body.org;
    var env = req.body.env;
    var userName = req.body.userName;
    var pw = req.body.pw;
    var UID = util.sessionToken();
    var nodeBasePathBuild = path.join('./public/builds/', UID); //node.js app is based on /public
    var loginAppBasePathBuild = path.join('/builds/', UID); //login app is based on /public/.
    var appBasePath = process.cwd()
    // var nodeBasePathBuild = path.join('./public/builds/', util.sessionToken(), org + '-' + env);
    var pathToDirections = 'directions.html' || req.body.pathToDirections; //directions.html
    //** var linktoGithub =  window.referer || req.body.linktoGithub;  test window.referer
    //console.log(nodeBasePathBuild);
    //rimraf.sync(nodeBasePathBuild);
    // console.log(userName);
    // console.log(repo);
    // console.log(apiFolder);
    // console.log(makeScript);
    // console.log(org);
    // console.log(env);

    shelljs.exec("git clone " + repo + " " + nodeBasePathBuild, function(code, output) {
      console.log('Exit code:', code);
      console.log('Program output:', output);
      shelljs.cd(nodeBasePathBuild + "/" + apiFolder);
      var execStr = ' ae_username=' + userName + ' ae_password=' + pw + ' env=' + env //space in front of ae_username to run command in bash without save in history
        + ' org=' + org + ' sh -c \'sh ' + makeScript + '\'';
      //console.log( execStr );
      var output = shelljs.exec( execStr, function(code, output) {
          console.log('Exit code:', code);
          console.log('Program output:', output);
          console.log(output);
          res.json({code: code, output: output, loginAppBasePathBuild: loginAppBasePathBuild});

          //timeout can be supplied when loading up server, e.g., timeout=10000 node app for ~10s cleanup
          setTimeout( util.removeClonedRepo, config.remove_cloned_repo_timeout, appBasePath, nodeBasePathBuild);

      } )
    });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
