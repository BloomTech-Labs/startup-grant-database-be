const db = require("../data/db-config.js");

module.exports = {
  //   get,
  putReviewedGrant,
  find
};

function getReviewedGrant() {
  return db("grants").where({ is_reviewed });
}

function putReviewedGrant(changes, id) {
  return db("grants")
    .where({ id })
    .update({ changes });
}

// function find() {
//   return db("requests as r")
//     .innerJoin("grants as g", "r.grant_id", "=", "g.id")
//     .select("r.id, r.suggestion");
// }

// Trying a left join
// function find() {
//   return db("grants")
//     .select("*")
//     .from("grants as g")
//     .leftJoin("requests as r", "r.grant_id", "=", "g.id");
// }

//#####This works!################
function find() {
  return db("requests")
    .from("requests as r")
    .leftJoin("grants as g", "r.grant_id", "=", "g.id")
    .select("*", "g.id");
}
//#####This works!################

// function find() {
//   return db("requests")
//     .select("*")
//     .from("requests as r")
//     .join("grants as g", "r.grant_id", "g.id")
//     .where("r.grant_id", "g.id");
// }

// function findSteps(id) {
//     return db("steps")
//       .innerJoin("schemes", "steps.scheme_id", "=", "schemes.id")
//       .select(
//         "steps.id",
//         "schemes.scheme_name",
//         "steps.step_number",
//         "steps.instructions"
//       )
//       .where({ scheme_id: id });
//   }

// function find() {
//   return db("grants").then(grants => {
//     // console.log("grants", grants);
//     return db("requests").then(suggestions => {
//       // console.log("suggestions", suggestions);
//       let newGrants = grants.map(grant => {
//         let currentSuggestions = suggestions.filter(
//           node => grant.id === node.grant_id
//         );
//         grant.requests = currentSuggestions;
//         return currentSuggestions;
//       });
//       console.log("NEW GRANTS", newGrants);
//       return newGrants;
//     });
//   });
// }
