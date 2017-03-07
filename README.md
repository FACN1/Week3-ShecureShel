# Week3-ShecureShel
Recipe Puppy API exercise


## Intro
ShecureShel plan to create a Recipe Puppy (RP) API app, taking user input which triggers API enquiries using the RP API engine, returning recipe suggestions based on ingredients searched by the user.

The initial index.html file will contain:
+ An input field and a search button
  - which will be used to search food within the RP API.

+ An unordered list ``` <ul> ``` element, which is intended to host the search results coming back from the RP API

## File Structure Planning
index.html
  head links:
    ./style/styles.css

  script links
    ./javascript/request.js     <- handling user reuqests, and send to API
    ./javascript/render.js      <- render API responseText and return to DOM

    (stretch goal)
    ./javascript/main.js        <- if possible, centralise request & render calls

tests.html
  head links:
    ./style/styles.css
    /qunit css API (link)

  script links
    ./javascript/request.js     <- handling user reuqests, and send to API
    ./javascript/render.js      <- render API responseText and return to DOM
    /qunitAPI.js (link)
    ./tests/tests.js
    ./tests/mockarguments.js

    (stretch goal)
    ./javascript/main.js        <- if possible, centralise request & render calls  
