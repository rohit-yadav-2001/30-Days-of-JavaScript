// // level 1
// // answer 1
// let firstName = "Caption";
// let lastName = "Marvel";
// let country = "America";
// let age = 29;
// let isMarried = true;
// let year = 2024;
// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof country);
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log(typeof year);
// //  answer 2
// let first_num = "10";
// let second_num = 10;
// console.log(typeof first_num);
// console.log(typeof second_num);
// console.log(parseInt(first_num) === second_num);
// // answer 3
// let Num = parseInt("9.8");
// let value = 10;
// console.log(Num == value);
// // answer 4
// // 4a
// // truthy value
// let Name = "Super";
// let last_Name = "Sonic";
// let Age = 24;
// console.log(Boolean(Name));
// console.log(Boolean(last_Name));
// console.log(Boolean(Age));

// // 4b
// // falsy value
// let Value = 4 < 3;
// let text;
// let content = 0;
// console.log(Boolean(Value));
// console.log(Boolean(text));
// console.log(Boolean(content));
// // answer 5
// console.log(4 > 3);
// console.log(4 >= 3);
// console.log(4 < 3);
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != "4");
// console.log(4 == "4");
// console.log(4 === "4");
// let first_text = "python";
// let second_text = "jargon";
// console.log(first_text.length != second_text.length);
// // answer 6
// console.log(4 > 3 && 10 < 12);
// console.log(4 > 3 && 10 > 12);
// console.log(4 > 3 || 10 < 12);
// console.log(4 > 3 || 10 > 12);
// console.log(!(4 > 3));
// console.log(!(4 < 3));
// console.log(!false);
// console.log(!(4 > 3 && 10 < 12));
// console.log(!(4 > 3 && 10 > 12));
// console.log(!(4 === "4"));
// console.log(!(first_text.search("on") === second_text.search("on")));
// // answer 7
// // a
// let now = new Date();
// console.log(now.getFullYear());
// // b
// console.log(now.getMonth());
// // c
// console.log(now.getDate());
// // d
// console.log(now.getDay());
// // e
// console.log(now.getHours());
// // f
// console.log(now.getMinutes());
// const Seconds = Date.now();
// console.log(Seconds);
// // level 2
// // a
// let base = parseInt(prompt("Enter-Base value"));
// let height = parseInt(prompt("Enter-Height value"));
// let value_num = 0.5 * base * height;
// document.write(value_num);
// // b
// let a = parseInt(prompt("enter side a"));
// let b = parseInt(prompt("enter side b"));
// let c = parseInt(prompt("enter side c"));
// let d = a + b + c;
// document.write("the perimeter of triangle " + d);
// // c
// let Length = parseInt(prompt('Enter-lenght'));
// let width = parseInt(prompt('Enter-width'));
// let area = (Length * width)
// let input = 2*(Length+width)
// document.write(input +' ', area)
// d
// const PI = 3.14
// let radius = (parseInt(prompt('Enter the value of radius')))
// let calculation = (PI*radius*radius)
// // document.write(calculation)
// let circumference =(2*PI*radius)
// document.write(circumference)
// answer 5
// const x_intercept = (prompt('Enter x-intercept'))
// let y = ('2*x_intercept-2')
// document.write(y)
// // answer 6
// let x1 = prompt('Enter x1 value')
// let x2 =prompt('Enter x2 value')
// let y1 =prompt('Enter y1 value')
// let y2 =prompt('Enter y2 value')
// let m = (y2-y1)/(x2-x1)
// document.write(m)
// answer 9
//  let hours = prompt('Enter hours');
//  let rate = prompt(' Enter rate per hour')
//  let earning = (hours*rate)
//  document.write(earning)
// answer 10
// let user_name = prompt('Enter your Name');
// if(user_name.length >= 7){
//     document.write('Your Name is long')
// }
// else {
//     document.write('your name is short')
// }
// answer 11
// let firstName = prompt('Enter your Name');
// let Family_Members = prompt('Enter Family Name')
// let Value = (firstName.length)
// let value= (Family_Members.length)
// console.log(Value,value)
// document.write('Your First Name,'+firstName+  ' is longer than your family name,'+Family_Members)
// answer 12
// let myAge = parseInt(prompt("Enter my age"));
// let Yourage = parseInt(prompt("Enter Your age"));
// if (myAge < Yourage) {
//   dif = Yourage- myAge;
//   document.write("You are " + dif + " years younger than me.");
// }
// else
// {
//   dif = myAge - Yourage;
//   document.write("I am " + dif + " years older than you.");
// }
// answer 13
// let birth_year = prompt("Enter your BirthDay");
// let date = new Date().getFullYear() - birth_year;
// if (18 <= date) {
//   document.write("you are " + date + " You are old enough to drive.");
// } else {
//   document.write(
//     "you are " +
//       date +
//       ". You will be allowed to drive after " +
//       (18 - date) +
//       " years."
//   );
// }
// answer 14
// const time = new Date();
// console.log(time)
// const Year = time.getFullYear();
// const Month = time.getMonth()+1;
// const Day = time.getDay();
// const Hours = time.getHours();
// const Minutes = time.getMinutes();
// console.log(Year +'-'+Month+'-'+Day+' '+Hours+':'+Minutes);
// console.log(Day +'-'+Month+'-'+Year+' '+Hours+':'+Minutes);
// console.log(Day +'/'+Month+'/'+Year+' '+Hours+':'+Minutes);
// answer level 3
let dateInfo = new Date();
let year = dateInfo.getFullYear();
let month = dateInfo.getMonth()+1;
let date = dateInfo.getDate();
let hours = dateInfo.getHours();
let minutes = dateInfo.getMinutes();
function format(a) {
  if (a < 10) {
    return (a = `0${a}`);
  }
  return a;
}
let formatHours = format(hours);
let formatMinutes = format(minutes);
console.log(`${year}-${month}-${date} ${formatHours}:${formatMinutes}`)
