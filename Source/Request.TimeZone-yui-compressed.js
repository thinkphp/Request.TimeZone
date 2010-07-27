/*
---
description: This is a quick plugin MooTools which creates an badge with timezone and map at the location you defined.

authors:
- Adrian Statescu (http://thinkphp.ro)

license:
- MIT-style license

requires:
 core/1.2.1: '*'

provides: [Request.TimeZone]
...
*/

Request.TimeZone=new Class({Extends:Request.JSONP,options:{url:"http://query.yahooapis.com/v1/public/yql?q=use%20'http%3A%2F%2Fthinkphp.ro%2Fapps%2Fjs-hacks%2Ftimezone%2Fjsonp%2Ftimezone.xml'%20as%20tz%3B%20select%20*%20from%20tz%20where%20place%3D'{location}'and%20badge%3D'{type}'",data:{format:"json",diagnostics:true}},initialize:function(location,options,o){if(typeof o=="object"&&o.badge==true){this.parent(options);this.options.data.format="xml";this.options.url=this.options.url.substitute({location:location,type:true})}else{this.parent(options);this.options.url=this.options.url.substitute({location:location,type:false})}}});Element.implement({loadTimeZone:function(location){var elem=this;new Request.TimeZone(location,{onSuccess:function(o){if(window.console){console.log(o)}elem.set("html",o.results[0])},onRequest:function(script){if(window.console){console.log(script)}elem.set("text","Loading...")}},{badge:true}).send();return this}});