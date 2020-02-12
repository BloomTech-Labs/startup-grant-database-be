exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('requests').then(function() {
    // Inserts seed entries
    return knex('requests').insert([
      {
        subject: 'Incorrect dates',
        suggestion: 'Please update the due dates for this grant',
        grant_id: 1,
      },
      {
        subject: 'Typo',
        suggestion: 'There is a typo in the first sentence',
        grant_id: 1,
      },
      {
        subject: 'Needs to be deleted',
        suggestion: 'This is a very old grant, please delete it',
        grant_id: 1,
      },
      {
        subject: 'Prize amount',
        suggestion: 'The 1st place prize has been increased to $10,000',
        grant_id: 2,
      },
      {
        subject: 'Typo',
        suggestion: "'grant' is spelled incorrectly",
        grant_id: 2,
      },
      {
        subject: 'delete',
        suggestion: "please delete this grant it's inappropriate",
        grant_id: 3,
      },
      {
        subject: 'Grant scam',
        suggestion:
          'Please consider removing this grant as there have been reports of fraud',
        grant_id: 4,
      },
    ]);
  });
};
