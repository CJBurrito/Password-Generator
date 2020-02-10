// Assignment Code
var generateBtn = document.querySelector("#generate");

// Random Elements
var randomLetter = 'abcdefghijklmnopqrstuvwxyz';
var randomLetterUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var randomNumber = '1234567890';
var randomCharacter = ('!"#$%&*+,-./:;<=>? @_`');

console.log(randomLetter);
console.log(randomCharacter);
console.log(randomNumber);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be? (8 - 128)");
  while (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    var passwordLength = prompt("Please choose a length between 8 and 128");
  }
  console.log(passwordLength);

  var passwordCollection = "";

  console.log(passwordCollection);


  //Collecting user variables
  var l = confirm("Would you like to include lowercase letters?");
  if (l == true) {
    passwordCollection += randomLetter;
  }
  console.log(passwordCollection);

  var u = confirm("Would you like to include uppercase letters?");
  if (u == true) {
    passwordCollection += randomLetterUppercase;
  }
  console.log(passwordCollection);

  var n = confirm("Would you like to include numbers?");
  if (n == true) {
    passwordCollection += randomNumber;
  }
  console.log(passwordCollection);

  var c = confirm("Would you like to include special characters?");
  if (c == true) {
    passwordCollection += randomCharacter;
  }
  console.log(passwordCollection);

  //var collectionIndex= Math.floor(Math.random()(passwordCollection.length));

  var passwordStr = "";

  //Creating the password after variables collected    
  for (i = 0; i < parseInt(passwordLength) + 1; i++) {
    passwordStr += passwordCollection.charAt(Math.floor(Math.random() * (passwordCollection.length)));
  };

  return passwordStr;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
