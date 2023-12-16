function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    try {
      // Read the text file
      var response = fetch("../Data access layer/database.txt");
      var data = response.text();
  
      var users = data.split('\n');
      var isValid = users.some(user => {
        var [storedUsername, storedPassword] = user.split(':');
        return username === storedUsername && password === storedPassword;
      });
  
      // Display a message based on the validation result
      if (isValid) {
        alert("Login successful!");
      } 
      else {
        alert("Invalid username or password. Please try again.");
      }
    } catch (error) {
      console.error('Error reading the file:', error);
    }
  }
  