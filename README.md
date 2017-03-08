# Week3-ShecureShel
Recipe Puppy API exercise


### Important !
In order to view out project in the CHROME browser, you will need to download the "allow-control-allow-origin" extension.
## Intro
ShecureShel plan to create a Recipe Puppy (RP) API app, taking user input which triggers API enquiries using the RP API engine, returning recipe suggestions based on ingredients searched by the user.

The initial index.html file will contain:
+ An input field and a search button
  + which will be used to search food within the RP API.

+ An unordered list ``` <ul> ``` element,
  + which is intended to host the search results coming back from the RP API

## File Structure Planning
#### index.html
##### head links:    
style/styles.css


##### script links

  - ./javascript/input.js (file)      <- handling user inputs
  - ./javascript/request.js (file)     <- sending user requests to API
  - ./javascript/render.js (file)     <- render API responseText and return to DOM

  - ./javascript/main.js (file) (stretch goal)       <- if possible, centralize request & render calls

#### tests.html

#####  head links:

  + ./style/styles.css (file)

  + /qunit css API (link)

##### script links
  - ./javascript/input.js (file)       <- handling user inputs
  - ./javascript/request.js (file)     <- handling user reuqests, and send to API
  - ./javascript/render.js (file)      <- render API responseText and return to DOM
  - /qunitAPI.js (link)
  - ./tests/tests.js (file)
  - ./tests/mockarguments.js (file)


  - ./javascript/main.js (stretch goal)      <- if possible, centralise request & render calls  


### Process
Testing files are linked:
Initiated startup files (listed above)
+ tested that style/style.css is linked (background: black)
+ tested javascript files are linked (console logging javascript file names)
+ made 3 Modules
  - formatInputModule: takes information from the search bar and formats it for the API request.
  - requestModule: simply makes and returns the request from the API.
  - renderModule: renders the JSON Object to the DOM.
+ linked our Modules through main.js, all the Modules are called through one function

``` javascript
function clickHandler(event){
  event.preventDefault();
  makeRequest(formatInput(extractQuery(event)), renderSearch);

}
```
### Issues
+ CORS - browser wouldn't allow communication between two different domains. Fixed by adding the Chrome extension that we mentioned before.
+ Our main function was trying to run even thought the requestModule hadn't finished. Fixed by adding the callback function to our requestModule.
+ Page wasn't clearing when we made a new search. Fixed by adding
```
titleList.innerHTML="";
```
to the results-list.
+ Search cleared whenever clicked on a result link. Fixed by adding
```
itemNode.target="_blank";
```
