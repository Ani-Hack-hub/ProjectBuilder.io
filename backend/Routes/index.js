const express = require('express');
const app = express();
const cors = require('cors');
const readline = require('readline');
const {bytype,create}=require('./database');

app.use(express.json());
app.use(cors());



let binaryString = ''; // Initialize with empty string
let type_ = ''; // Initialize with empty string
let pname = ''; // Initialize with empty string
let desc = ''; // Initialize with empty string

let selectedTechnologies = {
    'aiml': 0,
    'python': 0,
    'java': 0,
    'iot': 0,
    'ds': 0,
    'javascript': 0,
    'angular': 0,
    'mern stack': 0,
    'nodejs': 0,
    'mysql': 0,
    'html': 0,
    'css': 0,
    'express': 0,
    'react': 0,
    'spring boot': 0,
    'postgresql': 0,
    'mongodb': 0,
};


app.post('/updateTechnologies', (req, res) => {
    const selectedTech = req.body.selectedTechnologies;
    let binaryString = '';

    // Reset selected technologies
    for (const tech in selectedTechnologies) {
        selectedTechnologies[tech] = 0;
    }

    // Set selected technologies based on user input
    selectedTech.forEach(tech => {
        if (selectedTechnologies.hasOwnProperty(tech)) {
            selectedTechnologies[tech] = 1;
        }
    });

    // Convert selected technologies to binary string
    for (const tech in selectedTechnologies) {
        binaryString += selectedTechnologies[tech];
    }

    selectedTechString = '';

    // Set selected technologies based on user input
    selectedTech.forEach(tech => {
        if (selectedTechnologies.includes(tech)) {
            selectedTechString += tech + ', ';
        }
    });

    // Remove the last comma and space
    selectedTechString = selectedTechString.slice(0, -2);

    // Log selected technologies
    console.log("Selected Technologies:", selectedTechString);


    // Log selected technologies
    console.log("Selected Technologies (Binary String):", binaryString);

    // Send response acknowledging technology update
    res.send('Technologies updated successfully');

    const { type } = req.body;

    // Check if type is missing or invalid
    if (!type || !['web', 'desktop', 'mobile'].includes(type.toLowerCase())) {
        console.error('Invalid or missing application type');
        return res.status(400).json({ error: 'Invalid or missing application type' });
    }

    // Determine the message based on the type
    let message = '';
    switch (type.toLowerCase()) {
        case 'web':
            message = 'You chose a web application.';
            break;
        case 'desktop':
            message = 'You chose a desktop application.';
            break;
        case 'mobile':
            message = 'You chose a mobile application.';
            break;
        default:
            console.error('Invalid or missing application type');
            return res.status(400).json({ error: 'Invalid or missing application type' });
    }

    // Log the received type
    console.log('Received type:', type);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a project name: ', (pname) => {
  console.log("Name:", pname);
  rl.question('Enter a project description: ', (desc) => {
    console.log("Description:", desc);
    rl.close();
    console.log(pname,desc);


    create(pname,binaryString,desc,type ) // Call the create function with updated values
                .then(() => console.log('Data inserted into the database successfully.'))
                .catch(err => console.error('Error inserting data into the database:', err));
            rl.close();
  });
});

}); 

 
app.get("/updateTechnologies/:typeOrBinaryString/:paramValue", async (req, res) => {
    const binaryString=req.params.typeOrBinaryString;
    const typeparam=req.params.paramValue;
    const result=await bytype(typeparam,binaryString)
    console.log(binaryString + '\n'+typeparam)
    // console.log(result)
    res.send(result);
});



const port = process.env.PORT || 5555; // Set default port to 3000
app.listen(port, () => {
    console.log(`Server is running and listening on port ${port}`);
});

module.exports={binaryString,type_,pname,desc};