/* render ingredients input */

var searchForm = document.getElementById('user-search');
searchForm.addEventListener('submit', function(event){
  event.preventDefault();
  var prefix = "i=";
  var ingredientsInput = event.target.childNodes[1].value.slice();
  if (ingredientsInput === "") {
    alert("Write an ingredient to find a recipe");
    return;
  }
  ingredientsInput = ingredientsInput.trim().toLowerCase();
  ingredientsInput = ingredientsInput.replace(/\s/g, ',');
  // return formatInput(ingredientsInput);
  var ingredientsSearch = prefix+ingredientsInput;
  console.log(ingredientsSearch);
  return ingredientsSearch;
});


/* end render ingredients input */
