

var searchForm = document.getElementById('user-search');
searchForm.addEventListener('submit', function(event){
  event.preventDefault();
  var ingredientsInput = event.target.childNodes[1].value;

  return formatInput(ingredientsInput);
});

function formatInput(input){
  var searchWord = input.slice();
  searchWord = searchWord.trim().toLowerCase();
  searchWord = searchWord.replace(/\s/g, ',');

  console.log(searchWord);

}


;// .toLowerCase, remove special char, remove whitespace from top and tail, add commas,

//prefix with i=

// return "i=onions,garlic";
// formatInput("    Onions, garlic + brocolli  ")


/*

1. retrieve input string from the DOM
2. format searchWord


3. add error handler function
*/
