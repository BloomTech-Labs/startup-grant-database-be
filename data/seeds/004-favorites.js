
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        // confirm that email id is the correct Id to use
        {grant_id: 1, email_id: 'auth0|5dcadf0a3713b60e8a59747b'},
        {grant_id: 2, email_id: 'google-oauth2|105085847106269862248'},
        {grant_id: 3, email_id: 'google-oauth2|105085847106269862248'},
        {grant_id: 4, email_id: 'google-oauth2|105085847106269862248'},
        {grant_id: 5, email_id: 'google-oauth2|105085847106269862248'},
        {grant_id: 19, email_id: 'google-oauth2|105085847106269862248'}
      ]);
    });
};
