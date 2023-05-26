                 // Chapter 21 (Changing Case) //
 

//  var cityToCheck = prompt("Enter your city");
//  cityToCheck = cityToCheck.toLowerCase();
//  var cleanestCities = ["karachi", "islamabad", "lahore"];
//  for (var i = 0; i <= 4; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//  alert("It's one of the cleanest cities");
//  }
//  }


                       // Ans (hello, world) //
// var a = "Hello, World";  
// a = a.toLowerCase();
// console.log(a);


                     // Ans ( WELLCOME TO MY WORLD ) //
// var abc = "wellcome to my world";
// abc = abc.toUpperCase();
// console.log(abc);



// var cityName = "paKisTaN";
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// console.log(capitalizedCityName);




                    // Chapter 22 - 25 (Strings) //



// var sameWords = "Lorem, ipsum dolor sit amet consectetur";
// var slicedWords = sameWords.slice(0, 1) + sameWords.slice(3);
//   console.log(slicedWords);


                         // Ans ( 6 ) //
// var myString = "Raffay";  
// var characterCount = myString.length;
// console.log(characterCount);



// var text = "What are you doing";
// var indx = text.indexOf("are");
// console.log(indx);


// var names = "Rafay";
// var character = names.charAt(2);
// console.log(character);


// var myString = "Raffay";
// var myArray = [];
// for (var i = 0; i < myString.length; i++) {
//   myArray[i] = myString.charAt(i);
// }
// console.log(myArray);


// var x = "banana";
// var y = x.split("a").join("z");
// console.log(y);


                  // Chapter 26 (Rounding Numbers) //


// var num = 3.7;
// var roundedNumber = Math.round(num);
// console.log(roundedNumber);


// var Num1 = 5.8;
// var roundNum = Math.floor(Num1);
// console.log(roundNum);

// var num2 = 4.2;
// var roundedNumber = Math.round(num2);
// console.log(roundedNumber);




                     // Chapter 27 (Random Numbers) //


// var randomNum = Math.floor(Math.random() * 30) + 1;
// console.log(randomNum);


// var randomNumber = Math.random();
// console.log(randomNumber);



                   // Chapter 28, 29 (Converting Strings) //


// function convertToInteger(str) {
// var convertedInteger = parseInt(str);
//    return convertedInteger;
// } 
// var stringNumber = "123";
// var convertedNumber = convertToInteger(stringNumber);
// console.log(convertedNumber);
                  

// var stringNumber = "3.14";
// var floatingPointNumber = parseFloat(stringNumber);
// console.log(floatingPointNumber);


// function convertToString(num) {
// var convertedString = num.toString();
//  return convertedString;
// }  
// var number = 25;
// var convertedString = convertToString(number);
// console.log(convertedString);
  

             // Chapter 30 (Controlling the length of decimals) //


// var num = 3.141592653589793;
// var newNum = num.toFixed(4).toString();
// console.log(newNum);


// var num = 123.45678;
// var roundedNum = num.toFixed(2).toString();
// if (roundedNum.length > 4) {
//   alert("The number has more than 4 characters.");
// }



                   // Chapter 31 - 34 (Date & Time) // 



// var date = new Date();
// console.log(date);


// var date = new Date();
// var now = date.toString();
// console.log(now);


// var d = new Date();
// var day = d.getDay();
// console.log(day);


// var d = new Date();
// var day = d.getDay();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert(dayNames[day]);


// var later = new Date(2000, 11 + 1, 0);
// console.log(later);


// var myDate = new Date(2000, 12, 20);
// console.log(myDate);


// alert(Date.parse("1980-01-01"));


// var myDate = new Date();
// myDate.setFullYear(2022);
// alert(myDate)



// function calculateAge(birthdate) {
//     var today = new Date();
//     var birthDate = new Date(birthdate);
  
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var monthDiff = today.getMonth() - birthDate.getMonth();
  
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
  
//     return age;
//   }
  
//   // Example usage
//   var birthdate = "2000-12-20";
//   var age = calculateAge(birthdate);
//   console.log("Age:", age);
  



                      // Chapter 35 - 37 (Functions) //


// function askName() {
// var userName = prompt("Enter name");
// return userName;
// }
                      
// var names = askName();
// console.log("User's name:", names);


// function showName() {
// var userName = prompt("Enter name");
//     alert("Abdul, " + userName + "");
//   }
  
// showName();


                   // Chapter 38 (Local vs. Global Variables) //


                                 // Local variable //
// function calculateSum(num1, num2) {
//   var result = num1 + num2; 
//   console.log("The sum is:", result);
// }

// calculateSum(3, 4);


                            // Global Variables //
// var globalVariable = "Hello, I'm a global variable";
// function accessGlobalVariable() {
//   console.log(globalVariable); 
// }
// accessGlobalVariable(); 


                 // Chapter 39, 40 (Switch Statements) //



// var day = "Friday";
// switch (day) {
// case "Monday":
//  console.log("Today is Monday.");
//     break;
// case "Tuesday":
//  console.log("Today is Tuesday.");
//     break;
// case "Wednesday":
//  console.log("Today is Wednesday.");
//     break;
// case "Thursday":
//  console.log("Today is Thursday.");
//     break;
// case "Friday":
//  console.log("Today is Friday.");
//     break;
//   default:
//  console.log("Today is not a weekday.");
// }


// var cityName = prompt("Enter a city name:");
// switch (cityName) {
// case "Karachi":
//  alert("You entered Karachi!");
//     break;
// case "Lahore":
//  alert("You entered Lahore!");
//     break;
// case "Islamabad":
//  alert("You entered Islamabad!");
//     break;
//   default:
//  alert("City not recognized.");
// }
