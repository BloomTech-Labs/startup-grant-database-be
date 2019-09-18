const request = require("supertest");
const db = require("../data/db-config.js");
const server = require("../server.js");

describe("server", () => {
  beforeEach(async () => {
    await db("grants").truncate();
  });
  it("tests are running with DB_ENV set as 'testing'", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  // GET ALL - Rory

  // GET BY ID - Michael

  // POST -Reed

  // PUT - Phil

  // DELETE - Yusuf
});
