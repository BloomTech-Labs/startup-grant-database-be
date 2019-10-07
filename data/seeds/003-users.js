const bcrypt = require("bcryptjs");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").insert([
    // {
    //   username: "username123",
    //   password: bcrypt.hashSync("password123", 12)
    // }
    {
      role: "user",
      auth_id: "auth0|5d9525bdaed7ac0d51b1103a"
    },
    {
      role: "admin",
      auth_id: "google-oauth2|102505450093705496380"
    }
  ]);
};
