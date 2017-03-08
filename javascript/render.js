// console.log("render linked");
function renderSearch (recipeObject)
{
  var recipeArray=recipeObject.results;
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

  });

  return
   {
    recipeArray:recipeArray
   }

}
