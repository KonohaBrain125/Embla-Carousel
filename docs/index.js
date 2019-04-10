!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("EmblaCarousel",[],e):"object"==typeof exports?exports.EmblaCarousel=e():t.EmblaCarousel=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.Vector1D=function(t){var e={},n={value:t};function o(){return n.value}function i(t){return n.value/=t,e}function a(){return o()}function u(){var t=a();return 0!==t&&i(t),e}return r(e,{add:function(t){return n.value+=t.get(),e},addNumber:function(t){return n.value+=t,e},divide:i,get:o,limit:function(t){return a()>t&&u().multiply(t),e},magnitude:a,multiply:function(t){return n.value*=t,e},normalize:u,set:function(t){return n.value=t.get(),e},setNumber:function(t){return n.value=t,e},subtract:function(t){return n.value-=t.get(),e},subtractNumber:function(t){return n.value-=t,e}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.rectWidth=function(t){return t.getBoundingClientRect().width},e.map=function(t,e,n,r,o){return r+(t-e)/(n-e)*(o-r)},e.arrayFromCollection=function(t){return Array.prototype.slice.call(t)}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.Direction=function(t){var e={},n=o.Vector1D(i(t));function i(t){return 0===t?0:t/Math.abs(t)}return r(e,{get:n.get,set:function(t){var r=i(t.get());return r&&r!==n.get()&&n.setNumber(r),e}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.EventStore=function(){var t={},e={listeners:[]};return r(t,{add:function(n,r,o){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n.addEventListener(r,o,i),e.listeners.push(function(){return n.removeEventListener(r,o,i)}),t},removeAll:function(){return e.listeners.filter(function(t){return t()}),t}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.Limit=function(t){var e=t.low,n=t.high,o={high:e,low:n},i={low:e,high:n};function a(t){return t<e}function u(t){return t>n}function c(t){var e=a(t)&&"low",n=u(t)&&"high";return e||n||""}return r({},{constrain:function(t){var e=c(t);return e?i[e]:t},high:n,loop:function(t){var e=c(t);return e?o[e]:t},low:e,reached:{any:function(t){return a(t)||u(t)},high:u,low:a}})}},function(t,e,n){t.exports=n(6)},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),i=n(21),a=n(3),u=n(22),c=n(1);function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={},s={},l={active:!1},f=r({},u.defaultOptions,e),d=i.EventDispatcher(),v=a.EventStore();function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=!l.active;if(function(){var e=t;if(!e)throw new Error("No root element provided 😢");var n=f.containerSelector,r=e.querySelector(n);if(!r)throw new Error("No valid container element found 😢");s.root=e,s.container=r,s.slides=c.arrayFromCollection(r.children),l.active=!0}(),s.slides.length>0){var a=s.root,u=s.container,p=s.slides,g=r(f,e),h=o.Engine(a,u,p,g,d);if(r(n,h),p.forEach(function(e,n){return v.add(e,"focus",(r=n,function(){t.scrollLeft=0,m(r)}),!0);var r}),n.translate.to(n.mover.location),f.draggable){var y=f.draggableClass,b=f.draggingClass,O=a.classList;n.pointer.activate(),O.add(y),d.on("dragStart",function(){return O.add(b)}),d.on("dragEnd",function(){return O.remove(b)})}f.loop&&n.shifter.shiftAccordingTo(n.mover.location),i&&(d.on("select",function(t){var e=f.selectedClass;return t[n.index.get()].classList.add(e),function(){var r=n.index.get();t.filter(function(t){return t.classList.contains(e)}).forEach(function(t){return t.classList.remove(e)}),t[r].classList.add(e)}}(p)),setTimeout(function(){return d.dispatch("init")},0))}}function g(){var t=s.root,e=s.container,r=s.slides;n.pointer.removeAllEvents(),n.animation.stop(),v.removeAll(),t.classList.remove(f.draggableClass),e.style.transform="",r.forEach(function(t){return t.style.left=""})}function m(t){n.mover.useDefaultSpeed(),n.travel.toIndex(t)}return p(f),r({},{destroy:function(){l.active=!1,g(),d.dispatch("destroy")},getContainer:function(){return s.container},getSelectedIndex:function(){return n.index.get()},getSlides:function(){return s.slides},goTo:m,next:function(){n.mover.useDefaultSpeed(),n.travel.toNext()},off:d.off,on:d.on,previous:function(){n.mover.useDefaultSpeed(),n.travel.toPrevious()},resize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(l.active){var e=r({startIndex:n.index.get()},t);g(),p(e)}}})}e.EmblaCarousel=s,t.exports=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=n(9),i=n(10),a=n(11),u=n(12),c=n(13),s=n(4),l=n(14),f=n(15),d=n(16),v=n(17),p=n(18),g=n(1),m=n(0),h=n(19),y=n(20);e.Engine=function(t,e,n,b,O){var j=b.align,w=b.startIndex,x=b.loop,P=b.speed,M=s.Limit({low:5,high:20}),D=a.Counter({limit:s.Limit({low:0,high:n.length-1}),loop:x,start:w}),_=g.rectWidth(e),S=i.ChunkSize(_),T=r.AlignSize({align:j,root:S.getRoot}),E=n.map(g.rectWidth).map(S.measure),C=E.map(T.measure),k=E.reduce(function(t,e){return t+e},0),V=E.map(function(t,e){var n=D.clone().set(e+1).get();return t+C[e]-C[n]}),A=n.map(function(t,e){return V.slice(0,e).reduce(function(t,e){return t-e},C[0])}),L=C[0],N=-k+C[0]+(x?S.measure(1):E[D.max]),z=s.Limit({high:L,low:N}),F=o.Animation(function(){q.isDown()||(x||U.bounds.constrain(B),U.mover.seek(B).update(),U.mover.settle(B)&&(U.animation.stop(),U.translate.useDefault())),x&&(U.infinite.loop(q.isDown()?q.direction.get():U.mover.direction.get()),U.shifter.shiftAccordingTo(U.mover.location)),U.translate.to(U.mover.location).use3d(),U.animation.proceed()}),I=A[D.get()],R=m.Vector1D(I),B=m.Vector1D(I),W=l.Mover({location:R,mass:1.5,maxForce:2*S.getRoot,speed:M.constrain(P)}),X=p.Traveller({animation:F,events:O,findTarget:d.TargetFinder({diffDistances:V,index:D,location:R,loop:x}),index:D,moverTarget:B}),q=u.DragBehaviour({animation:F,element:t,events:O,index:D,limit:z,location:R,loop:b.loop,mover:W,pointer:f.Pointer(S),target:B,travel:X}),U={animation:F,bounds:h.VectorBounds({animation:F,limit:z,location:R,mover:W,tolerance:50}),index:D,infinite:y.VectorLooper({limit:z,location:R,span:k,vectors:[R,B,q.dragStartLocation]}),mover:W,pointer:q,shifter:c.InfiniteShifter({alignSizes:C,chunkSize:S,itemSizes:E,items:n}),target:B,translate:v.Translate(e),travel:X};return U}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.AlignSize=function(t){var e=t.root,n=t.align,o={start:function(t){return 0*t},center:function(t){return(e-t)/2},end:function(t){return e-t}};return r({},{measure:function(t){return o[n](t)}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.Animation=function(t){var e={},n=requestAnimationFrame.bind(window),o=cancelAnimationFrame.bind(window),i={animationFrame:0};function a(t,n){return function(){return t===!!i.animationFrame&&n(),e}}function u(){i.animationFrame=n(t)}return r(e,{proceed:a(!0,u),start:a(!1,u),stop:a(!0,function(){o(i.animationFrame),i.animationFrame=0})})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.ChunkSize=function(t){var e={root:t};function n(t){return t/e.root*100}return r({},{getRoot:n(e.root),measure:n})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.Counter=function t(e){var n={},o=e.start,i=e.limit,a=e.loop,u=a?"loop":"constrain",c={value:f(o)};function s(){return c.value}function l(t){return c.value=f(t),n}function f(t){return i[u](t)}return r(n,{add:function t(e){if(0!==e){var r=e/Math.abs(e);return l(s()+r),t(e+-1*r)}return n},clone:function(){return t({start:s(),limit:i,loop:a})},get:s,max:i.high,min:i.low,set:l})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=n(4),a=n(0);e.DragBehaviour=function(t){var e=t.element,n=t.pointer,u=t.location,c=t.limit,s=t.loop,l=t.events,f=["INPUT","SELECT","TEXTAREA"],d=a.Vector1D(0),v=a.Vector1D(0),p=a.Vector1D(0),g=o.EventStore(),m=o.EventStore(),h={isMouse:!1,preventClick:!1,preventScroll:!1};function y(r){var o=t.animation,i=r.target;h.isMouse="mousedown"===r.type,n.down(r),d.set(u),o.start(),h.preventClick=!1,function(){var t=h.isMouse?document:e;m.add(t,"touchmove",b).add(t,"touchend",O).add(t,"mousemove",b).add(t,"mouseup",O)}(),l.dispatch("dragStart"),h.isMouse?function(t){var e=t.nodeName||"";return f.indexOf(e)>-1}(i)||r.preventDefault():(v.set(n.read(r,"x")),p.set(n.read(r,"y")))}function b(t){if(h.preventScroll||h.isMouse){t.preventDefault();var e=n.move(t),r=c.reached.any(u.get()),o=!s&&r?2:1;u.addNumber(e/o)}else{var i=n.read(t,"x").get(),a=n.read(t,"y").get(),l=i-v.get(),f=a-p.get();h.preventScroll=Math.abs(l)>Math.abs(f),h.preventScroll||O()}}function O(){var e=t.travel,r=t.target,o=t.mover,a=t.index,f=n.up()*(h.isMouse?1:2.4),v=Math.abs(f),p=i.Limit({low:11,high:15}).constrain(v);if(h.isMouse=!1,h.preventScroll=!1,m.removeAll(),l.dispatch("dragEnd"),!s){var g=u.get()+f,y=c.reached.low(g),b=c.reached.high(g);if(b||y){var O=b?a.min:a.max;return r.setNumber(g),void(O!==a.get()&&(a.set(O),l.dispatch("select")))}}var j=Math.abs(d.get()-u.get()),w=Math.abs(r.get()-u.get());j>1&&w>1&&(h.preventClick=!0,j>5&&(o.useSpeed(p),e.toDistance(d.get(),f)))}function j(t){h.preventClick&&t.preventDefault()}return r({},{activate:function(){var t=e;g.add(t,"touchmove",function(){}).add(t,"touchend",function(){}).add(t,"touchstart",y).add(t,"touchcancel",O).add(t,"mousedown",y).add(t,"click",j)},cancel:O,direction:n.direction,down:y,dragStartLocation:d,isDown:n.isDown,move:b,onClick:j,removeAllEvents:function(){g.removeAll(),m.removeAll()},up:O})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=n(0);e.InfiniteShifter=function(t){var e,n,a,u=t.items,c=t.chunkSize,s=t.itemSizes,l=t.alignSizes,f=u.map(o.rectWidth).map(c.measure),d=s.reduce(function(t,e){return t+e},0),v=c.getRoot,p=f.reduce(function(t,e){return t+e},0),g=Object.keys(u).map(Number),m=g.slice().reverse(),h=(e=l[0]-1,n=b(e,m),a=O(e,n,0),j(n,a,1)).concat(function(){var t=b(v-l[0]-1,g),e=O(d,g,-v);return j(t,-e,0)}());function y(t,e){return t.reduce(function(t,e){return t-s[e]},e)}function b(t,e){return e.reduce(function(e,n){return y(e,t)>0?e.concat([n]):e},[])}function O(t,e,n){return e.reduce(function(e,n){var r=e+s[n];return r<t?r:e},n)}function j(t,e,n){var r=t.slice().sort(function(t,e){return t-e});return r.map(function(t,o){var a=u[t],c=p*(n?-1:0),s=p*(n?0:1),l=function(t,e,n){var r=u.length-1;return y(t.map(function(t){return(t+n)%r}),e)}(r.slice(0,o),e,n);return{findTarget:function(t){var e=i.Vector1D(0),n=t>l?c:s;return e.setNumber(n)},location:i.Vector1D(-1),node:a}})}return r({},{shiftAccordingTo:function(t){h.forEach(function(e){var n=e.findTarget,r=e.location,o=e.node,i=n(t.get());i.get()!==r.get()&&(o.style.left="".concat(i.get(),"%"))})}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=n(1),a=n(0);e.Mover=function(t){var e={},n=t.location,u=t.speed,c=t.mass,s=t.maxForce,l=a.Vector1D(0),f=a.Vector1D(0),d=a.Vector1D(0),v=o.Direction(0),p={speed:u};function g(t){return p.speed!==t&&(p.speed=t),e}return r(e,{direction:v,location:n,seek:function(t){d.set(t).subtract(n);var r,o=d.magnitude(),a=i.map(o,0,100,0,p.speed);return v.set(d),d.normalize().multiply(a).subtract(l).limit(s),(r=d).divide(c),f.add(r),e},settle:function(t){var e=t.get()-n.get(),r=!(Math.round(100*e)/100);return r&&n.set(t),r},update:function(){return l.add(f),n.add(l),f.multiply(0),e},useDefaultSpeed:function(){return g(u)},useSpeed:g})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=n(0);e.Pointer=function(t){var e={x:"clientX",y:"clientY"},n=i.Vector1D(0),a=i.Vector1D(0),u=i.Vector1D(0),c=o.Direction(0),s=i.Vector1D(0),l=10,f={isDown:!1,isMouse:!1,trackPoints:[],trackTime:(new Date).getTime()};function d(t,n){var r=f.isMouse,o=e[n],i=r?t[o]:t.touches[0][o];return s.setNumber(i)}return r({},{direction:c,down:function(e){f.isMouse=!!e.type.match(/mouse/);var r=d(e,"x");return n.set(r),u.set(r),f.isDown=!0,t.measure(n.get())},isDown:function(){return f.isDown},move:function(e){var n=d(e,"x"),r=(new Date).getTime();return r-f.trackTime>=l&&(f.trackPoints.push(n.get()),f.trackTime=r),a.set(n).subtract(u),c.set(a),u.set(n),t.measure(a.get())},read:d,up:function(){var e=u.get(),n=f.isMouse?5:4;return u.setNumber(f.trackPoints.slice(-n).map(function(t){return e-t}).sort(function(t,e){return Math.abs(t)<Math.abs(e)?1:-1})[0]||0),f.isDown=!1,f.trackPoints=[],t.measure(u.get())}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2);e.TargetFinder=function(t){var e=t.location,n=t.diffDistances,i=t.loop;function a(e,r){var o=t.index.clone(),i=-1===r?0:-1;return function t(a){var u=o.get(),c=o.clone().add(i),s=n[c.get()],l=a*r;return o.add(-1*r),e({distance:a,index:u})?{index:u,distance:l}:t(a+s)}(0)}return r({},{byDistance:function(t,n){var r=e.get()+n-t,i=o.Direction(r).get();return a(function(t){return function(e){return e.distance>=t}}(Math.abs(r)),i)},byIndex:function(e,n){var r=t.index,o=function(t){return function(e){return e.index===t}}(r.clone().set(e).get());if(!i||r.max<=1)return a(o,n);var u=a(o,-1).distance,c=a(o,1).distance;return{index:e,distance:Math.abs(u)>Math.abs(c)?c:u}}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.Translate=function(t){var e={},n={translateType:"x"},o={x:function(t){return"translateX(".concat(t,"%)")},x3d:function(t){return"translate3d(".concat(t,"%,0px,0px)")}};function i(t){return n.translateType!==t&&(n.translateType=t),e}return r(e,{to:function(r){var i=n.translateType,a=r.get();return t.style.transform=o[i](a),e},use3d:function(){return i("x3d")},useDefault:function(){return i("x")}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2);e.Traveller=function(t){var e={},n=t.index,i=t.findTarget,a=t.animation,u=t.moverTarget;function c(r){var o=t.events;return a.start(),u.addNumber(r.distance),n.set(r.index),o.dispatch("select"),e}function s(t,r){var a=n.get()-t.get();if(a){var u=r||o.Direction(a).get();c(i.byIndex(t.get(),u))}return e}return r(e,{toDistance:function(t,n){return c(i.byDistance(t,n)),e},toIndex:function(t){return s(n.clone().set(t),0),e},toNext:function(){return s(n.clone().add(1),-1),e},toPrevious:function(){return s(n.clone().add(-1),1),e}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.VectorBounds=function(t){var e={},n=t.limit,o=t.location,i=t.mover,a=t.animation,u=t.tolerance,c={timeout:0};return r(e,{constrain:function(t){if(!c.timeout&&function(t){var e=o.get(),r=t.get()===n.low,i=t.get()===n.high;return n.reached.low(e)&&!r||n.reached.high(e)&&!i}(t)){var r=n.constrain(t.get());c.timeout=window.setTimeout(function(){t.setNumber(r),i.useSpeed(10),a.start(),c.timeout=0},u)}return e}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.VectorLooper=function(t){var e={},n=t.limit,o=t.location,i=t.span,a=t.vectors;return r(e,{loop:function(t){if(function(t){var e=n.reached,r=e.low,i=e.high;return 0!==t&&(-1===t?r:i)(o.get())}(t)){var r=i*(-1*t);a.forEach(function(t){return t.addNumber(r)})}return e}})}},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.EventDispatcher=function(){var t={},e={destroy:[],dragEnd:[],dragStart:[],init:[],select:[]};return r(t,{dispatch:function(n){return e[n].forEach(function(t){return t()}),t},off:function(n,r){var o=e[n];return e[n]=o.filter(function(t){return t!==r}),t},on:function(n,r){var o=e[n];return e[n]=o.concat([r]),t}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.defaultOptions=Object.freeze({align:"center",containerSelector:"*",selectedClass:"is-selected",draggableClass:"is-draggable",draggingClass:"is-dragging",draggable:!0,loop:!1,speed:10,startIndex:0})}])});