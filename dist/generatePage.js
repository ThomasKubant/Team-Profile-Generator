team = require('../index');
let header = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="src/style.css">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css" integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I=" crossorigin="anonymous">
    </head>
    <body>
        <header class="grid-x">
            <div class="cell">
                Teamly
            </div>
        </header>`
}
let manager = () => {
    return `<div class="grid-x">
    <div class="cell medium-6 card managerCard">
        <div class="card-divider">
            <h2>Thomas</h2>
        </div>
        <ul>
            <li>Role: </li>
            <li>Employee ID: </li>
            <li>Email Address: </li>
            <li>Office Number: </li>
        </ul>
    </div>
</div>
    `
}
console.log(team.managerName);
