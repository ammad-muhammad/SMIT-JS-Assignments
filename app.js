// let category = prompt("Enter the product category: Electronics, Clothing, or Groceries");
// let totalPurchase = +(prompt("Enter the total purchase amount:"));

// if (category === "Electronics") {
//     if (totalPurchase > 50000) {
//         document.write("You get a 20% discount!" + "</br>");
//         document.write("Final Price:", totalPurchase * 0.8);
//     } else if (totalPurchase > 20000) {
//         document.write("You get a 10% discount!" + "</br>");
//         document.write("Final Price:", totalPurchase * 0.9);
//     } else {
//         document.write("You get a 5% discount!" + "</br>");
//         document.write("Final Price:", totalPurchase * 0.95);
//     }
// } else if (category === "Clothing") {
//     if (totalPurchase > 20000) {
//         document.write("You get a 15% discount!" + "</br>");
//         document.write("Final Price:", totalPurchase * 0.85);
//     } else if (totalPurchase > 10000) {
//         document.write("You get a 7% discount!" + "</br>");
//         document.write("Final Price:", totalPurchase * 0.93);
//     } else {
//         document.write("You get a 3% discount!" + "</br>");
//         document.write("Final Price:", totalPurchase * 0.97);
//     }
// } else if (category === "Groceries") {
//     if (totalPurchase > 10000) {
//         document.write("You get a 10% discount!" + "</br>");
//         document.write("Final Price:", totalPurchase * 0.9);
//     } else if (totalPurchase > 5000) {
//         document.write("You get a 5% discount!" + "</br>");
//         document.write("Final Price:", totalPurchase * 0.95);
//     } else {
//         document.write("You get a 2% discount!" + "</br>");
//         document.write("Final Price:", totalPurchase * 0.98);
//     }
// } else {
//     alert("Invalid category. Please choose from Electronics, Clothing, or Groceries.");
// }



// task 2 

// let text = "Lorem Ipsum dolor sit amEt, consectetur adipisicIng elit. Laboriosam in ullam explicabo repellat modi enim doloremque asperiores   dignissimos veniam distinctIo! Consectetur laboriosam repellat nulla odit quam quis est provident nesciunt.  Vitae eius, totam, facilIs recusandae deleniti quam similique impedit saepe dicta sunt, praesentium cupiditate  itaque tempora consequatUr accusantium rerum repellat laudantium magni a mollitia distinctio. Odio commodi   praesentium veritatis aliAs.officiis harum similique dolores animi. Minima architecto velit illo ipsa illum   corporis eaque eius est Ipsam nesciunt! Deleniti neque aut, sapiente at reiciendis pariatur, amet omnis dOlOrIm odio hic ex!"
// let doubleSpace = 0;
// let totalVowelLetters  = 0;
// let ACount = 0;
// let ECount = 0;
// let ICount = 0;
// let OCount = 0;
// let UCount = 0;

// for(var i = 0 ; i < text.toLowerCase().length;i++){
//     if(text[i]== " " && text[i+2]=== " "){
//         doubleSpace++;
//     }
// let char = text[i].toLowerCase();
// if(char == "a"){
//     ACount++;
// }else if(char == "e"){
//     ECount++;
// }else if(char == "i"){
//     ICount++;
// }else if(char == "o"){
//     OCount++;
// }else if(char == "u"){
//     UCount++;
// }

// }

// totalVowelLetters   = ACount + ECount +  ICount + OCount + UCount; 

// console.log("Double space: "+ doubleSpace)
// console.log("totalVowelLetters: " + totalVowelLetters);
// console.log("Total A vowels: " + ACount);
// console.log("Total E vowels: " + ECount);
// console.log("Total I vowels: " + ICount);
// console.log("Total O vowels: " + OCount);
// console.log("Total U vowels: " + UCount);


// task 3 
// let numbers = [23, 34, 53, 55, 65, 75, 74,3, 2, 76, 75, 33, 77, 88, 96, 43, 34, 28, 54, 90];
// let even = [];
// let odd = [];
// for(var i = 0; i< numbers.length; i++){
//     if(numbers[i]%2=== 0){
//         even.push(numbers[i])
//     }else{
//         odd.push(numbers[i])
//     }
// }

// // even number sorting
// for(var i = 0 ; i<even.length-1;i++){
//     for(var j = i+1; j<even.length;j++){
//         if(even[i] > even[j]){
//             let temp = even[i];
//             even[i] = even[j];
//             even[j] = temp;
//         }
//     }
// }
// // odd number sorting
// for (let i = 0; i < odd.length - 1; i++) {
//   for (let j = i + 1; j < odd.length; j++) {
//     if (odd[i] > odd[j]) {
//       let temp = odd[i];
//       odd[i] = odd[j];
//       odd[j] = temp;
//     }
//   }
// }

// console.log(even);
// console.log(odd);



// let numbers = [23, 34, 53, 55, 65, 75, 74,3, 2, 76, 75, 33, 77, 88, 96, 43, 34, 28, 54,66,  90];
// let sort = [];
// for(var i = 0; i numbers.length-1;i++){
//     sort.push(numbers[i])
//     for(var j = 0 ; j<sort.length-1;j++){
//         if(sort[i]<sort[j]){
//             let temp = sort[i];
//             sort[i] = sort[j];
//             sort[j]= temp;
//         }
//     }
// }

// console.log(sort);


// task 4
// let text = `Lorem Ipsum dolor sit amEt consectetur adipisicIng elit Laboriosam in ullam explicabo repellat modi enim doloremque asperiores   dignissimos veniam distinctIo! Consectetur laboriosam repellat nulla odit quam quis est provident nesciunt  Vitae`;
// let arr = text.split("");
// console.log("arr: ", arr);
// console.log("String lenght: ", arr.length);
// let indexNum  = prompt(`Enter a Index number you want to replace the letter (0 to ${arr.length-1})`);
// let replacement = prompt("Enter a word to replace");
// if(indexNum >= 0 && indexNum < arr.length){
//     arr[indexNum] = `<span style="font-weight: bold; color: red;">${replacement}</span>`;
//     let updatedString = arr.join("");
//     document.write(`<b>Orignal Text:</b><br>${text}<br><br> `)
//  document.write(`<b>Updated Text:</b><br>${updatedString}`);
    
// }  else{
//     alert("Invalid Index");
    
// }

// let text = `Lorem Ipsum dolor sit amEt consectetur adipisicIng elit Laboriosam in ullam explicabo repellat modi enim doloremque asperiores dignissimos veniam distinctIo! Consectetur laboriosam repellat nulla odit quam quis est provident nesciunt Vitae`;
// console.log("Text: " + text);
// let arr = text.split("");
// let letterToReplace = prompt("Enter the letter you want to replace:");
// let replacement = prompt("Enter the replacement letter:");
// let isReplaced = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === letterToReplace) {
//         arr[i] = `<span style="font-weight: bold; color: red;">${replacement}</span>`;
//         isReplaced = true; 
//     }
// }
// if (isReplaced) {
//     let updatedString = arr.join("");
//     document.write(`<b>Original Text:</b><br>${text}<br><br>`);
//     document.write(`<b>Updated Text:</b><br>${updatedString}`);
// } else {
//     alert(`The letter "${letterToReplace}" was not found in the text.`);
// }

