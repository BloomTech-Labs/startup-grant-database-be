exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("requests").then(function() {
    // Inserts seed entries
    return knex("requests").insert([
      {
        suggestion: "This grant is kinda wild",
        grant_id: 67
      },
      {
        suggestion: "This grant is really really wild",
        grant_id: 67
      },

      {
        suggestion: "This grant needs to be deleted, its dumb",
        grant_id: 66
      }
    ]);
  });
};
