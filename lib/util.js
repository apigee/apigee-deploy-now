var shelljs = require('shelljs'),
    rimraf = require('rimraf');

function sessionToken() {
  function myuuid() {
    return Math.floor((1 + Math.random()) * 0x10000)
           .toString(16)
           .substring(1);
  }
  return myuuid () + myuuid () + '-' + myuuid () + '-' + myuuid () + '-' +  myuuid () + '-' + myuuid () + myuuid () + myuuid ();
}

function removeClonedRepo(appBasePath, basePath ) {
              console.log('removing directory: ' + basePath);
              shelljs.cd(appBasePath);
              rimraf(basePath, function(error){ console.log(error)});
}

module.exports = {
  sessionToken : sessionToken,
  removeClonedRepo : removeClonedRepo
}
