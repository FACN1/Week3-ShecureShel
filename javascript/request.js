function makeRequest(searchWord){
  console.log("makeRequest called");
  var base = "http://www.recipepuppy.com/api/?";
  var xhr = new XMLHttpRequest();
  // var searchWord=ingredientsSearch; // needs to be updated to feed from input.js
  var url = base+searchWord;
  //console.log(url);
  xhr.onreadystatechange = function (){
    if(xhr.readyState == 4 && xhr.status == 200){
      var recipePuppyObj = JSON.parse(xhr.responseText);
      // console.log(recipePuppyObj);
      // return recipePuppyObj;
      renderSearch(recipePuppyObj);
    }
  };
xhr.open("GET", url);
xhr.send();
};
