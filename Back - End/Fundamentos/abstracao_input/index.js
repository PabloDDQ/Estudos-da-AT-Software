const inquirer = require('inquirer')

inquirer.prompt([{
    name: 'p1',
    message: 'Qual a primeira nota?',
},
{
    name: 'p2',
    message: 'Qual a segunda nota?'
},
]).then((answers)).catch(err => console(err))