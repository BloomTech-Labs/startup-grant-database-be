const request = require("supertest");
const db = require("../data/db-config.js");
const server = require("../server.js");

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
        .send({
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
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });

  // PUT - Phil

  // DELETE - Yusuf
});
