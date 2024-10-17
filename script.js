
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("enter month:", (m) => {
  r1.question("enter day:", (d) => {
    const month_ex = +m;
    const day_ex = +d;
    
    const month_v1 = 12;
    const day_v1 = 30;
    const month_v2 = 9;
    const day_v2 = 40;

    //number of days passed
    let days_passed =( (month_ex - 1) * day_v1) + day_ex;
    
 
    const monthF = Math.ceil(days_passed/day_v2);
    const dayF =  days_passed  % day_v2;

    console.log(`day ${dayF} & month ${monthF}`);
    r1.close();
  });
  
});

