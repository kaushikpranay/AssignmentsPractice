// const readline = require('readline');


// let FirstName = readline("Enter your first name: ");
// let TitleName = readline("Enter your title: ");
// console.log(FirstName+" "+TitleName);





const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your first name: ', (FirstName) => {
  console.log(`You entered: ${firstName}`);
  rl.close();
});
