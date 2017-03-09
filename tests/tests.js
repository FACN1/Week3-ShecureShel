//Test that formatInput function is working properly
QUnit.test("Test that formatInput is operating correctly", function( assert ) {

  assert.deepEqual(formatInput(mockArguments.inputTestOne), "i=eggs,chicken,bacon", "FormatInput function has correctly formatted the input");
});

QUnit.test("Test DOM and respnseText return same recipe", function( assert ) {

  renderSearch(mockArguments.mockResponse);
  var testResult =
  document.getElementById('results-list').childNodes[1].textContent;
  var expected = mockArguments.mockResponse.results[0].title;
  assert.deepEqual(testResult, expected, "DOM and respnseText return the same recipe");

});

QUnit.test("Render function renders ALL results", function( assert ) {
  renderSearch(mockArguments.mockResponse);
  var responseLength = mockArguments.mockResponse.results.length;
  var childNodes = document.getElementById('results-list').childNodes;


  var expected = responseLength * 2;
  var actual = childNodes.length-1
  assert.equal(actual, expected, "the number of li elements is double the number of recipes");

});

// Stretch goal - test that render refreshes the DOM
