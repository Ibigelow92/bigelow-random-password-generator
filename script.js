var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var pwLengthPrompt= prompt ("Please select a password length between 8 and 128 characters");

    //Not so sure about this, adjust the if/else statements
    if (!pwLengthPrompt) {
      alert("Please select a password length");
    } 

    else if (pwLengthPrompt < 8 || pwLengthPrompt > 128) {
      promptInput = prompt("Password must be between 8 and 128 characters");
    } 

  //Character options yes/no choices
  else {
  var lowercaseChar = confirm ("Do you want to include lowercase letters?");
  var uppercaseChar = confirm ("Do you want to include uppercase letters?");
  var numericChar = confirm ("Do you want to include numbers?");
  var specialChar = confirm ("Do you want to include special characters?");
  };

  // Character options arrays
  lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", ":", ";", "'", "<", ",", ">", ".", "?", "/"];

  // Placeholder arrays
  var charOptionsArray = [];
  var displayArray = [];

  uppercaseArray [1];

  if (lowercaseChar){
    charOptionsArray = charOptionsArray.concat(lowercaseArray);
  }

  if (uppercaseChar){
    charOptionsArray = charOptionsArray.concat(uppercaseArray);
  }

  if (numericChar){
    charOptionsArray = charOptionsArray.concat(numericArray);  
  }

  if (specialChar){
    charOptionsArray = charOptionsArray.concat(specialCharArray);
  }
  
  //If user selects zero criteria
  else if (!lowercaseChar && !uppercaseChar && !numericChar && !specialChar) {
  charOptionsArray = alert("Your password must contain at least one type of character"); 
  }

  // Random selector
  for (var i = 0; i < pwLengthPrompt; i++) {    
    displayArray.push (charOptionsArray[Math.floor(Math.random() * charOptionsArray.length)]); 
  }

  return displayArray.join("") ;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
