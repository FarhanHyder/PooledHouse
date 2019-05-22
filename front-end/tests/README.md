## Testing Instructions:  

### To Run Tests  
> Just run the following command from the project root directory which is /PooledHouse/front-end/  
`npm test`  
Since all tests are run against the deployed version on AWS cloud [from here](http://front-end-20190514132134-hostingbucket-phdev.s3-website-us-east-1.amazonaws.com/), running local server is not necessary  

package.json is configured in a way that it will keep watching and run all tests for every change anywhere within the project.  

#### If instead you prefer to run all tests only once, edit package.json and change the following section to:   
...,  
"scripts": {  
...,  
"test": "jest",  

#### If test coverage report production is desired, edit it to the following:  
...,  
"scripts": {  
...,  
"test": "jest --watchAll --coverage --coverageDirectory=output/testCoverage",

### Instructions to Set-up Testing Environments:  
#### Install Jest
`npm install --save-dev jest`  

#### To use Babel, install required dependencies  
`npm install --save-dev babel-jest @babel/core @babel/preset-env`  
