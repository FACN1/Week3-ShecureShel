
var searchForm = document.getElementById('user-search');
searchForm.addEventListener('submit', clickHandler);

function clickHandler(event){
  event.preventDefault();
  makeRequest(formatInput(extractQuery(event)), renderSearch);

}
