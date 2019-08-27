describe("Table", function() {
  var Table = require('../../Models/Table');
  var table;

  beforeEach(function() {
    table = new Table(5, 5);
  });

  it("Should have 5 by 5 dimension", function() {
    expect(table.x).toEqual(5);
    expect(table.y).toEqual(5);
  });
});