require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cron = require('node-cron');
const { cronJob } = require("./app/middleware");


const app = express();

var corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:8081" || "http://127.0.0.1:6868" || "http://localhost:8080"
};

// app.use(cors());

app.options('*', cors())

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

// require("./app/routes/turorial.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/campaign.routes")(app);

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// At every minute
cron.schedule("* * * * *", () => {
  cronJob.funRecursiveCampaign()
  cronJob.funOneTimeCampaign()
});

// cronJob.funRecursiveCampaign()
// cronJob.funOneTimeCampaign()
