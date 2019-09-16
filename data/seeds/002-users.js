const bcrypt = require("bcryptjs");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").insert([
    {
      username: "username123",
      password: bcrypt.hashSync("password123", 12)
    }
  ]);
};
