
var searchForm = document.getElementById('user-search');
searchForm.addEventListener('submit', clickHandler);

function clickHandler(event){
  event.preventDefault();
  renderSearch(makeRequest(formatInput(extractQuery(event))));
}
