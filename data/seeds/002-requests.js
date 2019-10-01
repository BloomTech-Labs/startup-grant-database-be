exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("requests").then(function() {
    // Inserts seed entries
    return knex("requests").insert([
      {
        suggestion: "Please review this grant",
        grant_id: 1
      },
      {
        suggestion: "Please update this grant",
        grant_id: 1
      },
      {
        suggestion: "Change prize to $10,000",
        grant_id: 2
      },
      {
        suggestion: "Delete",
        grant_id: 3
      },
      {
        suggestion: "Please delete",
        grant_id: 4
      }
    ]);
  });
};
