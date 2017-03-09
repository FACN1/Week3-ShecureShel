function renderSearch(recipeObject) {
    var recipeArray = recipeObject.results;
    var titleList = document.getElementById("results-list");
    titleList.innerHTML = "";
    var headerTitle = document.createElement('header');
    headerTitle.textContent = "Recipes";
    headerTitle.className = "headerTitleCSS";
    titleList.appendChild(headerTitle);

    recipeArray.forEach(function(element) {

        var listNode = document.createElement('li');
        var itemNode = document.createElement('a');

        var title = element.title;
        itemNode.href = element.href;
        itemNode.target = "_blank";
        itemNode.textContent = title;

        titleList.appendChild(listNode);
        listNode.appendChild(itemNode);


        var listNodeIngredients = document.createElement('li');

        var ingredients = element.ingredients;
        listNodeIngredients.textContent = ingredients;

        titleList.appendChild(listNodeIngredients);


    });

    return {
        recipeArray: recipeArray
    }

};
