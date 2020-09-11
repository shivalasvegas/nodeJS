# nodeJS
To run these functions you need to have node.js installed: http://wwww.nodejs.org  
To check nodejs is installed: *$ which node* 

## Node.js functions
to run each function: *$ node (functionName)*  
Five basic functions with notes: 
* eb_functionOpperations1
* ec_functionBasicOpperations
* ha_functionAdd
* hb_callsFunctionAdd
* ka_functionToFindlLongestWord

MathFour.js - a basic maths opperation function for jest tests.


## Jest Tests
Jest was created by Facebook to test their react applications.  To find out more about it: http://www.jestjs.io  
You need to have node.js and also use npm or yarn to install jest.  
npm is included in the node.js install. *$ which npm*  will print the location of npm; *$npm --version*  will print the version to the console.  
To setup your jest project you need an npm environment: *$ npm init -y* 
To update npm: *$ npm install -g npm@latest*

### To install Jest
*$npm install --save-dev jest*

### Jest environment
Jest expects to find a folder called \__\_tests\_\__ in your project directory; each js test file should have the suffix .test

### Running a test
Add 
{
  "scripts": {
    "test": "jest"
    }
 }  to your package.json.  
Once you have a test file, run the test with: *$npm run test* or *$ npm test*

### Test coverage

To run a coverage test: *$ npm test -- --coverage*

Output: 

-------------|---------|----------|---------|---------|-------------------
File         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------|---------|----------|---------|---------|-------------------
All files    |     100 |      100 |     100 |     100 | 
 mathFour.js |     100 |      100 |     100 |     100 | 
-------------|---------|----------|---------|---------|-------------------
