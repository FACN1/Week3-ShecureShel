var base = "http://www.recipepuppy.com/api/?";
var xhr = new XMLHttpRequest();
var searchWord="i=onions"; // needs to be updated to feed from input.js
var url = base+searchWord;
xhr.onreadystatechange = function (){
  if(xhr.readyState == 4 && xhr.status == 200){
    var recipePuppyObj = JSON.parse(xhr.responseText);
    console.log(recipePuppyObj);

  }
};
xhr.open("GET", url);
xhr.send();
