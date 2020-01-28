module.exports = data => {
    return `<div style="min-height:300px; width:250px; border: 1px solid black; box-shadow: 0 0 20px black; margin:20px; overflow: auto;">
                <div style="background-color:lightblue; padding:10px; text-align:center;">
                    <h1 style="margin:0;">${data.name}</h1>
                    <h1>${data.getRole()}</h1>
                </div>
                <div style="padding:10px;">
                    <p><strong>ID:</strong> ${data.id}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Office Number:</strong> ${data.getOfficeNumber()}</p>
                </div>
            </div>`
};