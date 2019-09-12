exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("grants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("grants").insert([
        {
          competition_name: "GIST Tech-I Competition",
          type: "Competition",
          area_focus: "Social Entrepreneurship",
          sponsoring_entity: "Global Innovation Through Science and Technology",
          website: "http://www.gistnetwork.org/content/gist-tech-i",
          most_recent_application_due_date: "Deadline not yet released",
          amount:
            "$15,000 along with trip to compete in the live pitching finals at the Global Entrepreneurship Summit; grants and mentoring",
          geographic_region: "Global",
          domain_area:
            "Environment, conservation, water, agriculture, energy, ICT, health",
          target_entrepreneur_demographic: "",
          notes:
            "Idea can be an invention, product, service, app, or any combination, or something unique",
          early_stage_funding: "No",
          details_last_updated: "8/23/17"
        },
        {
          competition_name: "Africa Angels Network Award",
          type: "Competition",
          area_focus: "Social Entrepreneurship",
          sponsoring_entity: "Harambe Entrepreneur Alliance",
          website: "http://www.healliance.org/africa_angels_network_award.pdf",
          most_recent_application_due_date:
            "Deadline not yet released/Last deadline was: 12/30/2015",
          amount: "$10,000",
          geographic_region: "Africa",
          domain_area: "Technology, media, telecommunications, fashion design",
          target_entrepreneur_demographic: "",
          notes:
            "For young entrepreneurial Africans; preference given to female-led ventures",
          early_stage_funding: "Yes",
          details_last_updated: "8/23/17"
        }
      ]);
    });
};
