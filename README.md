apigee-deploy-now
==================
The purpose of Deploy Now Button is to make easy deployment of API Proxy Samples to Apigee Edge. So, you no longer need to install tools on your laptop. Just click on the button below to get started.

<a href="https://deploynow.apigee.com/login-form/?repo=https://github.com/dzuluaga/Mavendeploynow.git&apiFolder=/&makeScript=make.sh"><img src="https://raw.githubusercontent.com/apigee/apigee-deploy-now/master/images/deploy_to_apigee.png" align="left" height="45" width="232" ></a><br><br>

#### Getting started
For developers looking for additional examples of API Proxies enabled with Deploy Now, checkout the following examples:

###### Samples
- [Apigeetool](https://github.com/akoo1010/apigee-nock-mock-deploy-now)
- [Maven](https://github.com/dzuluaga/Mavendeploynow)
- [Grunt](https://github.com/dzuluaga/deploynow-api-proxy-grunt-sample)

As you can see, to enable your public Git repo, simply add the following HTML fragment to your Git README.md along with a make.sh file:
```HTML
<a href="https://deploynow.apigee.com/login-form/?repo=https://github.com/dzuluaga/Mavendeploynow.git&apiFolder=/&makeScript=make.sh">
<img src="https://raw.githubusercontent.com/apigee/apigee-deploy-now/master/images/deploy_to_apigee.png" align="left" height="45" width="232" >
</a>
```

###### Parameters
The following parameters are required:
- repo: Public git repo URL/SSH (Github, Gitlabs, Bitbucket, etc.). Private repos will be supported by providing SSH keys. e.g. https://github.com/dzuluaga/Mavendeploynow.git
- apiFolder: Directory of the API proxy within the repo. This is useful to indicate the directory in which the make.sh and api proxy artifacts are located. e.g. /, /api-tutorials/api-proxy-1/
- makeScript: Filename of the shell file to be executed located within the repo. This file executes deployment tools apigeetool, Grunt, Maven. etc. e.g. make.sh

For instance, anybody with an Apigee Edge account can deploy the API Proxy with the link below:

[https://deploynow.apigee.com/login-form/?repo=https://github.com/dzuluaga/Mavendeploynow.git&apiFolder=/&makeScript=make.sh](https://deploynow.apigee.com/login-form/?repo=https://github.com/dzuluaga/Mavendeploynow.git&apiFolder=/&makeScript=make.sh)

#### the API
API Proxies can also be deployed through the API, so no need to leverage the HTML form.

##### API Proxy from Github Repo
```shell
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'repo=https%3A%2F%2Fgithub.com%2Fakoo1010%2Fapigee-tutorials.git' -d 'apiFolder=apiproxies%2Fapigee-nock-mock' -d 'makeScript=make.sh' \
-d 'org=testmyapi' -d 'env=test' -d 'userName='$ae_username'' -d 'pw='$ae_password'' 'https://deploynow.apigee.com/deploy' -v
```
##### API Proxy from a zip file
```shell
curl -v -X POST -F "zipFile=@Mavendeploynow-master.zip" -F "makeScript=makeScript.sh" -F "apiFolder=Mavendeploynow-master/src/gateway/forecastweatherapi/" -F "org=testmyapi" -F "env=test" \
-F userName=$ae_username -F pw=$ae_password 'https://deploynow.apigee.com/deploy_zip'
```

#### Wanna run Deploy Now in-house?
This repo contains all the Node.js and Express.js code necessary to run it on your own server. So, please help yourself, clone this repo and deploy it locally!

##### Access Login App
https://deploynow.apigee.com/login-form/

##### Access Login App
http://localhost:3000/login-form/

##### Button Art
Modify the presentation of Apigee Deploy Now Button with this template:

<a href="http://dabuttonfactory.com/#t=Deploy+to+Apigee&f=Noto+Sans&ts=24&tc=fff&tshs=1&tshc=000&hp=20&vp=9&c=9&bgt=unicolored&bgc=ff4300&shs=3&shc=666&sho=s"><img src="./images/deploy_to_apigee.png" height="45" width="232" ></a>

#### License
Copyright (c) 2015 Diego Zuluaga (twitter: @dzuluaga), Alex Koo (twitter: akoo1010), Maruthi Chowdavarapu (twitter: @chanduom85) Licensed under the MIT license.
