"use strict";!function(){var e=Array.from(document.getElementsByTagName("audio"));console.log(e);var t=function(e,t){return t.parentNode.insertBefore(e,t.nextSibling)},n=0;e.forEach(function(e){var a=document.createElement("div");a.setAttribute("class","audio"),a.innerHTML='\n            <div class="ap-scrubberContainer">\n                <div class="ap-scrubberBar">\n                    <div style="width:0%" class="ap-scrubber">&nbsp;</div>\n                    <div style="width:0%" class="ap-scrubberMouseover">&nbsp;</div>\n                </div>\n            </div>\n            <div class="ap-controls">\n                <div class="ap-navigation">\n                    <button class="ap-back10">&laquo;10</button>\n                    <button class="ap-togglePlay"></button>\n                    <button class="ap-skip10">10&raquo;</button>\n                </div>\n            </div>        \n    ',t(a,e);var r=document.getElementsByClassName("ap-togglePlay")[n];r.innerHTML="&#9658;",Rx.Observable.fromEvent(r,"click").forEach(function(t){e.paused?(e.play(),setTimeout(function(){return console.log(e.currentTime/e.duration*100+"%")},1e3),r.innerHTML="&#10073;&#10073;"):(e.pause(),r.innerHTML="&#9658;")});var o=document.getElementsByClassName("ap-back10")[n];Rx.Observable.fromEvent(o,"click").forEach(function(t){return e.currentTime-=10});var s=document.getElementsByClassName("ap-skip10")[n];Rx.Observable.fromEvent(s,"click").forEach(function(t){return e.currentTime+=10});var i=document.getElementsByClassName("ap-scrubberContainer")[n],c=(document.getElementsByClassName("ap-scrubberBar")[n],document.getElementsByClassName("ap-scrubberMouseover")[n]),l=document.getElementsByClassName("ap-scrubber")[n],u=Rx.Observable.fromEvent(i,"mousemove"),d=Rx.Observable.fromEvent(i,"mouseout"),b=Rx.Observable.fromEvent(i,"click");e.progress=function(){console.log(e.buffer)},/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(u.forEach(function(e){var t=i.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*100;console.log(n),c.setAttribute("style","width: "+n+"%")}),d.forEach(function(){c.setAttribute("style","width:0")})),b.forEach(function(t){var n=i.getBoundingClientRect(),a=(t.clientX-n.left)/n.width;e.currentTime=e.duration*a}),e.ontimeupdate=function(){e.percentPlayed=e.currentTime/e.duration*100,l.setAttribute("style","width: "+e.percentPlayed+"%"),100===e.percentPlayed&&(r.innerHTML="&#9658;",l.setAttribute("style","width: 0%"))},n++,console.log(n)})}(),$(document).ready(function(){function e(){$(window).width()<768?$("ul.nav").children().attr("data-toggle","collapse").attr("data-target","#navbar"):$("ul.nav").children().attr("data-toggle","none").attr("data-target","none")}e(),$('[data-toggle="tooltip"]').tooltip(),$(window).resize(function(t){e(),$("#at4-share3").remove(),$("#at-share-dock3").remove()}),$(window).on("load",function(){$("#at4-share3").remove(),$("#at-share-dock3").remove(),console.log("load")})});