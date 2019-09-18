const request = require("supertest");
const db = require("../data/db-config.js");
const server = require("../server.js");

const testGrant = {
  competition_name: "test",
  type: "test",
  area_focus: "test",
  sponsoring_entity: "test",
  website: "test",
  most_recent_application_due_date: "01/01/2001",
  amount: "3",
  amount_notes: "test",
  geographic_region: "test",
  domain_areas: "test",
  target_entrepreneur_demographic: "test",
  notes: "test",
  early_stage_funding: false,
  details_last_updated: "01/01/2001"
};

describe("server", () => {
  beforeEach(async () => {
    await db("grants").truncate();
  });

  it('tests are running with DB_ENV set as "testing"', () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  // GET ALL - Rory

  // GET BY ID - Michael

  //   POST -Reed
  describe("POST /api/grants", () => {
    it("return 201 when a grant is added", () => {
      return request(server)
        .post("/api/grants")
        .send(testGrant)
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });

  // PUT - Phil
  describe("PUT /api/grants", () => {
    it("return 201 when a grant is editted", async () => {
      await request(server)
        .post("/api/grants/")
        .send(testGrant)
        .then(res => {
          const id = res.body.id;

          return request(server)
            .put(`/api/grants/${id}`)
            .send(testGrant)
            .then(res => {
              expect(res.status).toBe(200);
            });
        });
    });
  });
  // DELETE - Yusuf
});
