// chapter 6 to 9 

// let value = 10;
// document.write("result:" + "</br>" + "the value of a is: " + value + "</br>");
// document.write("----------------------------------------" );

// document.write("</br> the value of ++a is: " + (++value) + "</br>");
// document.write("now the value of a is: " + (value) + "</br></br></br>");

// document.write("the value of a++ is: " + (value++) + "</br>");
// document.write("now the value of a is: " + value + "</br></br></br>");

// document.write("the value of --a is: " + (--value) + "</br>");
// document.write("now the value of a is: " + value + "</br></br></br>");

// document.write("the value of a-- is: " + (value--) + "</br>");
// document.write("now the value of a is: " + value + "</br>");

// var a = 2;
// var b = 1;

//  var result = --a - --b + ++b + b--;
//  document.write(result);


// var user = prompt("Enter your name");
// alert(`welcome ${user}`);


// var tableNum = +prompt("Enter any number of table")|| 5;
// for(i = 1 ;i <=10; i++){
//     document.write(`${tableNum} * ${i} = ${tableNum * i} <br>`)
// }


// var subject1 = prompt("enter your first subject");
// var subject2 = prompt("enter your second subject");
// var subject3 = prompt("enter your third subject");
// var totalMarks = 100;
// var obtainMarks1 = +prompt(`enter your ${subject1} marks`);
// var obtainMarks2= +prompt(`enter your ${subject2} marks`);
// var obtainMarks3 = +prompt(`enter your ${subject3} marks`);
// var sub1Percentage = (obtainMarks1 / totalMarks) * 100 
// var sub2Percentage = (obtainMarks2 / totalMarks) * 100;
// var sub3Percentage = (obtainMarks2 / totalMarks) * 100;
// var finalObtianMarks = obtainMarks1+ obtainMarks2+ obtainMarks3;
// var Percentage = (finalObtianMarks/300)*100;

// document.write(`
// <table border="1" cellspacing="0" cellpadding="5">
//   <tr>
//     <th>Subjects</th>
//     <th>Total Marks</th>
//     <th>Obtained Marks</th>
//     <th>Percentage</th>
//   </tr>
//   <tr>
//     <td>${subject1}</td>
//     <td>${totalMarks}</td>
//     <td>${obtainMarks1}</td>
//     <td>${sub1Percentage}%</td>
//   </tr>
//   <tr>
//     <td>${subject2}</td>
//     <td>${totalMarks}</td>
//     <td>${obtainMarks2}</td>
//     <td>${sub2Percentage}%</td>
//   </tr>
//   <tr>
//     <td>${subject3}</td>
//     <td>${totalMarks}</td>
//     <td>${obtainMarks3}</td>
//     <td>${sub3Percentage}%</td>
//   </tr>
//   <tr>
//     <td><strong>Total</strong></td>
//     <td><strong>300</strong></td>
//     <td><strong>${finalObtianMarks}</strong></td>
//     <td><strong>${Percentage.toFixed(1)}%</strong></td>
//   </tr>
// </table>
// `);
