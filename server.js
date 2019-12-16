const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const bodyParser = require("body-parser");

const grantRouter = require("./routers/grantRouter.js");
const userRouter = require("./routers/userRouter.js");
const adminRouter = require("./routers/adminRouter.js");
//This is replacing our middleware
// Auth0's authentication for all users
const middleware = require("./auth/middleware.js");
const jwtAuthz = require("express-jwt-authz");

// Our own custom middleware to check if user is admin
// const adminMiddleware = require("./auth/adminMiddleware.js");
//checkAllScopes: false,
const checkScopesAdmMod = jwtAuthz(
  ["get:adminLocal", "get:adminProduction", "get:adminStaging"]);

server.use(cors());
server.use(helmet());
server.use(express.json());
// enable the use of request body parsing middleware
server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Routes
server.use("/api/grants", grantRouter);
server.use("/user", userRouter);
// Implement middleware on our protected admin route This is working with test token globally!!!
server.use("/api/admin", middleware, checkScopesAdmMod, adminRouter);

server.get("/", (req, res) => {
  res.status(200).json({ server: "running" });
});

// var request = require("request");

// var options = { method: 'POST',
//   url: 'https://founder-grants.auth0.com/oauth/token',
//   headers: { 'content-type': 'application/json' },
//   body: '{"client_id":"ZM4o3vmqz9Mju6q4qDDU9hyY7PmlxOyz","client_secret":"","audience":"urn:auth0-authz-api","grant_type":"client_credentials"}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

// var request = require("request");

// var options = { method: 'GET',
//   url: 'https://founder-grants.us8.webtask.io/adf6e2f2b84784b57522e3b19dfc9201/api/permissions',
//   headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5rTkRNakUyTWpFM05qazBRVU16TTBFNE5VUXlNRFV4UWpKRVJUWkZPVUpFTmtSRk5VRTBOdyJ9.eyJpc3MiOiJodHRwczovL2ZvdW5kZXItZ3JhbnRzLmF1dGgwLmNvbS8iLCJzdWIiOiJaTTRvM3ZtcXo5TWp1NnE0cUREVTloeVk3UG1seE95ekBjbGllbnRzIiwiYXVkIjoidXJuOmF1dGgwLWF1dGh6LWFwaSIsImlhdCI6MTU3NjUzNDY4MywiZXhwIjoxNTc2NjIxMDgzLCJhenAiOiJaTTRvM3ZtcXo5TWp1NnE0cUREVTloeVk3UG1seE95eiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.nyq96fuWTOTbUu3J_53A4nXDmo0shmZl2V2EmafZcv5fCKqhk6sBOcU2W7SNhBe6ouwGZoHf5PCz6NPYcHnN2_DNPKUPg411IkzQVGAL_-9aEZcmHZOlpYPB36fFFUvWeV0jqtK1qoTzzx2Ytw7G9tWJDcxT880DnqmHTvULV5XtEfIfNt1kAACZMMYf12TQftPZy8gSBSa1vmLq8i-NqXe0YpcY28NDUuhfKWwmM8eJc_Ry49ichTkrEzbbFjRnigunRiVooyg_btCifa9fxU6r_SEr3ti9S0t3YZZTK0eJm177ouMkHRFZ68Of6E_92jmpEbc0NnwCDYoiKN1kyQ' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });
module.exports = server;
