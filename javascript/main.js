var Main = (function(){

  var searchForm = document.getElementById('user-search');
  searchForm.addEventListener('submit', clickHandler);

  function clickHandler(event){
    event.preventDefault();
    makeRequest(Input.formatInput(Input.extractQuery(event)), renderSearch);
  }
})();
