/*
 * jQuery FlexSlider v1.8
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Contrib: Darin Richardson
 */(function(e){e.flexslider=function(t,n){var r=t;r.init=function(){r.vars=e.extend({},e.flexslider.defaults,n);r.data("flexslider",!0);r.container=e(".slides",r).first();r.slides=e(".slides:first > li",r);r.count=r.slides.length;r.animating=!1;r.currentSlide=r.vars.slideToStart;r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide==0?!0:!1;r.eventType="ontouchstart"in document.documentElement?"touchstart":"click";r.cloneCount=0;r.cloneOffset=0;r.manualPause=!1;r.vertical=r.vars.slideDirection=="vertical";r.prop=r.vertical?"top":"marginLeft";r.args={};r.transitions="webkitTransition"in document.body.style;r.transitions&&(r.prop="-webkit-transform");if(r.vars.controlsContainer!=""){r.controlsContainer=e(r.vars.controlsContainer).eq(e(".slides").index(r.container));r.containerExists=r.controlsContainer.length>0}if(r.vars.manualControls!=""){r.manualControls=e(r.vars.manualControls,r.containerExists?r.controlsContainer:r);r.manualExists=r.manualControls.length>0}if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}if(r.vars.animation.toLowerCase()=="slide"){r.transitions&&r.setTransition(0);r.css({overflow:"hidden"});if(r.vars.animationLoop){r.cloneCount=2;r.cloneOffset=1;r.container.append(r.slides.filter(":first").clone().addClass("clone")).prepend(r.slides.filter(":last").clone().addClass("clone"))}r.newSlides=e(".slides:first > li",r);var t=-1*(r.currentSlide+r.cloneOffset);if(r.vertical){r.newSlides.css({display:"block",width:"100%","float":"left"});r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.css({position:"relative"}).height(r.slides.filter(":first").height());r.args[r.prop]=r.transitions?"translate3d(0,"+t*r.height()+"px,0)":t*r.height()+"px";r.container.css(r.args)},100)}else{r.args[r.prop]=r.transitions?"translate3d("+t*r.width()+"px,0,0)":t*r.width()+"px";r.container.width((r.count+r.cloneCount)*200+"%").css(r.args);setTimeout(function(){r.newSlides.width(r.width()).css({"float":"left",display:"block"})},100)}}else{r.transitions=!1;r.slides.css({width:"100%","float":"left",marginRight:"-100%"}).eq(r.currentSlide).fadeIn(r.vars.animationDuration)}if(r.vars.controlNav){if(r.manualExists)r.controlNav=r.manualControls;else{var i=e('<ol class="flex-control-nav"></ol>'),s=1;for(var o=0;o<r.count;o++){i.append("<li><a>"+s+"</a></li>");s++}if(r.containerExists){e(r.controlsContainer).append(i);r.controlNav=e(".flex-control-nav li a",r.controlsContainer)}else{r.append(i);r.controlNav=e(".flex-control-nav li a",r)}}r.controlNav.eq(r.currentSlide).addClass("active");r.controlNav.bind(r.eventType,function(t){t.preventDefault();if(!e(this).hasClass("active")){r.controlNav.index(e(this))>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(r.controlNav.index(e(this)),r.vars.pauseOnAction)}})}if(r.vars.directionNav){var u=e('<ul class="flex-direction-nav"><li><a class="prev" href="#">'+r.vars.prevText+'</a></li><li><a class="next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.containerExists){e(r.controlsContainer).append(u);r.directionNav=e(".flex-direction-nav li a",r.controlsContainer)}else{r.append(u);r.directionNav=e(".flex-direction-nav li a",r)}r.vars.animationLoop||(r.currentSlide==0?r.directionNav.filter(".prev").addClass("disabled"):r.currentSlide==r.count-1&&r.directionNav.filter(".next").addClass("disabled"));r.directionNav.bind(r.eventType,function(t){t.preventDefault();var n=e(this).hasClass("next")?r.getTarget("next"):r.getTarget("prev");r.canAdvance(n)&&r.flexAnimate(n,r.vars.pauseOnAction)})}if(r.vars.keyboardNav&&e("ul.slides").length==1){function a(e){if(r.animating)return;if(e.keyCode!=39&&e.keyCode!=37)return;if(e.keyCode==39)var t=r.getTarget("next");else if(e.keyCode==37)var t=r.getTarget("prev");r.canAdvance(t)&&r.flexAnimate(t,r.vars.pauseOnAction)}e(document).bind("keyup",a)}if(r.vars.mousewheel){r.mousewheelEvent=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel";r.bind(r.mousewheelEvent,function(e){e.preventDefault();e=e?e:window.event;var t=e.detail?e.detail*-1:e.wheelDelta/40,n=t<0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(n)&&r.flexAnimate(n,r.vars.pauseOnAction)})}if(r.vars.slideshow){r.vars.pauseOnHover&&r.vars.slideshow&&r.hover(function(){r.pause()},function(){r.manualPause||r.resume()});r.animatedSlides=setInterval(r.animateSlides,r.vars.slideshowSpeed)}if(r.vars.pausePlay){var f=e('<div class="flex-pauseplay"><span></span></div>');if(r.containerExists){r.controlsContainer.append(f);r.pausePlay=e(".flex-pauseplay span",r.controlsContainer)}else{r.append(f);r.pausePlay=e(".flex-pauseplay span",r)}var l=r.vars.slideshow?"pause":"play";r.pausePlay.addClass(l).text(l=="pause"?r.vars.pauseText:r.vars.playText);r.pausePlay.bind(r.eventType,function(t){t.preventDefault();if(e(this).hasClass("pause")){r.pause();r.manualPause=!0}else{r.resume();r.manualPause=!1}})}if("ontouchstart"in document.documentElement){var c,h,p,d,v,m,g=!1;r.each(function(){"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",y,!1)});function y(e){if(r.animating)e.preventDefault();else if(e.touches.length==1){r.pause();d=r.vertical?r.height():r.width();m=Number(new Date);p=r.vertical?(r.currentSlide+r.cloneOffset)*r.height():(r.currentSlide+r.cloneOffset)*r.width();c=r.vertical?e.touches[0].pageY:e.touches[0].pageX;h=r.vertical?e.touches[0].pageX:e.touches[0].pageY;r.setTransition(0);this.addEventListener("touchmove",b,!1);this.addEventListener("touchend",w,!1)}}function b(e){v=r.vertical?c-e.touches[0].pageY:c-e.touches[0].pageX;g=r.vertical?Math.abs(v)<Math.abs(e.touches[0].pageX-h):Math.abs(v)<Math.abs(e.touches[0].pageY-h);if(!g){e.preventDefault();if(r.vars.animation=="slide"&&r.transitions){r.vars.animationLoop||(v/=r.currentSlide==0&&v<0||r.currentSlide==r.count-1&&v>0?Math.abs(v)/d+2:1);r.args[r.prop]=r.vertical?"translate3d(0,"+(-p-v)+"px,0)":"translate3d("+(-p-v)+"px,0,0)";r.container.css(r.args)}}}function w(e){r.animating=!1;if(r.animatingTo==r.currentSlide&&!g&&v!=null){var t=v>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(t)&&Number(new Date)-m<550&&Math.abs(v)>20||Math.abs(v)>d/2?r.flexAnimate(t,r.vars.pauseOnAction):r.flexAnimate(r.currentSlide,r.vars.pauseOnAction)}this.removeEventListener("touchmove",b,!1);this.removeEventListener("touchend",w,!1);c=null;h=null;v=null;p=null}}r.vars.animation.toLowerCase()=="slide"&&e(window).resize(function(){if(!r.animating)if(r.vertical){r.height(r.slides.filter(":first").height());r.args[r.prop]=-1*(r.currentSlide+r.cloneOffset)*r.slides.filter(":first").height()+"px";if(r.transitions){r.setTransition(0);r.args[r.prop]=r.vertical?"translate3d(0,"+r.args[r.prop]+",0)":"translate3d("+r.args[r.prop]+",0,0)"}r.container.css(r.args)}else{r.newSlides.width(r.width());r.args[r.prop]=-1*(r.currentSlide+r.cloneOffset)*r.width()+"px";if(r.transitions){r.setTransition(0);r.args[r.prop]=r.vertical?"translate3d(0,"+r.args[r.prop]+",0)":"translate3d("+r.args[r.prop]+",0,0)"}r.container.css(r.args)}});r.vars.start(r)};r.flexAnimate=function(e,t){if(!r.animating){r.animating=!0;r.animatingTo=e;r.vars.before(r);t&&r.pause();r.vars.controlNav&&r.controlNav.removeClass("active").eq(e).addClass("active");r.atEnd=e==0||e==r.count-1?!0:!1;!r.vars.animationLoop&&r.vars.directionNav&&(e==0?r.directionNav.removeClass("disabled").filter(".prev").addClass("disabled"):e==r.count-1?r.directionNav.removeClass("disabled").filter(".next").addClass("disabled"):r.directionNav.removeClass("disabled"));if(!r.vars.animationLoop&&e==r.count-1){r.pause();r.vars.end(r)}if(r.vars.animation.toLowerCase()=="slide"){var n=r.vertical?r.slides.filter(":first").height():r.slides.filter(":first").width();r.currentSlide==0&&e==r.count-1&&r.vars.animationLoop&&r.direction!="next"?r.slideString="0px":r.currentSlide==r.count-1&&e==0&&r.vars.animationLoop&&r.direction!="prev"?r.slideString=-1*(r.count+1)*n+"px":r.slideString=-1*(e+r.cloneOffset)*n+"px";r.args[r.prop]=r.slideString;if(r.transitions){r.setTransition(r.vars.animationDuration);r.args[r.prop]=r.vertical?"translate3d(0,"+r.slideString+",0)":"translate3d("+r.slideString+",0,0)";r.container.css(r.args).one("webkitTransitionEnd transitionend",function(){r.wrapup(n)})}else r.container.animate(r.args,r.vars.animationDuration,function(){r.wrapup(n)})}else{r.slides.eq(r.currentSlide).fadeOut(r.vars.animationDuration);r.slides.eq(e).fadeIn(r.vars.animationDuration,function(){r.wrapup()})}}};r.wrapup=function(e){if(r.vars.animation=="slide")if(r.currentSlide==0&&r.animatingTo==r.count-1&&r.vars.animationLoop){r.args[r.prop]=-1*r.count*e+"px";if(r.transitions){r.setTransition(0);r.args[r.prop]=r.vertical?"translate3d(0,"+r.args[r.prop]+",0)":"translate3d("+r.args[r.prop]+",0,0)"}r.container.css(r.args)}else if(r.currentSlide==r.count-1&&r.animatingTo==0&&r.vars.animationLoop){r.args[r.prop]=-1*e+"px";if(r.transitions){r.setTransition(0);r.args[r.prop]=r.vertical?"translate3d(0,"+r.args[r.prop]+",0)":"translate3d("+r.args[r.prop]+",0,0)"}r.container.css(r.args)}r.animating=!1;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){r.animating||r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.vars.pausePlay&&r.pausePlay.removeClass("pause").addClass("play").text(r.vars.playText)};r.resume=function(){r.animatedSlides=setInterval(r.animateSlides,r.vars.slideshowSpeed);r.vars.pausePlay&&r.pausePlay.removeClass("play").addClass("pause").text(r.vars.pauseText)};r.canAdvance=function(e){return!r.vars.animationLoop&&r.atEnd?r.currentSlide==0&&e==r.count-1&&r.direction!="next"?!1:r.currentSlide==r.count-1&&e==0&&r.direction=="next"?!1:!0:!0};r.getTarget=function(e){r.direction=e;return e=="next"?r.currentSlide==r.count-1?0:r.currentSlide+1:r.currentSlide==0?r.count-1:r.currentSlide-1};r.setTransition=function(e){r.container.css({"-webkit-transition-duration":e/1e3+"s"})};r.init()};e.flexslider.defaults={animation:"fade",slideDirection:"horizontal",slideshow:!0,slideshowSpeed:7e3,animationDuration:600,directionNav:!0,controlNav:!0,keyboardNav:!0,mousewheel:!1,prevText:"Previous",nextText:"Next",pausePlay:!1,pauseText:"Pause",playText:"Play",randomize:!1,slideToStart:0,animationLoop:!0,pauseOnAction:!0,pauseOnHover:!1,controlsContainer:"",manualControls:"",start:function(){},before:function(){},after:function(){},end:function(){}};e.fn.flexslider=function(t){return this.each(function(){e(this).find(".slides li").length==1?e(this).find(".slides li").fadeIn(400):e(this).data("flexslider")!=1&&new e.flexslider(e(this),t)})}})(jQuery);var responsiveNav=function(e,t){function y(e,t){g||(g=new m(e,t));return g}var n=!!e.getComputedStyle;e.getComputedStyle||(e.getComputedStyle=function(e){this.el=e;this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;t==="float"&&(t="styleFloat");n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()}));return e.currentStyle[t]?e.currentStyle[t]:null};return this});var r,i,s,o=t.documentElement,u=t.getElementsByTagName("head")[0],a=t.createElement("style"),f=!1,l=function(e,t,n,r){if("addEventListener"in e)try{e.addEventListener(t,n,r)}catch(i){if(typeof n!="object"||!n.handleEvent)throw i;e.addEventListener(t,function(e){n.handleEvent.call(n,e)},r)}else"attachEvent"in e&&(typeof n=="object"&&n.handleEvent?e.attachEvent("on"+t,function(){n.handleEvent.call(n)}):e.attachEvent("on"+t,n))},c=function(e,t,n,r){if("removeEventListener"in e)try{e.removeEventListener(t,n,r)}catch(i){if(typeof n!="object"||!n.handleEvent)throw i;e.removeEventListener(t,function(e){n.handleEvent.call(n,e)},r)}else"detachEvent"in e&&(typeof n=="object"&&n.handleEvent?e.detachEvent("on"+t,function(){n.handleEvent.call(n)}):e.detachEvent("on"+t,n))},h=function(e){var t=e.firstChild;while(t!==null&&t.nodeType!==1)t=t.nextSibling;return t},p=function(e,t){for(var n in t)e.setAttribute(n,t[n])},d=function(e,t){e.className+=" "+t;e.className=e.className.replace(/(^\s*)|(\s*$)/g,"")},v=function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/(^\s*)|(\s*$)/g,"")},m=function(e,n){var s;this.options={animate:!0,transition:400,label:"Menu",insert:"after",customToggle:"",openPos:"relative",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(s in n)this.options[s]=n[s];d(o,this.options.jsClass);this.wrapperEl=e.replace("#","");if(!t.getElementById(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=t.getElementById(this.wrapperEl);this.wrapper.inner=h(this.wrapper);i=this.options;r=this.wrapper;this._init(this)};m.prototype={destroy:function(){this._removeStyles();v(r,"closed");v(r,"opened");r.removeAttribute("style");r.removeAttribute("aria-hidden");r=null;g=null;c(e,"load",this,!1);c(e,"resize",this,!1);c(s,"mousedown",this,!1);c(s,"touchstart",this,!1);c(s,"touchend",this,!1);c(s,"keyup",this,!1);c(s,"click",this,!1);i.customToggle?s.removeAttribute("aria-hidden"):s.parentNode.removeChild(s)},toggle:function(){if(!f){v(r,"closed");d(r,"opened");r.style.position=i.openPos;p(r,{"aria-hidden":"false"});f=!0;i.open()}else{v(r,"opened");d(r,"closed");p(r,{"aria-hidden":"true"});i.animate?setTimeout(function(){r.style.position="absolute"},i.transition+10):r.style.position="absolute";f=!1;i.close()}},handleEvent:function(t){var n=t||e.event;switch(n.type){case"mousedown":this._onmousedown(n);break;case"touchstart":this._ontouchstart(n);break;case"touchend":this._ontouchend(n);break;case"keyup":this._onkeyup(n);break;case"click":this._onclick(n);break;case"load":this._transitions(n);this._resize(n);break;case"resize":this._resize(n)}},_init:function(){d(r,"closed");this._createToggle();l(e,"load",this,!1);l(e,"resize",this,!1);l(s,"mousedown",this,!1);l(s,"touchstart",this,!1);l(s,"touchend",this,!1);l(s,"keyup",this,!1);l(s,"click",this,!1)},_createStyles:function(){a.parentNode||u.appendChild(a)},_removeStyles:function(){a.parentNode&&a.parentNode.removeChild(a)},_createToggle:function(){if(!i.customToggle){var e=t.createElement("a");e.innerHTML=i.label;p(e,{href:"#",id:"nav-toggle"});i.insert==="after"?r.parentNode.insertBefore(e,r.nextSibling):r.parentNode.insertBefore(e,r);s=t.getElementById("nav-toggle")}else{var n=i.customToggle.replace("#","");if(!t.getElementById(n))throw new Error("The custom nav toggle you are trying to select doesn't exist");s=t.getElementById(n)}},_preventDefault:function(e){if(e.preventDefault){e.preventDefault();e.stopPropagation()}else e.returnValue=!1},_onmousedown:function(t){var n=t||e.event;if(n.which!==3&&n.button!==2){this._preventDefault(t);this.toggle(t)}},_ontouchstart:function(e){s.onmousedown=null;this._preventDefault(e);this.toggle(e)},_ontouchend:function(){var e=this;r.addEventListener("click",e._preventDefault,!0);setTimeout(function(){r.removeEventListener("click",e._preventDefault,!0)},i.transition)},_onkeyup:function(t){var n=t||e.event;n.keyCode===13&&this.toggle(t)},_onclick:function(e){this._preventDefault(e)},_transitions:function(){if(i.animate){var e=r.style,t="max-height "+i.transition+"ms";e.WebkitTransition=t;e.MozTransition=t;e.OTransition=t;e.transition=t}},_calcHeight:function(){var e=r.inner.offsetHeight,t="#"+this.wrapperEl+".opened{max-height:"+e+"px}";if(n){a.innerHTML=t;t=""}},_resize:function(){if(e.getComputedStyle(s,null).getPropertyValue("display")!=="none"){p(s,{"aria-hidden":"false"});if(r.className.match(/(^|\s)closed(\s|$)/)){p(r,{"aria-hidden":"true"});r.style.position="absolute"}this._createStyles();this._calcHeight()}else{p(s,{"aria-hidden":"true"});p(r,{"aria-hidden":"false"});r.style.position=i.openPos;this._removeStyles()}i.init()}};var g;return y}(window,document),navigation=responsiveNav("#nav",{animate:!0,transition:400,label:"Menu",insert:"before",customToggle:"",openPos:"relative",jsClass:"js",init:function(){},open:function(){},close:function(){}});$(window).load(function(){$(".flexslider").flexslider();$(".dropdown-toggle").dropdown();$(".collapse").collapse()});(function(e){function o(){s.content="width=device-width,minimum-scale="+i[0]+",maximum-scale="+i[1];e.removeEventListener(n,o,!0)}var t="addEventListener",n="gesturestart",r="querySelectorAll",i=[1,1],s=r in e?e[r]("meta[name=viewport]"):[];if((s=s[s.length-1])&&t in e){o();i=[.25,1.6];e[t](n,o,!0)}})(document);