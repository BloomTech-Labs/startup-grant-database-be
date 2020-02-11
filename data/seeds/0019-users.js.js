exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 100,
          email: 'email@test.com',
          first_name: 'Test',
          last_name: 'Man',
          phone_number: '41921231',
          country: 'Albania',
          state: 'Tirana',
          city: 'Tirana',
          street: 'albanian st',
          apartment: '2',
          postal: '212 3123',
        },
      ]);
    });
};
