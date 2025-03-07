// let studentNames = [];


// let studentNamesObject = new Array();


// let stringsArray = ["apple", "banana", "cherry"];

// let numbersArray = [10, 20, 30, 40, 50];

// let booleanArray = [true, false, true, false];

// let mixedArray = ["hello", 42, true, [1, 2, 3]];


// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// for (var i = 0 ; i<qualifications.length; i++){
//     // console.log(qualifications[i])
//     document.write(qualifications[i] + "</br>")
// }


//   let studentNames = ["Alice", "Bob", "Charlie"];

//         let studentScores = [450, 380, 420];
//         const totalMarks = 500;
//         document.write("<h2>Student Scores and Percentages</h2>");
//         for (let i = 0; i <br studentNames.length; i++) {
//             let percentage = (studentScores[i] / totalMarks) * 100;
//             document.write(`<p>${studentNames[i]}: Score = ${studentScores[i]}, Percentage = ${percentage.toFixed(2)}%</p>`)}






//  let colors = ['Red', 'Green', 'Blue'];
// document.write("Initial Colors: " + colors.join(', ') + "<br>");

// let colorStart = prompt("Enter a color to add at the beginning:");
// colors.unshift(colorStart);
// document.write("After adding color at the beginning: " + colors.join(', ') + "<br>");

// let colorEnd = prompt("Enter a color to add at the end:");
// colors.push(colorEnd);
// document.write("After adding color at the end: " + colors.join(', ') + "<br>");

// colors.unshift('Yellow', 'Purple');
// document.write("After adding two colors at the beginning: " + colors.join(', ') + "<br>");

// colors.shift();
// document.write("After deleting the first color: " + colors.join(', ') + "<br>");

// colors.pop();
// document.write("After deleting the last color: " + colors.join(', ') + "<br>");

// let indexToAdd = +(prompt("Enter the index to add a color:"));
// let colorToAdd = prompt("Enter the color to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("After adding a color at index " + indexToAdd + ": " + colors.join(', ') + "<br>");

// let indexToDelete = +(prompt("Enter the index to delete color(s):"));
// let numToDelete = +(prompt("Enter the number of colors to delete:"));
// colors.splice(indexToDelete, numToDelete);
// document.write("After deleting " + numToDelete + " color(s) from index " + indexToDelete + ": " + colors.join(', ') + "<br>");


// let arr = [345,322,333,232,323,221];
// document.write("student score: "+ arr + "</br>" );
// arr.sort((a,b)=> a-b);
// document.write("student score: " + arr.join(', ') + "</br>" );


// let cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
// let selectedCities = cities.slice(0, 3);
// document.write("Cities: " + cities.join(', ') + "<br>");
// document.write("Selected Cities: " + selectedCities.join(', '));

// var arr = ["This", " is", " my", " cat"];
// document.write(arr + "</br>"); 
// var result = arr.join("");
// document.write("Combined String: " + result);



// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write('<select>');
// for (let manufacturer of phoneManufacturers) {
//   document.write(`<option value="${manufacturer}">${manufacturer}</option>`);
// }
// document.write('</select>');
