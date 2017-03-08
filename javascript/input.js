/* render ingredients input */

var searchForm = document.getElementById('user-search');

searchForm.addEventListener('submit', function(event){
  event.preventDefault();
  var ingredientsInput = event.target.childNodes[1].value.slice();
  if (ingredientsInput === "") {
    alert("Write an ingredient to find a recipe");
    return;
  }

  formatInput(ingredientsInput);
});

function formatInput(input){
  var inputText = input.slice();

  var prefix = "i="; // this should be its own function.

  inputText = inputText.trim().toLowerCase();
  inputText = inputText.replace(/\s/g, ',');
  var ingredientsSearch = prefix+inputText;
  makeRequest(ingredientsSearch);

}

/* end render ingredients input */
