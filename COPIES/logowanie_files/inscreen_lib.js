(function() {'use strict';var ca=window,ha=document,u=[ca,ha,!0,!1,"prototype","undefined",null,"function"];function E(){return(new Date).getTime()};var ia=function(b){return{Aa:function(g,q){(b._gdeaq=b._gdeaq||[]).push(["analytics",g,q])}}}.apply(this,u);var ja=function(b,g,q,s,k,p,h){function n(b){this.ka=[];this.ia=[];this.fb=b}n[k].tb=function(b){function f(a){l.X.call(l,a)}function a(a){return function(d){h--;k[a]=d;c()}}function c(){h||l.V()||l.N.call(l,k)}for(var l=this,d=b.length,h=d,k=Array(d),g=0;g<d;g++)b[g].gb(a(g)).Pa(f);c();return l};n[k].gb=function(b){this.ga()?b.apply(h,this.Y):this.ka.push(b);return this};n[k].Pa=function(b){this.V()?b.apply(h,this.ja):this.ia.push(b)};n[k].hb=function(b){this.ga()?b.apply(h,this.Y):this.V()?b.apply(h,
this.ja):(this.ka.push(b),this.ia.push(b));return this};n[k].sa=function(b,f){for(var a=f.length,c=0;c<a;c++)f[c].apply(h,b)};n[k].N=function(){if(this.wa())return this;var b=this.Y=arguments;this.sa(b,this.ka);return this};n[k].X=function(){if(this.wa())return this;var b=this.ja=arguments;this.sa(b,this.ia);return this};n[k].ga=function(){return typeof this.Y!==p};n[k].V=function(){return typeof this.ja!==p};n[k].wa=function(){return this.fb&&(this.ga()||this.V())};n[k].kb=function(){return this.Y};
n.N=function(b){return(new n).N(b)};n.X=function(b){return(new n).X(b)};return n}.apply(this,u);var S=function(b,g,q,s,k,p,h){function n(){}b=Array[k];g=Object[k];var m=b.slice,f=g.toString,a=g.hasOwnProperty,c=b.forEach,l=b.map,d=b.reduce,ka=b.filter,la=b.every;b=Array.isArray;g=Object.keys;var G=Function[k].bind,t,y={},z,r,C,N;z=function(a,b){if(a.d===G&&G)return G.apply(a,m.call(arguments,1));var d=m.call(arguments,2);return function(){return a.apply(b,d.concat(m.call(arguments)))}};C=function(b,d){return a.call(b,d)};r=function(a,b,d){if(a!=h)if(c&&a.forEach===c)a.forEach(b,d);else if(a.length===
+a.length)for(var f=0,l=a.length;f<l&&b.call(d,a[f],f,a)!==y;f++);else for(f in a)if(C(a,f)&&b.call(d,a[f],f,a)===y)break};g=g||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],d;for(d in a)C(a,d)&&b.push(d);return b};t=function(a){return a};b=b||function(a){return"[object Array]"==f.call(a)};N=function(a,b,d){d||(d=t);for(var c=0,f=a.length;c<f;){var l=c+f>>1;d(a[l])<d(b)?c=l+1:f=l}return c};n[k]={d:z,Ga:function(a,b){function d(){g=new Date;l=h;k=a.apply(c,f)}var c,f,
l,k,g=0;return function(){var r=new Date,m=b-(r-g);c=this;f=arguments;0>=m?(clearTimeout(l),l=h,g=r,k=a.apply(c,f)):l||(l=setTimeout(d,m));return k}},z:function(a,b){var d=m.call(arguments,2);return setTimeout(function(){return a.apply(h,d)},b)},b:r,filter:function(a,b,d){var c=[];if(a==h)return c;if(ka&&a.filter===ka)return a.filter(b,d);r(a,function(a,f,l){b.call(d,a,f,l)&&(c[c.length]=a)});return c},Xa:g,has:C,every:function(a,b,d){b||(b=t);var c=q;if(null==a)return c;if(la&&a.every===la)return a.every(b,
d);r(a,function(a,f,l){if(!(c=c&&b.call(d,a,f,l)))return y});return!!c},map:function(a,b,d){var c=[];if(null==a)return c;if(l&&a.map===l)return a.map(b,d);r(a,function(a,f,l){c[c.length]=b.call(d,a,f,l)});return c},reduce:function(a,b,c,f){var l=2<arguments.length;null==a&&(a=[]);if(d&&a.reduce===d)return f&&(b=z(b,f)),l?a.reduce(b,c):a.reduce(b);r(a,function(a,d,h){l?c=b.call(f,c,a,d,h):(c=a,l=q)});if(!l)throw new TypeError("No initial");return c},mb:function(a,b){return function(){var d=a.apply(this,
arguments);b.apply(null,[d].concat(arguments));return d}},isArray:b,indexOf:function(a,b,d){if(null==a)return-1;var c=0,f=a.length;if(d)if("number"==typeof d)c=0>d?Math.max(0,f+d):d;else return c=N(a,b),a[c]===b?c:-1;for(;c<f;c++)if(a[c]===b)return c;return-1},object:function(a){for(var b={},d=0,c=a&&a.length;d<c;d+=2)b[a[d]]=a[d+1];return b}};return n}.apply(this,u);var xa=function(b,g,q,s,k,p){function h(a,f){this.frameElement=a;this.frames=[];this.$=f;h.fa()?this.eb():h.xa()?(this.Ba(5),setInterval(n.d(this.Ka,this),m)):(this.Ba(30),b.requestAnimationFrame(n.d(this.oa,this)),setInterval(n.d(this.ha,this),1E3),setInterval(n.d(this.aa,this),m));c&&ia.Aa("pc_cr",h.M()?"t":"f")}var n=new S,m=1E3/30,f=/Safari\/([\d.]+)/.exec(b.navigator.userAgent),f=f&&parseFloat(f[1]),a=0<Object.prototype.toString.call(b.HTMLElement).indexOf("Constructor")||"[object SafariRemoteNotification]"===
(!b.safari||b.safari.rb||!0).toString()||602<f,c=typeof b.chrome!==p,l=/(?:Chrome|Chromium)\/([\d.]+)/.exec(b.navigator.userAgent),l=l&&parseFloat(l[1]);h.M=function(){return h.xa()||h.fa()||typeof b.requestAnimationFrame!==p&&typeof Date.now!==p&&(a&&601<=f||c&&52<=l)};h.fa=function(){return typeof b.IntersectionObserver!==p};h.xa=function(){return typeof b.mozPaintCount!==p};h.prototype.eb=function(){g.body.style.margin=0;g.body.style.width="100%";g.body.style.height="100%";g.body.style.top="0";
g.body.style.left="0";g.body.style.position="fixed";this.ab=new b.IntersectionObserver(n.d(function(a){this.Da(n.every(a,function(a){return 0<a.intersectionRatio}))},this),{threshold:1});this.ab.observe(g.body)};h.prototype.Ka=function(){var a=b.mozPaintCount;a!==this.Ya&&10<a&&this.ha();this.aa();g.body.style.width=50*Math.random()+"px";this.Ya=b.mozPaintCount};h.prototype.oa=function(){this.ha();this.aa();b.requestAnimationFrame(n.d(this.oa,this))};h.prototype.ha=function(){this.frames.push(E())};
h.prototype.Ta=function(){var a=E()-1E3;this.frames=this.frames.filter(function(b){return b>a});return this.frames.length};h.prototype.Ba=function(a){this.Oa=a};h.prototype.Sa=function(){return E()-(0<this.frames.length?this.frames[0]:E())};h.prototype.aa=function(){this.Da(this.Ta()>this.Oa)};h.prototype.Da=function(a){a!==this.Za&&this.$(a,this.Sa());this.Za=a};return h}.apply(this,u);var V=function(b,g,q,s,k,p,h,n){function m(){this.addEventListener(["beforeunload","unload"],function(){this.Wa=!0},b,this)}var f=new S;m.t=h;m[k].Va={display:"none",visibility:"hidden",opacity:"0",width:"0px",height:"0px",pointerEvents:"none"};m.B=function(){m.t===h&&(m.t=new m);return m.t};m[k].jb=function(a){return a.getElementsByTagName("body")[0]};m[k].lb=function(a){f.b(this.Va,function(b,f){try{a.style[f]=b}catch(d){}})};m[k].nb=function(a,b,l){l=l||g;var d=new ja(!0),h=l.createElement("script");
h.onload=f.d(d.N,d,h);h.onerror=f.d(d.X,d,h);h.onreadystatechange=function(){"loaded"!==this.readyState&&"complete"!==this.readyState&&"completed"!==this.readyState||d.N(h)};h.type="text/javascript";h.src=a;h.async=!0;b&&f.b(b,function(a,b){h.setAttribute(b,a)});(a=l.getElementsByTagName("script")[0])?a.parentNode.insertBefore(h,a):l.head.appendChild(h);return d};m[k].addEventListener=function(a,c,l,d,h,k){d=d||this;if({array:q,object:q}[typeof a])return f.filter(a,function(a){this.addEventListener(a,
c,l,d,h,k)},this);l||(l=b);var g;g=k?f.d(function(){if(!this.Wa)return c.apply(d,arguments)},this):f.d(c,d);l.addEventListener?l.addEventListener(a,g,h||s):l.attachEvent&&l.attachEvent("on"+a,g);return g};m[k].Na=function(a){var c;c||(c=b);c.removeEventListener?c.removeEventListener("unload",a,s):c.detachEvent?c.detachEvent("onunload",a):c.onunload=h};m[k].ua=function(a){if(!a)return{top:0,left:0};var c={top:0,left:0};typeof a.getBoundingClientRect!==p&&(c=a.getBoundingClientRect());a=g.documentElement;
return{top:c.top+(b.pageYOffset||a.scrollTop)-a.clientTop,left:c.left+(b.pageXOffset||a.scrollLeft)-a.clientLeft}};m[k].Ua=function(){return"CSS1Compat"!==g.compatMode?{width:g.body.clientWidth,height:g.body.clientHeight}:{width:g.documentElement.clientWidth,height:g.documentElement.clientHeight}};m[k].sb=function(a){if(typeof g.querySelectorAll===p){for(var b=[],f=0;f<g.all.length;f++)0<=g.all[f].className.indexOf(a)&&b.push(g.all[f]);return b}return g.querySelectorAll("."+a)};m[k].qb=function(a,
b){return typeof a.hasAttribute===n?a.hasAttribute(b):typeof a.getAttribute(b)!==p};m[k].j=function(a,b){if(!a||!b||a===b)return a&&a===b;do if(a===b)return q;while((a=a.parentNode)!==h);return s};m[k].va=function(){return{left:void 0!==b.pageXOffset?b.pageXOffset:(g.documentElement||g.body.parentNode||g.body).scrollLeft,top:void 0!==b.pageYOffset?b.pageYOffset:(g.documentElement||g.body.parentNode||g.body).scrollTop}};m[k].K=function(){return"function"===typeof b.navigator.sendBeacon&&!0};return m}.apply(this,
u);var za=function(b,g,q,s,k,p,h){var n=new S,m=V.B();return function(b,a){var c,l,d,k,p,s,t,y,z={6:1,4:2,5:3};k=function(a){return l(function(b,d){if(0===b)return p(a+d);if(7===b)return t(a)})};p=function(c){return d(function(d,h){if(5===d)return a.Z(b.c+a.W(b,{dlw:"0",dlw_d:c+h})),s(0);if(1===d||3===d)return k(c+h)},b.G)};s=function(c){a.qa(b,7);m.K()||b.setEnd("dwell",b.c+a.W(b,{dlw:z[4],dlw_t:a.ca(b),dlw_t_t:E()},q));return d(function(a,d){b.ra=c+d;if(1===a||3===a)return t(c+d);if(5===a)return y(0,
6);if(4===a&&m.K())return y(0,4)},b.I-c)};t=function(c){m.K()||b.setEnd("dwell",b.c+a.W(b,{dlw:z[4],dlw_t:a.ca(b)},q));return d(function(a){if(0===a)return b.w("dwell"),s(c);if(5===a||9===a||4===a&&m.K())return b.w("dwell"),y(0,a)},b.H)};y=function(d,c){9!==c&&(a.qa(b,9),0<z[c]&&a.Z(b.c+a.W(b,{dlw:z[c],dlw_t:a.ca(b)})));return l(function(){})};c=function(){var a,b=E(),f;l=function(a){f&&(clearTimeout(f),f=h);return a};d=function(b,d){f&&clearTimeout(f);f=n.z(function(){a===b&&(c(5),f=h)},d);return b};
a=k(0);return function(d){(d=a(d,E()-b))&&d!==a&&(a=d,b=E())}}();a.Ea.push(function(){c(3)});a.Ha.push(function(){c(4)});m.addEventListener(["mousemove","mouseenter","mouseover"],function(){c(0)},b.a);m.addEventListener(["mouseleave","mouseout"],function(){c(1)},b.a);m.addEventListener("mousewheel",function(a){var d=m.va(),h=a.clientX-d.left,l=a.clientY-d.top;n.z(function(){d=m.va();var a=g.elementFromPoint(h+d.left,l+d.top);m.j(a,b.a)?c(0):c(1)},0)},g);a.Ma(b,c)}}.apply(this,u);var Aa=function(b,g,q,s,k,p,h){function n(){}n.t=h;n.B=function(){n.t===h&&(n.t=new n);return n.t};n[k].M=function(){return xa.fa()&&V.B().K()&&!0};n[k].$a=function(){if(!this.M()||!b._gdeaq)return s;var h;b._gdeaq.push(["viewable-init",function(b){h=b}]);if(!h)return s;b._gdeaq.push(["define",function(){return h}]);return q};return n}.apply(this,u);var Ba=function(b,g,q,s,k,p){function h(b,a){this.Q=b;this.Z=a;this.v=[];this.ba=0}var n=new S,m=V.B();h.L=function(b){var a=g.querySelector(b||"body");m.addEventListener("mouseup",function(b){b=h.ta(b,a);parent.postMessage("gde.heatmap:"+b.x+":"+b.y,"*")},a,this,q)};h[k].bb=function(f,a){m.addEventListener("mouseup",function(b){this.La(b);a()},f,this,q);var c=f.querySelector("iframe");c&&m.addEventListener("message",function(b){c.contentWindow===b.source&&b.data&&"string"===typeof b.data&&0===b.data.indexOf("gde.heatmap:")&&
(b=b.data.split("gde.heatmap:")[1],"string"===typeof b&&b.match(/^(\d+):(\d+)$/)&&(b=b.split(":"),this.click(parseInt(b[0]),parseInt(b[1])),a()))},b,this)};h[k].La=function(b){b=h.ta(b,this.Q.a);this.click(b.x,b.y)};h.ta=function(b,a){var c=m.ua(a),h=typeof b.pageX===p;return{x:(h?b.clientX:b.pageX)-c.left,y:(h?b.clientY:b.pageY)-c.top}};h[k].click=function(b,a){this.ba<h.na&&(this.v.push([b,a]),this.ba++,this.Ca())};h[k].Ja=function(f){f=f||"";if(0<this.v.length){var a=f.length+10,c=[],k=[];this.v=
n.filter(this.v,function(b){a+=6+b.join("").length;if(a<=h.ma)c.push(Math.min(Math.max(0,b[0]),65535)>>0),k.push(Math.min(Math.max(0,b[1]),65535)>>0);else return q});0<c.length&&k.length===c.length&&(f+=b.encodeURIComponent((f?"|":"")+"hx="+c.join(",")+"|hy="+k.join(",")+(this.ba>=h.na?"|hn=1":"")+(a>h.ma?"|hl=1":"")))}return f};h[k].pa=function(){this.la&&(clearTimeout(this.la),delete this.la)};h[k].Ca=function(){this.pa();this.v.length&&(this.la=setTimeout(n.d(this.Qa,this),h.Ia))};h[k].Qa=function(){this.pa();
this.za();0<this.v.length&&this.Ca()};h[k].za=function(){0<this.v.length&&this.Z()};h.ma=1024;h.na=200;h.Ia=1E4;return h}.apply(this,u);(function(b,g,q,s,k,p,h,n,m,f){if(!Aa.B().$a()){var a=new S,c=V.B(),l=function(){return g._gdeaq||(g._gdeaq=[])};typeof _gao_inscdwl_cfg===p&&(g._gao_inscdwl_cfg=function(a){function b(a,d){return typeof a!==p?a:d}typeof _gde_insdwl_cfg===p&&(g._gde_insdwl_cfg=[]);typeof a.e!==p&&typeof a.c!==p&&_gde_insdwl_cfg.push({id:a.id,e:a.e,c:a.c,k:b(a.k,1E3),i:b(a.i,3E4),p:b(a.p,72E5),s:a.s,f:b(a.f,.5),o:a.o,n:a.n,G:b(a.G,1E3),I:b(a.I,18E5),H:b(a.H,72E5)})});typeof g._gao_insdwl===p?g._gao_insdwl=new function(d){function h(e,
v){if(!e.frames[v]||!e.frames[v].parentNode){var f=b.createElement("iframe");f.ob="0";f.pb="0";f.ib="0";var k=R(e),g=Math.random()+"";ba?(c.addEventListener("load",function(){f.contentWindow.postMessage("frameKey:"+g,k);f.contentWindow.postMessage("frameFg:"+e.s,k)},f),f.src=k+"/gdejs/poly.html"):(c.addEventListener("load",function(){f.contentWindow.postMessage("paintCount:"+g,k)},f),f.src=k+"/gdejs/xgde.html");a.b({position:"absolute",border:"none",opacity:"0.0001",filter:"alpha(opacity=0)",pointerEvents:"none",
width:"1px",height:"1px",visibility:"hidden",display:"none"},function(e,a){f.style[a]=e});c.addEventListener("message",function(a){a.origin===k&&a.data&&(a=a.data.split(":"),"mozFrameVisible"===a[0]&&a[1]===g?(f.mozFrameVisible="true"===a[2],a=parseInt(a[3]),0<a?(f.mozFrameMeasureDelay=a,ia.Aa("isn_md",a)):delete f.mozFrameMeasureDelay,T()):"mozFrameReady"===a[0]&&a[1]===g?"true"===a[2]?(f.S=0,e.T=!1):"false"===a[2]?e.T=!0:(f.S=E()+1E3,f.A=0):"IE8"===a[0]&&a[1]===g&&(f.style.width="5px",f.style.height=
"5px"))},d);var l=b.getElementsByTagName("body")[0];l&&(l.appendChild(f),e.frames[v]=f)}return e.frames[v]}function g(a){function b(){}if(!C(a))return function(a){a(q)};if(.5===a.f)return G(a,a.f);G(a,a.f)(function(d,c){.5>a.f&&d?b(s,c):.5<a.f&&!d?b(q,c):G(a,1-a.f)(function(a,e){b(a,e)})});return function(a){b=a}}function G(a,b){function d(){}var c=h(a,b);if(typeof c.S===p)return function(a){a(!1)};E()>c.S?(c.style.top=a.offset().top+Math.floor(a.l()*b)+"px",c.style.left=a.offset().left+(a.m()>>1)+
"px"):(c.style.top="-"+a.l()+"px",c.style.left="-"+a.m()+"px");c.style.visibility="visible";c.style.display="block";setTimeout(function(){if(E()<c.S)c.A=c.mozFrameVisible?c.A-1:c.A+1,d(!1);else{if(typeof c.A!==p)try{if(0>c.A){a.T=!0;d(!1);return}}finally{c.A=void 0,c.contentWindow.postMessage("setPaintCountSupported:"+!a.T,R(a))}d(c.mozFrameVisible,c.mozFrameMeasureDelay)}});return function(a){d=a}}function t(e,b){b=b||0;e.C||(e.D?W(e):e.O||(e.O=a.z(function(){e.D=s;W(e)},e.k-b)))}function y(a,d){!a.D&&
a.O?(clearTimeout(a.O),a.O=k):a.D&&a.C?W(a,d):c.j(a.a,b)?a.u(O()?2:3):(a.db(),c.j(a.a,b)||X(a))}function z(){b[J]?Y():K()}var r={},C,N,H,ma,na,ya=d.encodeURIComponent,Q,aa,ba,I,oa,R;r.Ea=[];r.Ha=[];var Y,Z,pa,T,K,W,X,$,L,F,M,O,x,da,ea,w,fa,qa,ra,D,ga,sa,ta,ua=0,B=[],U;I=d.navigator.userAgent;var Ca=0<Object.prototype.toString.call(d.HTMLElement).indexOf("Constructor"),Da=!!d.opera||0<=I.indexOf(" OPR/"),Ea=0<I.indexOf(" Edge/")||"Mozilla/5.0 (Windows NT 10.0; Win64; x64)"===I,Fa=/(iPad|iPhone|iPod|Mac )/g.test(I);
new function(a,b,c){U=d[a]&&d[a][b]&&d[a][b][c]?d[a][b][c]:E()}("performance","timing","navigationStart");r.q=r.init=r.L=function(){var e=d._gde_insdwl_id,h=d._gde_inscreen,g=d._gde_inscreen_end,m=d._gde_insdwl_tm,n=d._gde_inscreen_fg,A=d._gde_insdwl_th,y=d._gde_dwell||{},z=d._gde_dwell_end||{},t=d._gde_insdwl_dwltm;typeof _gde_insdwl_id!==p&&a.b(_gde_insdwl_id,function(a,b){_gao_inscdwl_cfg({id:e[b],e:h[b],c:g[b],k:m&&(m[b]||[])[0],i:m&&(m[b]||[])[1],p:m&&(m[b]||[])[2],s:n&&n[b],f:A&&A[b],o:y[b],
n:z[b],G:t&&(t[b]||[])[0],I:t&&(t[b]||[])[1],H:t&&(t[b]||[])[2]});_gde_insdwl_id[b]=void 0});typeof _gde_inscreen_dwell!==p&&a.b(_gde_inscreen_dwell,function(a,e){_gao_inscdwl_cfg({id:function(){var a=b.getElementById(e),c=a;if(a)return a=a.parentNode,a.removeChild(c),a},e:a,c:a,k:m&&(m[e]||[])[0],i:m&&(m[e]||[])[1],p:m&&(m[e]||[])[2],s:n&&n[e],f:A&&A[e],o:a,n:a});_gde_inscreen_dwell[e]=void 0});typeof _gde_insdwl_cfg!==p&&(ua++,_gde_insdwl_cfg=a.filter(_gde_insdwl_cfg,function(e){function d(){return"function"===
typeof e.id?e.id():"string"===typeof e.id?b.getElementById(e.id):e.id}function h(a){for(;a&&a.parentNode;)a=a.parentNode;return a}var v=d();if(!v)return s;if(typeof a.filter(B,function(a){if((a.a===v||c.j(v,a.a)||c.j(a.a,v))&&Q(a.e,e.e)&&Q(a.c,e.c)&&Q(a.o,e.o)&&Q(a.n,e.n))return s})[0]!==p)return q;var g={a:v,parentNode:h(v),db:function(){this.a=v=d();this.parentNode=h(v)},frames:{},J:[],u:function(a,b,e){var c=this.J[this.J.length-1];c&&c.state===a||this.J.push({Fa:e||E(),state:a,visible:b,Ra:O()})},
C:0,h:0,e:e.e||"",c:e.c||"",s:e.s,F:ta(e),k:e.k,i:e.i,p:e.p,f:e.f,r:q,g:q,o:e.o||"",n:e.n||"",G:e.G,I:e.I,H:e.H,offset:function(){return this.da()[2]},m:function(){return this.da()[0]},l:function(){return this.da()[1]},da:function(){var a=[],b=20;return function(){20<=b++&&(a[0]=this.a?this.a.offsetWidth:0,a[1]=this.a?this.a.offsetHeight:0,a[2]=c.ua(this.a),b=0);return a}}(),R:{},setEnd:function(a,b){this.w(a);l().push(["onEnd",b]);this.R[a]=b},w:function(b){a.b(w(this),function(a){a.ya(b)});this.ya(b)},
ya:function(a){this.R[a]&&(l().push(["removeEnd",this.R[a]]),this.R[a]=k)}};if(!R(g))return q;g.ea=new Ba(g,a.d(function(){F(this.c+x(this))},g));N()&&!C(g)?g.u(1,q,U):g.u(O()?2:3,q,U);g.ea.bb(v,function(){!g.r&&$(g)&&(fa(g),F(g.e+x(g,{isn:"4",isn_d:E()-U})),g.r=s,g.D=s,g.setEnd(f,g.c+x(g,{isn:"2",isn_t:0},s)))});B.push(g);if(v.parentNode){do(v.scrollWidth>v.offsetWidth||v.scrollHeight>v.offsetHeight)&&c.addEventListener("scroll",K,v,r);while((v=v.parentNode)!==k)}g.o&&g.n&&za(g,r);oa(R(g))}),0<_gde_insdwl_cfg.length&&
30>ua&&a.z(a.d(r.L,r),200),T())};r.debug=function(){};N=function(){return d.self!==d.top};C=function(a){return a.T||l().cb?!1:xa.M()||!(!ba||typeof d.chrome===p&&!a.s)};ba=function(){if(xa.M()||l().cb||Fa||Ea)return q;var a=q;try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(a=s)}catch(b){d.navigator.mimeTypes&&d.navigator.mimeTypes["application/x-shockwave-flash"]&&d.navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(a=s)}return a}();I=function(){d[n]=q;var e,f="FFFFFF",
h;c.addEventListener("message",function(a){if(a.data&&"string"===typeof a.data){var b=a.data.split(":");"frameKey"!==b[0]||e?"frameFg"===b[0]&&(f=b[1])&&f.charAt&&"#"===f.charAt(0)&&(f=f.substr(1)):(h=a.origin,e=b[1],typeof IE8!==p&&parent.postMessage("IE8:"+e,h),parent.postMessage("mozFrameReady:"+e,h))}},d);var g,l=d.setMozFrameVisible=function(a){parent.postMessage("mozFrameVisible:"+e+":"+a,h)};d.getFg=function(){return f};var A,r,t={allowScriptAccess:"always",quality:"high",scale:"noscale",salign:"lt"},
y={padding:"0",margin:"0",width:"100%",height:"100%",pointerEvents:"none",overflow:"hidden"};t.wmode=d.isIE||typeof d.chrome===p||Da?"direct":"transparent";if(Ca){t.wmode="transparent";var z=a.Ga(function(){var a=A.parentNode;A.parentNode.removeChild(A);a.appendChild(A)},250),x;d.setMozFrameVisible=function(a){a?(g&&(g=clearTimeout(g)),x&&(x=clearTimeout(x)),l(s),x=setTimeout(function(){z();g=setTimeout(function(){l(q);g=k},500);x=k},500)):l(q)}}if(d.isIE){t.movie=m;var w="";r=function(a,b){w+='<param name="'+
b+'" value="'+a+'" />'};w+='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" data="'+m+'" type="application/x-shockwave-flash">';a.b(t,r);w+="</object>";b.write(w);A=b.getElementsByTagName("object")[0]}else t.movie=m,r=function(a,e){var c=b.createElement("param");c.setAttribute("name",e);c.setAttribute("value",a);A.appendChild(c)},A=b.createElement("object"),a.b(t,r);a.b({position:"absolute",left:"0px",top:"0px",right:"0px",bottom:"0px",width:"1px",height:"1px"},function(a,b){A.style[b]=
a});c.addEventListener("load",function(){var e=b.getElementsByTagName("body")[0];e&&(a.b(y,function(a,b){e.style[b]=a}),d.isIE||e.appendChild(A))})};W=function(e,d){d=d||0;0!==e.C?(e.h+=E()-e.C-d,e.h=ga(e),e.C=0,e.h>=e.i&&!D(e)&&L(e)&&(e.w(f),F(e.c+x(e,{isn:"1",isn_t:e.i}))),D(e,e.g)||e.setEnd(f,e.c+x(e,{isn:"2",isn_t:e.h},s)),e.P&&(clearTimeout(e.P),e.P=k),D(e,e.g)||(c.j(e.a,b)?e.U=a.z(function(){X(e)},e.p):X(e)),e.u(O()?2:3)):($(e)&&(fa(e),F(e.e+x(e,da(e,{isn:"0",isn_d:E()-U})))),e.C=E(),e.h=ga(e),
e.setEnd(f,e.c+x(e,{isn:"2",isn_t:e.h,isn_t_t:E()},s)),D(e,e.g)||(e.P=a.z(function(){e.P=k;e.h=e.i;L(e)&&(e.w(f),F(e.c+x(e,{isn:"1",isn_t:e.h})))},e.i-e.h)),sa(e),e.u(4,s))};$=function(a){return a.r?q:a.r=s};L=function(a){if(a.g)return q;a.g=s;return ra(a)};X=function(b){D(b,b.g)||(b.U=k,b.r&&L(b)&&(b.w(f),F(b.c+x(b,{isn:"3",isn_t:b.h}))),D(b,b.g)&&a.b([b].concat(w(b)),function(b){B=a.filter(B,function(a){return b!==a})}),B=a.filter(B,function(a){return b!==a}),b.r||0!==w(b).length||ea(b))};w=function(b){return b.F?
a.filter(B,function(a){return a.F===b.F&&a!==b}):[]};fa=function(b){a.map(w(b),function(a){$(a)})};qa=function(b){return a.reduce(w(b),function(a,b){return a||b.r},b.r)};sa=function(b){a.b(w(b).concat([b]),function(a){a.U&&(clearTimeout(a.U),a.U=k)})};ra=function(b){if(D(b))return q;a.b(w(b),L);return s};D=function(b,c){return a.reduce(w(b),function(a,b){return a||b.g},c)};ga=function(b){return a.reduce(w(b),function(a,b){return Math.max(b.h,a)},b.h)};r.ca=function(b){return a.reduce(w(b),function(a,
b){return(b.ra||0)+a},b.ra||0)};ta=function(a){return a.e.split("redot")[1]||a.e};var va=[];r.qa=function(b,c){a.b(va,function(a){a.Q.F===b.F&&a.Q!==b&&a.$(c)})};r.Ma=function(a,b){va.push({Q:a,$:b})};ea=function(b){var c={nisn_t:0,nisninac_t:0,nisnout_t:0,nisnunrec_t:0};b.u(5);a.reduce(b.J,function(a,b){if(!b.visible){var e=b.Fa-a.Fa;c.nisn_t+=e;1===a.state&&(c.nisnunrec_t+=e);if(2===a.state||3===a.state)a.Ra?c.nisnout_t+=e:c.nisninac_t+=e}return b},b.J.splice(0,1)[0]);for(var d in c)0===c[d]&&delete c[d];
F(b.c+x(b,da(b,c)))};Y=function(){M&&(clearInterval(M),M=k);a.b(B,function(a){y(a)});a.b(r.Ea,function(a){a(Y)})};Z=function(){c.Na(pa);a.b(B,function(a){a.D?a.e&&""!==a.e&&!a.g&&L(a):qa(a)||D(a,a.g)||(L(a),ea(a));a.ea.za()});a.b(r.Ha,function(a){a(Z)})};r.Z=F=function(a){0<a.indexOf("[TIMESTAMP]")&&(a=a.split("[TIMESTAMP]").join(E()));l().push(["hit",a])};ma=function(b){var d=b.f,f=Math.floor(b.m()*d),h=Math.floor(b.l()*d);if(!H)return s;if(!b.a)return q;var g=b.a.getBoundingClientRect(),k=a.filter([[5,
g.left+1,g.top+1],[6,g.left+b.m()-1,g.top+1],[10,g.left+b.m()-1,g.top+b.l()-1],[9,g.left+1,g.top+b.l()-1]],function(a){return c.j(H(a[1],a[2]),b.a)});if(3<=k.length)return s;if(2===k.length){if(0<(k[0][0]&4)&&0<(k[1][0]&4))return c.j(H(k[0][1],k[1][2]+h),b.a);if(0<(k[0][0]&8)&&0<(k[1][0]&8))return c.j(H(k[0][1],k[1][2]-h),b.a);if(0<(k[0][0]&1)&&0<(k[1][0]&1))return c.j(H(k[0][1]+f,k[1][2]),b.a);if(0<(k[0][0]&2)&&0<(k[1][0]&2))return c.j(H(k[0][1]-f,k[1][2]),b.a)}if(1>=k.length){f=c.Ua();h=na(g,f);
if(0===k.length&&f.width>g.width&&f.height>g.height)return q;if(h)return g=b.m()*b.l(),k=(h.bottom-h.top)*(h.right-h.left),f=f.width*f.height,k/g>d||k/f>d}return q};na=function(a,b){return{left:Math.min(Math.max(0,a.left),b.width),right:Math.max(0,Math.min(b.width,a.right)),top:Math.min(Math.max(0,a.top),b.height),bottom:Math.max(0,Math.min(b.height,a.bottom))}};T=N()?function(){return function(){M||(M=setInterval(a.d(K,r),500));a.b(B,function(a){a.g||(C(a)?!a.g&&0<a.m()&&0<a.l()&&g(a)(function(b,
c){b?t(a,c):y(a,c)}):a.u(1))})}}():function(){M||(M=setInterval(a.d(K,r),500));a.b(B,function(a){a.g||(O()&&0<a.m()&&0<a.l()&&ma(a,a.offset())?t(a):y(a))})};Q=function(a,b){return aa(a)===aa(b)};aa=function(a){return(a.match(/(id|stparam|w)=([^=^\/^&]+)/g)||[]).join("/")};b.elementFromPoint&&(H=a.d(b.elementFromPoint,b));oa=function(c){if(typeof _gdeaqp===p){var d=b.getElementsByTagName("script");if(!(0<a.filter(d,function(a){if(a.src&&a.src.match(/.hit.gemius.pl\/gdejs\/xgde.js$/))return s}).length)){var f=
b.createElement("script");f.src=c+"/gdejs/xgde.js";c=d[0];c.parentNode.insertBefore(f,c)}}};R=function(a){if(/(http|https)*(:)*\/\/.+\.hit\.gemius\.pl.*/.test(a.e))return a=a.e.split("/"),a[0]+"//"+a[2]};K=a.Ga(T,150);c.addEventListener("scroll",K);c.addEventListener("resize",K);c.addEventListener("beforeunload",Z);pa=c.addEventListener("unload",Z);c.addEventListener("load",r.L,r);d.self===d.top&&c.addEventListener("blur",Y,k,r,q,s);c.addEventListener("focus",T);var J,P=q;typeof b.hidden!==p?(J="hidden",
P="visibilitychange"):typeof b.mozHidden!==p?(J="mozHidden",P="mozvisibilitychange"):typeof b.msHidden!==p?(J="msHidden",P="msvisibilitychange"):typeof b.webkitHidden!==p&&(J="webkitHidden",P="webkitvisibilitychange");P&&(c.addEventListener(P,z,b,r,q,s),z());O=typeof J!==p?function(){return!b[J]}:function(){return s};r.W=x=function(b,c,d){c=c||{};var f=ya(a.map(a.Xa(c),function(a){return a+"="+c[a]}).join("|"));return"&extra="+(d?f:b.ea.Ja(f))};da=function(a,b){typeof b===p&&(b={});1E3!==a.k&&(b.isn_c_a=
a.k);3E4!==a.i&&(b.isn_c_d=a.i);72E5!==a.p&&(b.isn_c_t=a.p);.5!==a.f&&(b.isn_c_v=a.f);b.isn_s_v=1;return b};var wa=E(),Ga=setInterval(function(){if("complete"===b.readyState||"interactive"===b.readyState||1E4<E()-wa)("complete"===b.readyState||1E4<E()-wa)&&clearInterval(Ga),r.L()},250);"complete"!==b.readyState&&"interactive"!==b.readyState||r.L();d[n]&&I();l().push(["define",function(){return r}]);return r}(g):("complete"!==b.readyState&&"interactive"!==b.readyState||_gao_insdwl.q(),l().push(["define",
function(){return _gao_insdwl}]))}}).call(null,ha,ca,!1,!0,null,"undefined",0,"_gde_inscreen_poly","poly.swf","inscreen");})();