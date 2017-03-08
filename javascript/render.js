// console.log("render linked");
function renderSearch (recipeObject) {
  // console.log("rpo",recipeObject);
  var recipeArray=recipeObject.results;
  //console.log("rpo", recipeObject.results);
  var spanTitle = document.createElement('span');
  var titleRecipes.textContent=("Recipes");
  spanTitle.appendChild(titleRecipes);


  var titleList =document.getElementById("results-list")
  recipeArray.forEach(function (element)
  {

      var listNode = document.createElement('li');
      var itemNode = document.createElement('a');

      var title= element.title;
      itemNode.href= element.href;
      itemNode.textContent=title;

      titleList.appendChild(listNode);
      listNode.appendChild(itemNode);


      var listNodeIngredients = document.createElement('li');

      var ingredients=element.ingredients;
      listNodeIngredients.textContent=ingredients;

      titleList.appendChild(listNodeIngredients);


  });

  return
   {
    recipeArray:recipeArray
   }

}
