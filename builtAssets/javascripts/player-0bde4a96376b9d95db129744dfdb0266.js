$(function(){function a(a,c){var d=Math.floor(a)%60,e=Math.floor(a/60)%60,f=Math.floor(a/3600);return f>23?c+b(" hour",f):f>0?c+b(" hour",f)+" and "+b(" minute",e):e>0?c+b(" minute",e)+" and "+b(" second",d):c+b(" second",d)}function b(a,b){return b+(b!=1?a+"s":a)}$("audio").mediaelementplayer({mode:"auto_plugin",audioWidth:"92",audioHeight:"92",features:["playpause"],pluginPath:"/mediaelement/",success:function(b,c){b.pluginType!="native"&&(c.src=null,c.load());var d=$("#status");b.addEventListener("play",function(){d.text("Loading...")},!1),b.addEventListener("timeupdate",function(){b.currentTime>1&&d.text(a(b.currentTime,"Playing for "))},!1)}})})