const ets = require("./ets.js");
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* employee = new ets.Employee();

console.log(employee);
 */

const employees = {
  jack: new ets.Employee("Jack", ''),
  john: new ets.Employee("John", ''),
  toto: new ets.Employee("Toto", ''),
  rambo: new ets.Manager("Rambo", 'Direction'),
  sandy: new ets.Developer("sandy")
};

console.log(employees);

r1.question("Choisissez un employé :", (answer) => {
  console.log("vous avez saisi:" + answer);
});
