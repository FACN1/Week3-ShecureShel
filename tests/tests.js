//Test that formatInput function is working properly
QUnit.test("Test that formatInput is operating correctly", function( assert ) {
  var inputTestOne = "   eggs cHicken Bacon";
  assert.deepEqual(formatInput(inputTestOne), "i=eggs,chicken,bacon", "FormatInput function has correctly formatted the input");
});
