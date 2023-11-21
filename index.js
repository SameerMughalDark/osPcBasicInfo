const dark_Os=require("os");//for using os pacakge of nodeJS

// Now with the help of os module we can take out the information of our operating system
let userInfo=dark_Os.userInfo();
// console.log("User Name:",userInfo.username);
// console.log("User Files are located in:",userInfo.homedir);


let hostName=dark_Os.hostname();
// console.log("Your Desktop Name is :",hostName);

let osType=dark_Os.type();
// console.log(`Your Operating System Type is : ${osType}`);

let architecture_of_YourOS=dark_Os.arch();
// console.log(`Your Architecture of PC is :${architecture_of_YourOS}`);



let totalProcessorsInCPU=dark_Os.cpus().length;
// console.log(`Your Total Processors are:${totalProcessorsInCPU}`);



let machineInfo=dark_Os.cpus();
// for (const items of machineInfo) {
//     console.log(`Your CUP Model Detail is: ${items.model}`);
//     console.log(`Your CUP SPEED is: ${items.speed} MHz`);
    
// }
// console.log(`Important Inforamtion of Your PC is :${}`);




// Now I am seting my server side so I can show my this data on my webpage using html css and pug BTW view engine like pug or ejs used to render your html css on server side
const express = require('express');
const app = express();
const port = 3000;

// Set Pug as the view engine
app.set('view engine', 'pug');


// Define a route that renders the HTML page
app.get('/', (req, res) => {
    const data = { 
        
        userName: userInfo.username,
        filesLocation: userInfo.homedir,
        hostName: hostName,
        operatingType:osType,
        arictec:architecture_of_YourOS,
        totalProcessors:totalProcessorsInCPU,
        machineInformation:machineInfo
    };
    res.render('darksPUGFile', { data });
  });

  app.listen(port, () => {
    console.log(`Dark Click to Run your Web--> http://localhost:${port}`);
  });