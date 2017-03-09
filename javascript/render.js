function renderSearch (recipeObject) {
  // takes the object from the request.js
  var recipeArray=recipeObject.results;
  // adds a title for the list of recipes
  var titleList =document.getElementById("results-list");
  titleList.innerHTML=""; // clears the last results whenever there's a new search
  var headerTitle = document.createElement('header');
  headerTitle.textContent="Recipes";
  headerTitle.className="headerTitleCSS";
  titleList.appendChild(headerTitle);

  recipeArray.forEach(function (element){
    // creates the list and links inside of it
      var listNode = document.createElement('li');
      var itemNode = document.createElement('a');
      // gives the link a url and text content for it which
      // is the element.title
      var title= element.title;
      itemNode.href= element.href;
      itemNode.target="_blank"; // Opens recipe link in new tab
      itemNode.textContent=title;

      titleList.appendChild(listNode);
      listNode.appendChild(itemNode);
      // takes the ingredients from the Object thats returned by
      // the API and puts it in the list
      var listNodeIngredients = document.createElement('li');

      var ingredients=element.ingredients;
      listNodeIngredients.textContent=ingredients;

      titleList.appendChild(listNodeIngredients);


  });

  return{
    recipeArray:recipeArray
   }

}
