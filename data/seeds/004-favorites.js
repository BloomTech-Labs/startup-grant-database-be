
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        {grant_id: 1, auth_id: 'auth0|5dcadf0a3713b60e8a59747b'},
        {grant_id: 2, auth_id: 'google-oauth2|105085847106269862248'},
        {grant_id: 3, auth_id: 'google-oauth2|105085847106269862248'},
        {grant_id: 4, auth_id: 'google-oauth2|105085847106269862248'},
        {grant_id: 5, auth_id: 'google-oauth2|105085847106269862248'}
      ]);
    });
};
