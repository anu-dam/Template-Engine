module.exports = team => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team</title>
    <style>
        .title {
            display:inline-block; 
            margin-top:50px; 
            margin-left:50%; 
            transform:translateX(-50%); 
        }
        .import {
            display:flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            margin-top: 100px;
        }
    </style>
</head>
<body style="margin:0;">
    <header style="height:150px; width:100%; background-color:lightblue; box-shadow: 0 0 20px black;">
        <h1 class="title">My Team</h1>
    </header>
    <div class="import">
       ${team}
    </div>
</body>
</html>`
};