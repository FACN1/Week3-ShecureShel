function makeRequest(searchWord, callback){
  var base = "http://www.recipepuppy.com/api/?";
  var xhr = new XMLHttpRequest();
  var url = base+searchWord;
  xhr.onreadystatechange = function (){
    if(xhr.readyState == 4 && xhr.status == 200){
      // console.log("request being made");
      var recipePuppyObj = JSON.parse(xhr.responseText);
      // console.log("response",recipePuppyObj);
      callback(recipePuppyObj);
    }
  };
xhr.open("GET", url);
xhr.send();
};
