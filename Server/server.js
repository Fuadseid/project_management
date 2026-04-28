require("dotenv").config();
const connectDB = require("./config/db");
const app = require("./app");
const config = require("./config/config");
require("dotenv").config();
connectDB();
const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
