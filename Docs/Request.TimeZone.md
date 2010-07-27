Class: Request.TimeZone {#Request.TimeZone}
=========================================================

Request.TimeZone is a simple class that extends Request.JSONP and display the local timezone, for any location, on your website, blog or other web document.

### Implements:

Options, Events

### Extends:

Request.JSONP


Request.TimeZone Method: constructor {#Request.TimeZone: constructor}
----------------------------------------------------------------------------------


### Syntax:

    var tz = new Request.TimeZone(locatio,options,o);

### Arguments:

1. location - (*String*) (required) the location for which you wish to display timezone.
2. options  - (*object*) (required) An object containing the Request.TimeZone instance's options.
3. o        - (*object*) (optional) An object containing the key 'badge' with boolean value at choice:
                                   (*true*) : to receive as response an HTML DIV Element with timezone data 
                                      and a map at location you defined.
                                   (*false*): if you want more control over response then set 'false' and 
                                      you will receive an JSON object with timezone data.
                                      

### options:

* url  - (*String*)  the url to get the JSON data
* data - (*Object*)  additional key/value data to append to the url
...
added options obtained through inheritance.[Request.TimeZone extends Request.JSONP]

### Returns:

a Request.TimeZone instance

### Events:

### request

* (*function*) this event (function) is fired whenever the instance actually send a request.It is passed one argument.

### Signature

   onRequest(script)

#### Arguments
     1. script - is passed the markup 'SCRIPT' with the url stored in attribute 'src'.


### complete

* (*function*) this event is triggered whenever the instance receives a successful response from the server. It is passed one argument.

### Signature

   onComplete(data)

#### Arguments
     1. data - (*Object*) the data returns is passed.

### success

* (*function*) this function is fired whenever the request has been completed and the data returns from the server. It is passed one argument.

### Signature

   onSuccess(data)

#### Arguments
     1. data - (*Object*) data returns are passed.

## Element Method: loadTimeZone

Updates the content of the Element with the desired timezone.

### Syntax:

myElement.loadTimeZone(location);

#### Arguments:
1. location (*String*) - the location for which you wish to display timezone.

### Returns:

(*Element*) - the target Element

### Example:

       #HTML
       <div id="content">Loading content...</div>

       #JS
       $('content').loadTimeZone('bucharest');
