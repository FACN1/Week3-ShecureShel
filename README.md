# Week3-ShecureShel
Recipe Puppy API exercise


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
