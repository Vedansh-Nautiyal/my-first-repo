// server.js - Main server file
const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// routes.js - API routes
const express = require("express");
const router = express.Router();
const users = require("./users");

router.get("/users", (req, res) => {
  res.json(users.getUsers());
});

module.exports = router;

// users.js - User data handling
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

function getUsers() {
  return users;
}

module.exports = { getUsers };
