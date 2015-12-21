# apigee-deploy-now
The purpose of the button is to make easy (no need to know any tools, except your browser) to deploy APIs on Edge.

[![Deploy to Apigee](./images/deploy_to_apigee.png)](http://dabuttonfactory.com/#t=Deploy+to+Apigee&f=Calibri-Bold-Italic&ts=22&tc=fff&hp=35&vp=10&c=round&bgt=pyramid&bgc=f90&ebgc=f90&shs=4&shc=666&sho=se)

#### Getting started
######Example of a Maven API Proxy enabled with Deploy Now Button
Click on the "Deploy Now" button from [this page](https://github.com/dzuluaga/Mavendeploynow)
######Example of a Apigeetool API Proxy enabled with Deploy Now Button
Click on the "Deploy Now" button from [this page](https://github.com/akoo1010/apigee-nock-mock-deploy-now)



##### cURL to Github Repo
```shell
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d 'repo=https%3A%2F%2Fgithub.com%2Fakoo1010%2Fapigee-tutorials.git' -d 'apiFolder=apiproxies%2Fapigee-nock-mock' -d 'makeScript=make.sh' \
-d 'org=testmyapi' -d 'env=test' -d 'userName='$ae_username'' -d 'pw='$ae_password'' 'http://localhost:3000/deploy' -v
```
##### cURL with zip file
```shell
curl -v -X POST -F "zipFile=@Mavendeploynow-master.zip" -F "makeScript=makeScript.sh" -F "apiFolder=Mavendeploynow-master/src/gateway/forecastweatherapi/" -F "org=testmyapi" -F "env=test" \
-F userName=$ae_username -F pw=$ae_password 'http://localhost:3000/deploy_zip'
```

##### Deployment through AWS EC2 instance
```shell
curl -v -X POST -F "zipFile=@/Users/ApigeeCorporation/Downloads/Mavendeploynow-master.zip" -F "makeScript=makeScript.sh" -F "apiFolder=Mavendeploynow-master/src/gateway/forecastweatherapi/" -F "org=testmyapi" -F "env=test" \
-F userName=$ae_username -F pw=$ae_password 'https://deploynow.apigee.com/deploy_zip' -k
```

##### Access Login App
https://deploynow.apigee.com/login-form/

##### Access Login App
http://localhost:3000/login-form/
