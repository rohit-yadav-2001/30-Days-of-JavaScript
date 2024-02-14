// level-1
// first Answer
let challenge = "30 Days Of JavaScript ";
console.log(challenge);
// second answer
console.log(typeof challenge);
// third answer
console.log(challenge.length);
// fourth answer
console.log(challenge.toUpperCase());
// five answer
console.log(challenge.toLowerCase());
// six answer
console.log(challenge.substring(10, 21));
// seven answer
console.log(challenge.slice(3));
// answer eight
console.log(challenge.includes("Script"));
// answer nine
console.log(challenge.split());
// answer ten
console.log(challenge.split(" "));
// answer 11
let variable = "Facebook Google Microsoft Apple IBM Oracle Amazon";
console.log(variable.split(" "));
// answer 12
console.log(challenge.replace("JavaScript", "Python"));
// answer 13
console.log(challenge.charAt(15));
// answer 14
console.log(challenge.charCodeAt(11));
// answer 15
console.log(challenge.indexOf("a"));
// answer 16
console.log(challenge.lastIndexOf("a"));
// answer 17
let position ='You cannot end a sentence with because because because is a conjunction'
console.log(position.indexOf("because"));
// answer 18
console.log(position.lastIndexOf("because"));
// answer 19
console.log(position.search("because"));
// answer 20
console.log(challenge.trim(''));
// answer 21
console.log(challenge.startsWith('30'))
// answer 22
console.log(challenge.endsWith('JavaScript'))
// answer 23
console.log(challenge.match('a'));
// answer 24
let syntax = ' 30 Days Of '
console.log(syntax.concat("JavaScript"));
// answer 25
console.log(challenge.repeat(2))

// level-2
// answer-1
let value =  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(value);
// answer-2
let sentence = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(sentence + "--By Mother Teresa");
// answer 3
let first_num = '10';
let second_num = 10;
console.log(first_num == second_num)
console.log(parseInt(first_num) === second_num, "Answer three")
// answer 4
let num = parseFloat('9.8')
console.log(Math.round(9.8) === 10);
// answer 5
let Sentence = 'python,jargon'
console.log(Sentence.match(/on/gi).length, "Answer 5")
// answer 6
let content = "I hope this course is not full of jargon"
console.log(content.includes('jargon'));
// answer 7
let first_Num =  Math.ceil(Math.random()*100)
console.log(first_Num)
// answer 8
let FirstNum = Math.ceil(Math.random()*(100-50)+50);
console.log(FirstNum);
// answer 9
let First_Num = Math.ceil(Math.random()*255)
console.log(first_Num)
// answer 11
let last_num = '1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125'
console.log(last_num);
// answer 12
let sub ='You cannot end a sentence with because because because is a conjunction'
console.log(sub.substr(31,23));
// level 3
// answer 1
let Count = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(Count.match(/love/gi).length);
// answer 2
let Number = Math.floor(Math.random()*11)
console.log(Number);
let techName = 'javascript'
console.log(techName.charAt(Number));
// answer 3
let frequent ='%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(frequent.replaceAll(/[%$@&#]/g,""));




