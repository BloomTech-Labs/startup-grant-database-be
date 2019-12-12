// Admin Middleware
// This middleware should always follow the first middleware that authenticates the user with Auth0.
// This middleware then does a check to see if that user is an admin.
const user = require("../models/userModel.js");

module.exports = (req, res, next) => {
  const id = req.headers.auth0id;

  if (id) {
    user.getUserByAuthId(id).then(response => {
      if (!response) {
        res.status(401).json({ message: "You are not authorized" });
      } else {
        // console.log("In the .then!", response);
        if (response.role === "admin") {
          // console.log("It worked!");
          next();
        } else {
          res.status(401).json({ message: "You are not authorized admin" });
        }
      }
    });
  } else {
    res
      .status(500)
      .json({ message: "Something went wrong, but it was succesful" });
  }
};
