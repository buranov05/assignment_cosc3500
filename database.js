const database = [];

function register(event) {
  event.preventDefault();

  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  database.push({ username, password });

  alert("User registered ✅");
}

function forgotPassword(event) {
  event.preventDefault();

  const username = document.getElementById("fpUsername").value;

  const user = database.find(u => u.username === username);

  if (user) {
    alert("Password reset link sent (simulated) ✅");
  } else {
    alert("User not found ❌");
  }
}
