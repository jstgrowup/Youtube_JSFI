// these are boolean attributes which are used along with script tags to load the external scripts efficiently into our web page
// there are two phases while loading a webpage first is the HTML parsing and the second is the script loading
// in normal scenario while parsing the HTML when the browser encounters a script tag than it just stops and loads the script and all the external resocuces and than executes or continues execution of the HTML so basically when we are fetching the script the html leading is stops until it finishes the execution 
// in case of async here the html parsing is continued and the script is also loding side by side but here during the execution of the script the html parsing is paused and when the script is fully executed the html parsing is resumed
// in case of defer the html parsing and the script fetch simultaneously but once the html parsing is done after that only the script is executed

