// answer 1
// level 1
// let birth_year = prompt("Enter your Age");
// if (18 <= birth_year) {
//   document.write("You are " + birth_year + ": You are old enough to drive.");
// } else {
//   document.write(
//  "you are " +birth_year+  ":You will be allowed to drive after " +(18 -birth_year) +" years."
//   );
// }
// answer 2
// let myAge = Number(parseInt(prompt("Enter my age")));
// let Yourage = parseInt(prompt("Enter Your age"));
// if (myAge < Yourage) {
//   dif = Yourage - myAge;
//   document.write("You are " + dif + " years older than me.");
// } else {
//   dif = myAge - Yourage;
//   document.write("I am " + dif + " years older than you.");
// }
// // answer 3
// let a = prompt('Enter A value')
// let b = prompt('Enter B value')
// if (a > b) {
//   document.write(a+" is greater than " + b);
// } else if (b > a) {
//     document.write( a +" is less than " +b)
// }
// other
// 'a > b'
//  ? document.write( a +" is greater than "+ b)
//  : document.write(a+' is less than ' +b)

// answer 4
// let a = prompt("Enter Value");
// let b = a % 2;
// if (b == 0) {
//   document.write(a + " is a even number");
// } else document.write(a + " is a odd number");

// level 2
// answer 1
// let score = Number(prompt("enter your score"));
// if (score <= 100) {
//   switch (true) {
//     case score > 80:
//       document.write("A");
//       break;
//     case score > 70:
//       document.write("B");
//       break;
//     case score > 60:
//       document.write("C");
//       break;
//     case score > 50:
//       document.write("D");
//       break;
//     case score < 50:
//       document.write("F");
//   }
// }
// else {
//     alert("Please enter value less than 100")
// }
// }
// answer 2
// let month = prompt("Check seasons");
// switch (month) {
//   case "september":
//   case "october":
//   case "November":
//     document.write("the season is Autumn");
//     break;
//   case "december":
//   case "january":
//   case "febuary":
//     document.write("the season is Winter");
//     break;
//   case "march":
//   case "april":
//   case "may":
//     document.write("the season is Spring");
//     break;
//   case "june":
//   case "july":
//   case "august":
//     document.write("the season is Summer");
// }
// answer 3
// let weekDay = prompt("Enter WeekDay");
// if (weekDay == "saturday" || weekDay == "sunday") {
//   document.write(`${weekDay} is a weekend day`);
// } else if (
//   weekDay == "monday" ||
//   weekDay == "tuesday" ||
//   weekDay == "wednesday" ||
//   weekDay == "thursday" ||
//   weekDay == "friday"
// ) {
//   document.write(`${weekDay} is a work day`);
// }
// level 3
let month = prompt("Enter month ");
let months = month.toLowerCase();
switch (months) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    document.write(`${month} has 31 days`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    document.write(`${month} has 30 days`);
    break;
  case "february":
    document.write(`${month} has 29 days`);
}
