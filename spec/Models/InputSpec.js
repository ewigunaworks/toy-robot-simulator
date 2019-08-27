describe("Input", function() {
  var Input = require('../../Models/Input');
  var input;
  var filePath = "testing/testing_1.txt";


  beforeEach(function() {
    input = new Input(filePath);
  });

  it("Should have 3 instructions", function() {
    expect(input.commands.length).toEqual(3);
  });

  it("Should contain place command", function() {
    var command = 'PLACE 0,0,NORTH';
    expect(input.commands).toContain(command);
  });

  it("Should have PLACE as first command", function() {
    expect(input.isFirstCommandValid()).toBeTruly;
  });

  describe("Invalid  command", function() {
    beforeEach(function() {
        var newFilePath = "testing/testing_3.txt";
        input = new Input(filePath);
    });
    it("Should not have PLACE as first command", function() {
        expect(input.isFirstCommandValid()).toBeFalsy;
    });
  });

  it("Should get command no arguments", function() {
    var command = 'PLACE 0,0,NORTH';
    expect(input.getCommandNoArguments(command)).toEqual('PLACE');
  });

  it("Should get command", function() {
    var command = 'REPORT';
    expect(input.getCommandNoArguments(command)).toEqual('REPORT');
  });

  it("Should get command arguments", function() {
    var command = 'PLACE 0,0,NORTH';
    expect(input.getCommandArguments(command)).toEqual([ '0', '0', 'NORTH' ]);
  });
});