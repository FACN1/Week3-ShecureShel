/* render ingredients input */


function extractQuery(eventNode){
  var ingredientsInput = eventNode.target.childNodes[1].value.slice();
  if (ingredientsInput === "") {
    alert("Write an ingredient to find a recipe");
    return;
  }
  return ingredientsInput;
}



function formatInput(input){
  var inputText = input.slice();

  var prefix = "i="; // this should be its own function.

  inputText = inputText.trim().toLowerCase();
  inputText = inputText.replace(/\s/g, ',');
  var ingredientsSearch = prefix+inputText;
  return ingredientsSearch;
}

/* end render ingredients input */
