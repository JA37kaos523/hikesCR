var serviceWorkerOption = {"assets":["/hiking-app/dist/fonts/674f50d287a8c48dc19ba404d20fe713.eot","/hiking-app/dist/fonts/af7ae505a9eed503f8b8e6982036873e.woff2","/hiking-app/dist/fonts/fee66e712a8a08eef5805a46892932ad.woff","/hiking-app/dist/fonts/b06871f281fee6b241d60582ae9369b9.ttf","/hiking-app/dist/760bd83ee04dff470e0277f3eb7deebe.svg","/hiking-app/dist/76971684dd3ecda4b869a7091aa8f00f.jpg","/hiking-app/dist/main.bundle.js","/hiking-app/dist/main.css"]};
        
        !function(e){function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}var n={};r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r){function n(){var e=[];return function(e){for(var r=0,n=serviceWorkerOption.assets;r<n.length;r++){var t=n[r];e.push(t)}}(e),function(e){var r=self.location.pathname.replace(/\/sw\.js$/g,"");e.push(r),e.push(r+"/"),e.push(r+"/index.html"),e.push(r+"/manifest.json"),e.push(r+"/src/img/esri-10GlobeLogo_1C.png"),e.push(r+"/src/img/background.jpg")}(e),e}self.addEventListener("install",function(e){console.log("install"),e.waitUntil(caches.open("hiking-trails-v6").then(function(e){var r=n();return e.addAll(r)}))}),self.addEventListener("activate",function(e){}),self.addEventListener("fetch",function(e){var r,n=/https:\/\/(server|services)\.arcgisonline\.com\/ArcGIS\/rest\/services\/World_Imagery\/MapServer/i;if(n.test(e.request.url)){var t=e.request.url.replace(n,"https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer");r=new Request(t,e.request)}else r=e.request;e.respondWith(caches.match(r,{ignoreVary:!0}).then(function(e){if(e)return e;var n=r.clone();return fetch(n).then(function(e){if(!e||"opaque"!==e.type&&200!==e.status||"error"===e.type)return e;if(0===r.url.indexOf("chrome-extension:"))return e;var n=e.clone();return caches.open("hiking-trails-v6").then(function(e){e.put(r,n)}),e})}))})}]);