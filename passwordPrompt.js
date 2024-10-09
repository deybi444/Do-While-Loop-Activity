const correctPassword = "2 444 66666 8888888";

let password;

do {
  password = prompt("Enter your password:");

  if (password !== correctPassword) {
    console.log("Incorrect password. Please try again.");
  }
} while (password !== correctPassword);

console.log("Correct password! Access granted.");
