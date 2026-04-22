const database = [];

function register(event) {
  event.preventDefault();

  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  database.push({ username, password });

  alert("User registered ✅");
  console.log(database);
}
