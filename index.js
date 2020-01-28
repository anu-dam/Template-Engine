const fs = require("fs");
const inquirer = require("inquirer");

//Importing classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

//Importing template files
const indexTemplate = require("./Temp/indexTemplate");
const managerTemplate = require("./Temp/managerTemplate");
const engineerTemplate = require("./Temp/engineerTemplate");
const internTemplate = require("./Temp/internTemplate");

const roles = [Manager, Engineer, Intern];

//Generated team members from user input
const teamMembers = []; 

//Counter for question display/array
let displayCount = 0; 

const displayQuestions = [
    {
        name: "Manager's name?",
        id: "Manager's Id?",
        email: "Manager's email address:",
        required: "Manager's Contact number:",
        
    },
    {
        name: "Engineer's name?",
        id: "Engineer's Id?",
        email: "Engineer's email address:",
        required: "Engineer's github Profile Name:",
    },
    {
        name: "Intern's name?",
        id: "Intern's Id?",
        email: "Intern's email address:",
        required: "Intern's school:",
    }
];

const questionStart = () => {
    return inquirer
    .prompt([{
        type: "input",
        message: displayQuestions[displayCount].name,
        name: "name",
    },
    {
        type: "input",
        message: displayQuestions[displayCount].id,
        name: "id",
    },
    {
        type: "input",
        message: displayQuestions[displayCount].email,
        name: "email",
    },
    {
        type: "input",
        message: displayQuestions[displayCount].required,
        name: "required",
        validate: displayQuestions[displayCount].val
    }])

.then(function(res) {
    const person = new roles[displayCount](res.name, res.id, res.email, res.required);

    teamMembers.push(person); 

    if(person.getRole() !== "Manager") { 
        repeat();
    }
    else {
        displayCount++;
        questionStart();
    }
});

}
const repeat = () => {
return inquirer
.prompt([{
    type: "input",
    message: "Do you need to add another? (Y/N)",
    name: "continue",
}]).then(function(response) {
    let reply = response.continue.toLowerCase();
    let length = roles.length; 
    if (reply === "y") {
        questionStart();
    }
    else if(reply === "n") {
        displayCount++; 
        if(displayCount<length) {
            questionStart();
        }
        else if(displayCount=length) {
            switchFunc();
        }
    } 
});
}

const switchFunc = () => { 
const team = [];
teamMembers.forEach(member => {
    switch(member.getRole()) {
        case "Manager":
            let man = managerTemplate(member);
            return team.push(man);
        case "Engineer":
            let eng = engineerTemplate(member);
            return team.push(eng);
        case "Intern":
            let int = internTemplate(member);
            return team.push(int);
    
    }
});

const homePage = indexTemplate(team.join("\n")); 
generateHTML(homePage);
}

const generateHTML = output => { 
fs.writeFile("./output/team.html", output, function(err) {
    if(err) {
        return (console.log(err));
    }
    console.log("successfully created the HTML from data!");
});
}

questionStart();