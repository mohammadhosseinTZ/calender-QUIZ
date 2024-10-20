const { log } = require("console");
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question("enter first month :", (m1) => {
  r1.question("enter first day :", (d1) => {
    r1.question("enter second month :", (m2) => {
      r1.question("enter second day :", (d2) => {
        r1.question("enter month of your question:", (m3) => {
          r1.question("enter day of your question:", (d3) => {
            const month_ex = +m3;
            const day_ex = +d3;

            const month_v1 = m1;
            const day_v1 = d1;
            const month_v2 = m2;
            const day_v2 = d2;

            //number of days passed
            let days_passed = (month_ex - 1) * day_v1 + day_ex;

            const monthF = Math.ceil(days_passed / day_v2);
            const dayF = days_passed % day_v2;
            monthF > month_v2
              ? console.log(`day ${dayF} & month ${monthF % month_v2}`)
              : console.log(`day ${dayF} & month ${monthF}`);

            r1.close();
          });
        });
      });
    });
  });
});
