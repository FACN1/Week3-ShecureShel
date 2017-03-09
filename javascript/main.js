
var searchForm = document.getElementById('user-search');
searchForm.addEventListener('submit', sumbitHandler);

function sumbitHandler(event){
  event.preventDefault();
  makeRequest(formatInput(extractQuery(event)), renderSearch);

}
