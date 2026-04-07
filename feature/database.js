const database = [
  { username: "admin", password: "1234" },
  { username: "user1", password: "abcd" }
];

function connectDB() {
  console.log("Connected to fake database ✅");
}

function login(username, password) {
  connectDB();

  const user = database.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    console.log("Login successful ✅");
  } else {
    console.log("Invalid credentials ❌");
  }
}
