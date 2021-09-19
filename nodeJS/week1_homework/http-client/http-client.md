# LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## HTTP CLIENT (Exercise 7 of 13)

  Create a file named http-client.js.

  Write a program that performs an HTTP GET request to a URL provided to you    
  as the first command-line argument. Write the String contents of each         
  "data" event from the response to a new line on the console (stdout).         
   
 ─────────────────────────────────────────────────────────────────────────────  
   
 ## HINTS

  For this exercise you will need to use the http core module.

  Documentation on the http module can be found by pointing your browser        
  here:
  file://C:\Users\Bro4ever\AppData\Roaming\npm\node_modules\learnyounode\doc    
  s-nodejs\http.html

  interest are: "data", "error" and "end". You listen to an event like so:

     response.on('data', function (data) { /* ... */ })

  The "data" event is emitted when a chunk of data is available and can be
  processed. The size of the chunk depends upon the underlying data source.

  The response object / Stream that you get from http.get() also has a
  setEncoding() method. If you call this method with "utf8", the "data"
  events will emit Strings rather than the standard Node Buffer objects
  which you have to explicitly convert to Strings.

  Check to see if your program is correct by running this command:

     $ learnyounode verify http-client.js
