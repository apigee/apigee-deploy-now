# apigee-deploy-now
The purpose of Deploy Now Button is to make easy (no need to know any tools, except your browser) to deploy APIs on Edge.

[![Deploy to Apigee](https://github.com/maruthichand/Mavendeploynow/raw/master/images/deploy_to_apigee.png)](https://deploynow.apigee.com/login-form/?repo=https://github.com/dzuluaga/Mavendeploynow.git&apiFolder=/&makeScript=make.sh)

#### Getting started
######Example of a Maven API Proxy enabled with Deploy Now Button
Click on the "Deploy Now" button from [this page](https://github.com/dzuluaga/Mavendeploynow)
######Example of a Apigeetool API Proxy enabled with Deploy Now Button
Click on the "Deploy Now" button from [this page](https://github.com/akoo1010/apigee-nock-mock-deploy-now)

###### Parameters
The following parameters are required:
- repo: Public git repo URL/SSH (Github, Gitlabs, Bitbucket, etc.). Private repos will be supported by providing SSH keys. e.g. https://github.com/dzuluaga/Mavendeploynow.git 
- apiFolder: Directory of the API proxy within the repo. This is useful to indicate the directory in which the make.sh and api proxy artifacts are located. e.g. /, /api-tutorials/api-proxy-1/
- makeScript: Filename of the shell file to be executed located within the repo. This file executes deployment tools apigeetool, Grunt, Maven. etc. e.g. make.sh

For instance, anybody with an Apigee Edge account can deploy the API Proxy with the link below:

[https://deploynow.apigee.com/login-form/?repo=https://github.com/dzuluaga/Mavendeploynow.git&apiFolder=/&makeScript=make.sh](https://deploynow.apigee.com/login-form/?repo=https://github.com/dzuluaga/Mavendeploynow.git&apiFolder=/&makeScript=make.sh)

#### the API
API Proxies can also be deployed through the API, so no need to leverage the HTML form.

##### Source Code from Github Repo
```shell
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'repo=https%3A%2F%2Fgithub.com%2Fakoo1010%2Fapigee-tutorials.git' -d 'apiFolder=apiproxies%2Fapigee-nock-mock' -d 'makeScript=make.sh' \
-d 'org=testmyapi' -d 'env=test' -d 'userName='$ae_username'' -d 'pw='$ae_password'' 'https://deploynow.apigee.com/deploy' -v
```
##### Source Code from a zip file
```shell
curl -v -X POST -F "zipFile=@Mavendeploynow-master.zip" -F "makeScript=makeScript.sh" -F "apiFolder=Mavendeploynow-master/src/gateway/forecastweatherapi/" -F "org=testmyapi" -F "env=test" \
-F userName=$ae_username -F pw=$ae_password 'https://deploynow.apigee.com/deploy_zip'
```

#### Wanna run it in-house?
This repo contains all the Node.js and Express.js code necessary to run it on your own server. So, please help yourself, clone this repo and get started!

##### Access Login App
https://deploynow.apigee.com/login-form/

##### Access Login App
http://localhost:3000/login-form/

##### Button Art
[![Deploy to Apigee](./images/deploy_to_apigee.png)](http://dabuttonfactory.com/#t=Deploy+to+apigee&f=Open+Sans-Bold&ts=29&tc=fff&hp=35&vp=10&c=round&bgt=pyramid&bgc=ff4300&ebgc=ff4300&shs=4&shc=666&sho=se)

#### License
Copyright (c) 2015 Diego Zuluaga (twitter: @dzuluaga), Alex Koo (twitter: akoo1010), Maruthi Chowdavarapu (twitter: @chanduom85) Licensed under the MIT license.
