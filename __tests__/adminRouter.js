// These tests pass without the middlewares in the /api/admin route on server.js
// A future task might be to implementing further testing that includes the middlewares

// const request = require("supertest");
// const db = require("../data/db-config.js");
// const server = require("../server");

// const testGrant = {
//   competition_name: "test",
//   type: "test",
//   area_focus: "test",
//   sponsoring_entity: "test",
//   website: "test",
//   most_recent_application_due_date: "01/01/2001",
//   amount: "3",
//   amount_notes: "test",
//   geographic_region: "test",
//   domain_areas: "test",
//   target_entrepreneur_demographic: "test",
//   notes: "test",
//   early_stage_funding: false,
//   is_reviewed: true,
//   has_requests: true,
//   details_last_updated: "01/01/2001"
// };

// const testSuggestion = {
//   subject: "test",
//   suggestion: "test",
//   grant_id: 1
// };

// describe("ADMIN ROUTER", () => {
//   describe("GET /api/admin", () => {
//     it("return 200 when grants are loaded", async () => {
//       let response = await request(server).get("/api/admin");
//       expect(response.status).toBe(200);
//     });

//     it("returns JSON", async () => {
//       let response = await request(server).get("/api/admin");
//       expect(response.type).toMatch(/json/);
//     });

//     it("returns array", async () => {
//       let response = await request(server).get("/api/admin");
//       expect(Array.isArray(response.body)).toBe(true);
//     });
//   });

//   describe("GET /api/admin/suggestions", () => {
//     it("return 200 when suggestions are loaded", async () => {
//       let response = await request(server).get("/api/admin/suggestions");
//       expect(response.status).toBe(200);
//     });

//     it("returns JSON", async () => {
//       let response = await request(server).get("/api/admin/suggestions");
//       expect(response.type).toMatch(/json/);
//     });

//     it("returns array", async () => {
//       let response = await request(server).get("/api/admin/suggestions");
//       expect(Array.isArray(response.body)).toBe(true);
//     });
//   });

//   describe("PUT /api/admin/:id", () => {
//     it("return 200 when a grant is edited", async () => {
//       await request(server)
//         .post("/api/grants/")
//         .send(testGrant)
//         .then(res => {
//           const id = res.body.id;
//           return request(server)
//             .put(`/api/admin/${id}`)
//             .send(testGrant)
//             .then(res => {
//               expect(res.status).toBe(200);
//             });
//         });
//     });
//   });

//   describe("DELETE /api/suggestion/:id", () => {
//     it("returns 200 when suggestion is deleted", async () => {
//       let response = await request(server)
//         .post("/api/grants/suggestion")
//         .send(testSuggestion);
//       const removedSuggestion = await request(server).delete(
//         `/api/admin/suggestion/${response.body.id}`
//       );
//       expect(removedSuggestion.statusCode).toBe(200);
//     });

//     it("returns 1 in body to confirm deletion", async () => {
//       let response = await request(server)
//         .post("/api/grants/suggestion")
//         .send(testSuggestion);
//       const removedSuggestion = await request(server).delete(
//         `/api/admin/suggestion/${response.body.id}`
//       );
//       expect(removedSuggestion.body).toEqual(1);
//     });
//   });
// });
