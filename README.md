Request.ForecastWeather
=======================
This is a simple plugin that display you the local timezone with JSONP&YQL-driven badge.

![Screenshot](http://farm5.static.flickr.com/4129/4833588733_3ed15f79eb_z.jpg)

How to use
----------

First you must to include the JS files in the head of your HTML document.
       
       #HTML
       <script type="text/javascript" src="core.js"></script>
       <script type="text/javascript" src="jsonp.js"></script>
       <script type="text/javascript" src="Request.TimeZone.js"></script>

In your JavaScript source: 

       #JS 
       window.addEvent('domready',function(){ 

         new Request.TimeZone('sydney',{
                                       onSuccess: function(o){
                                             if(window.console) {console.log(o);} 
                                             $('timezonearea1').set('html',o.results[0]);                                             
                                       },
                                       onRequest: function(script){           
                                             if(window.console) {console.log(script);} 
                                             $('timezonearea1').set('text','Loading...'); 
                                       }   
         },{badge: true}).send(); 

         new Request.TimeZone('toronto',{
                                  onSuccess: function(o){
                                             if(window.console) {console.log(o);} 
                                             var resp = o.query.results.response.timezone;
                                             $('timezonearea2').set('html',"<ul class='tz'>"+
                                                                    "<li><span>Timezone:</span> "+resp.timezoneId+"</li>"+
                                                                    "<li><span>Country: </span>"+resp.countryName+"("+resp.countryCode+")</li>"+
                                                                    "<li><span>Sunset: </span>"+resp.sunset+"</li>"+
                                                                    "<li><span>Sunrise: </span>"+resp.sunrise+"</li>"+
                                                                    "<li><span>Latitude: </span>"+resp.lat+"</li>"+
                                                                    "<li><span>Longitude: </span>"+resp.lng+"</li>"+
                                                                    "<li><span>Time: </span>"+resp.time+"</li>"+
                                                                    "</ul>");

                                       },
                                  onRequest: function(script){           
                                             if(window.console) {console.log(script);} 
                                             $('timezonearea2').set('text','Loading...'); 
                                  }   
          }).send(); 

         //You can load the timezone in an Element
         $('timezonearea3').loadTimeZone('bucuresti');
      });

In your HTML source: 

       #HTML
       <div id="timezonearea1"></div>
       <div id="timezonearea2"></div>
       <div id="timezonearea3"></div>

Dependencies

      MooTools Core 1.2.4
      MooTools More: Request.JSONP