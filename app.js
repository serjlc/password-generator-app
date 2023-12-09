// Function to generate a password based on user input
function generatePassword() {
    // Get HTML elements
    const passwordBox = document.getElementById("password");
    const lengthBox = document.getElementById("length").value;
  
    // Parse the input value to an integer for password length
    let length = parseInt(lengthBox);
  
    // Set a minimum length of 4 characters if the input is not a number or less than 4
    const minLength = 4;
    if (isNaN(length) || length < minLength || length > 25) {
      length = minLength;
    }
  
    // Define character sets
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "@#$%^&*()_+~|{}<>?/-=";
    const allCharacters = upperCase + lowerCase + number + symbol;
  
    let password = "";
  
    // Generate password until it reaches the specified length
    while (password.length < length) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
    }
  
    // Display the generated password in the password input box
    passwordBox.value = password.slice(0, length); // Truncate password to specified length
    return password.slice(0, length); // Return the generated password
  }
  
  function copyPassword() {
    const passwordBox = document.getElementById("password");
    // Check if the browser supports the Clipboard API
    if (navigator.clipboard && passwordBox.value) {
      navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
          alert('Password copied to clipboard');
          // You might want to display a message or perform other actions upon successful copy
        })
        .catch(err => {
          console.error('Failed to copy password: ', err);
          // Handle errors if copying failed
        });
    } else {
      // Fallback for browsers that don't support the Clipboard API
      passwordBox.select();
      document.execCommand('copy');
    }
  }
  