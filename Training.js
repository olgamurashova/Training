let newEmployee = require("./newEmployee Class.js");

function newHire(employee) {
    if (employee.status === 'new' || employee.status === 'junior') {
       console.log(`${employee.name} requires training.`);
    } else {
        console.log('The employee did training.');
    }
};


let worker1 = new newEmployee('Kevin Pool','new');
let worker2 = new newEmployee('Sarah Node', 'senior');
let worker3 = new newEmployee('Olga Murashova', 'junior');
let worker4 = new newEmployee('George Anton', 'new');

newHire(worker3);