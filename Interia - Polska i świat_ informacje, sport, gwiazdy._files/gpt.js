(function(){var window=this;var e=this,g=function(a){return"string"==typeof a},aa=function(){},ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var ca=function(){var a=h,b=k;if(g(a))return g(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},da=function(a,b){for(var c=a.length,d=g(a)?a.split(""):a,f=0;f<c;f++)f in d&&b.call(void 0,d[f],f,a)},ea=function(a){return Array.prototype.concat.apply([],arguments)};var l=function(){this.a="";this.b=fa};l.prototype.s=!0;l.prototype.j=function(){return this.a};var ha=function(a){return a instanceof l&&a.constructor===l&&a.b===fa?a.a:"type_error:TrustedResourceUrl"},fa={},ia=function(a){var b=new l;b.a=a;return b};var r=function(){this.l="";this.A=ja};r.prototype.s=!0;r.prototype.j=function(){return this.l};var ka=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ja={},la=function(a){var b=new r;b.l=a;return b};la("about:blank");var u=function(a){u[" "](a);return a};u[" "]=aa;var ma=/^[\w+/_-]+[=]{0,2}$/;var na=function(){if(!e.crypto)return Math.random();try{var a=new Uint32Array(1);e.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},oa=function(){try{a:{var a=e.document.querySelector("script[nonce]");if(a){var b=a.nonce||a.getAttribute("nonce");if(b&&ma.test(b)){var c=b;break a}}c=void 0}return c}catch(d){}};var v=function(){return e.googletag||(e.googletag={})};var w={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,10:0,13:1500,16:0,17:0,20:0,23:.001,24:200,27:.01,28:0,29:.01,33:"pagead2.googlesyndication.com",34:1,37:.01,38:.001,47:1E-4,53:"",54:0,58:1,60:0,63:0,65:.01,66:1E-5,67:0,68:0,69:.99,71:0,73:0,162:0,163:"",76:"",77:.001,78:0,81:.001,83:1E-4,85:0,89:1,90:0,91:0,96:1,97:0,99:.01,101:0,103:.01,104:"/pagead/js/rum.js",105:0,106:"1-0-14",107:"1-0-14",110:0,113:1,114:0,115:.01,116:.001,117:1,118:.95,123:0,120:.95,124:.95,121:.01,169:.01,122:.01,125:.01,127:.001,129:0,131:"",156:.01,133:0,134:.01,135:0,137:.001,167:1,138:"",143:.001,168:1E-4,144:.001,187:.001,141:1,157:.05,158:.001,150:".google.pl",153:.001,179:.01,170:!1,184:1,183:.01,152:[],171:.01,172:null,175:"21061441,21061442,21061443,21061444,21061445,21061446,21061447,21061461,21061452,21061453,21061454,21061455",178:.01,182:1E3,180:null,186:0};w[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(d){}return!0}(window);w[49]=(new Date).getTime();w[36]=/^true$/.test("false");w[46]=/^true$/.test("false");w[148]=/^true$/.test("false");var x=function(){var a={},b;for(b in w)a[b]=w[b];this.a=a};x.prototype.get=function(a){return this.a[a]};x.prototype.set=function(a,b){this.a[a]=b};x.b=void 0;x.a=function(){return x.b?x.b:x.b=new x};var pa=["21060621","21060622","21060833","21060713"],qa=["21061212","21061213","21061214","21061277"],ra=x.a().a,sa=v(),ta=sa._vars_,ua;for(ua in ta)ra[ua]=ta[ua];sa._vars_=ra;var va=function(){return"172"},wa=v();wa.hasOwnProperty("getVersion")||(wa.getVersion=va);var xa=function(a){this.a=a||e.document||document};xa.prototype.createElement=function(a){return this.a.createElement(String(a))};xa.prototype.appendChild=function(a,b){a.appendChild(b)};var ya=function(){var a=aa;return function(){if(a){var b=a;a=null;b()}}};var za=function(a,b){a.addEventListener?a.addEventListener("message",b,void 0):a.attachEvent&&a.attachEvent("onmessage",b)};var Ba=function(){var a=e;this.b=a=void 0===a?e:a;this.B="https://securepubads.g.doubleclick.net/static/3p_cookie.html";this.a=2;this.g=[];this.o=!1;a:{var b=[e.top];a=[];for(var c=0,d;d=b[c++];){a.push(d);try{if(d.frames)for(var f=d.frames.length,m=0;m<f&&50>b.length;++m)b.push(d.frames[m])}catch(O){}}b:{try{var n=e.parent;if(n&&n!=e){var p=n;break b}}catch(O){}p=null}(f=p)&&a.unshift(f);a.unshift(e);var q;for(f=0;f<a.length;++f)try{var t=a[f],Q=y(t);if(Q){this.a=Aa(Q);if(2!=this.a)break a;var R;if(R=!q){p=void 0;try{if(p=!!t&&null!=t.location.href)c:{try{u(t.foo);p=!0;break c}catch(O){}p=!1}R=p}catch(O){R=!1}}R&&(q=t)}}catch(O){}this.b=q||this.b}},z=function(a){if(2!=Ca(a)){for(var b=1==Ca(a),c=0;c<a.g.length;c++)try{a.g[c](b)}catch(d){}a.g=[]}},Da=function(a){var b=y(a.b);b&&2==a.a&&(a.a=Aa(b))},Ca=function(a){Da(a);return a.a},Fa=function(a){var b=Ea;b.g.push(a);if(2!=b.a)z(b);else if(b.o||(za(b.b,function(a){var c=y(b.b);if(c&&a.source==c&&2==b.a){switch(a.data){case "3p_cookie_yes":b.a=1;break;case "3p_cookie_no":b.a=0}z(b)}}),b.o=!0),y(b.b))z(b);else{a=(new xa(b.b.document)).createElement("IFRAME");a.src=b.B;a.name="detect_3p_cookie";a.style.visibility="hidden";a.style.display="none";a.onload=function(){Da(b);z(b)};try{b.b.document.body.appendChild(a)}catch(c){}}},Ga=function(a,b){try{return!(!a.frames||!a.frames[b])}catch(c){return!1}},y=function(a){return a.frames&&a.frames[u("detect_3p_cookie")]||null},Aa=function(a){return Ga(a,"3p_cookie_yes")?1:Ga(a,"3p_cookie_no")?0:2};var A=null;var Ha=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=e.navigator&&e.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),Ia=function(a,b,c){var d="script";d=void 0===d?"":d;var f=a.createElement("link");f.rel="preload";b instanceof l?b=ha(b):b instanceof r?b=b instanceof r&&b.constructor===r&&b.A===ja?b.l:"type_error:SafeUrl":(b instanceof r||(b=b.s?b.j():String(b),ka.test(b)||(b="about:invalid#zClosurez"),b=la(b)),b=b.j());f.href=b;d&&(f.as=d);c&&(f.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(f)}catch(m){}};var Ja=/^\.google\.(com?\.)?[a-z]{2,3}$/,Ka=/\.(cn|com\.bi|do|sl)$/,La=function(a){return Ja.test(a)&&!Ka.test(a)},Ma=function(a){return a.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"})},B=e,Ea,Na=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(e.location.hostname)];C[3]>=+new Date&&b.push("adsid="+encodeURIComponent(C[1]));return a+"?"+b.join("&")},C,D,E=function(){B=e;C=B.googleToken=B.googleToken||{};var a=+new Date;C[1]&&C[3]>a&&0<C[2]||(C[1]="",C[2]=-1,C[3]=-1,C[4]="",C[6]="");D=B.googleIMState=B.googleIMState||{};La(D[1])||(D[1]=".google.com");"array"==ba(D[5])||(D[5]=[]);"boolean"==typeof D[6]||(D[6]=!1);"array"==ba(D[7])||(D[7]=[]);"number"==typeof D[8]||(D[8]=0)},Oa=function(a){try{a()}catch(b){e.setTimeout(function(){throw b;},0)}},Qa=function(a){"complete"==e.document.readyState||"loaded"==e.document.readyState||e.currentScript&&e.currentScript.async?Pa(3):a()},Ra=0,F={f:function(){return 0<D[8]},m:function(){D[8]++},u:function(){0<D[8]&&D[8]--},v:function(){D[8]=0},c:function(){},w:function(){return!1},i:function(){return D[5]},h:Oa},G={f:function(){return D[6]},m:function(){D[6]=!0},u:function(){D[6]=!1},v:function(){D[6]=!1},c:function(){},w:function(){return".google.com"!=D[1]&&2<++Ra},i:function(){return D[7]},h:function(a){Qa(function(){Oa(a)})}},Pa=function(a){if(1E-5>Math.random()){e.google_image_requests||(e.google_image_requests=[]);var b=e.document.createElement("img");b.src="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a;e.google_image_requests.push(b)}};F.c=function(){if(!F.f()){var a=e.document,b=function(b){var c=Na("js",b),d=oa();Ia(a,c,d);b=a.createElement("script");b.type="text/javascript";d&&(b.nonce=d);b.onerror=function(){return e.processGoogleToken({},2)};c=ia(c);b.src=ha(c);try{(a.head||a.body||a.documentElement).appendChild(b),F.m()}catch(p){}},c=D[1];b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);e.setTimeout(function(){return e.processGoogleToken(d,1)},1E3)}};G.c=function(){if(!G.f()){var a=e.document,b=Na("sync.js",D[1]);Ia(a,b);b=Ma(b);var c=u("script"),d="",f=oa();f&&(d='nonce="'+Ma(f)+'"');var m="<"+c+' src="'+b+'" '+d+"></"+c+">"+("<"+c+" "+d+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Qa(function(){a.write(m);G.m()})}};var Sa=function(a,b){E();var c=B.googleToken[5]||0;a&&(0!=c||C[3]>=+new Date?b.h(a):(b.i().push(a),b.c()));C[3]>=+new Date&&C[2]>=+new Date||b.c()},Ua=function(a){e.processGoogleToken=e.processGoogleToken||function(a,c){return Ta(F,a,c)};Sa(a,F)},Va=function(a){e.processGoogleTokenSync=e.processGoogleTokenSync||function(a,c){return Ta(G,a,c)};Sa(a,G)},Wa=function(a){Ea=Ea||new Ba;Fa(function(b){b&&a()})},Ta=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var d=b.newToken||"",f="NT"==d,m=parseInt(b.freshLifetimeSecs||"",10),n=parseInt(b.validLifetimeSecs||"",10);f&&!n&&(n=3600);var p=b["1p_jar"]||"";b=b.pucrd||"";E();1==c?a.v():a.u();if(!d&&a.w())La(".google.com")&&(D[1]=".google.com"),a.c();else{var q=B.googleToken=B.googleToken||{},t=0==c&&d&&g(d)&&!f&&"number"==typeof m&&0<m&&"number"==typeof n&&0<n&&g(p);f=f&&!a.f()&&(!(C[3]>=+new Date)||"NT"==C[1]);var Q=!(C[3]>=+new Date)&&0!=c;if(t||f||Q)f=+new Date,m=f+1E3*m,n=f+1E3*n,Pa(c),q[5]=c,q[1]=d,q[2]=m,q[3]=n,q[4]=p,q[6]=b,E();if(t||!a.f()){c=a.i();for(d=0;d<c.length;d++)a.h(c[d]);c.length=0}}};var Xa=function(){var a=H;if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(b){var c=a.google_lt_queue=a.google_lt_queue||[];da(b.getEntries(),function(a){return c.push(a)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};u("partner.googleadservices.com");var Ya=u("www.googletagservices.com"),I=!1,Za=function(a){var b=J.createElement("link");b.rel="preconnect";b.href=K+"//"+L;a.appendChild(b)},$a=!1,K="",L="",ab={},bb=(ab["21061282"]="/gpt/pubads_impl_nr_c_",ab["21061283"]="/gpt/pubads_impl_nr_",ab),cb=x.a().get(46)&&!x.a().get(6);K=cb?"http:":"https:";L=x.a().get(cb?2:3);var eb=function(){var a=db.scripts;if(a)for(var b=0;b<a.length;b++){var c=a[b];if(-1<c.src.indexOf(Ya+"/tag/js/gpt"))return c}return null},gb=function(){switch(fb){case "21060833":var a=ya();Wa(a);Ua(a);break;case "21060622":case "21060713":case "21061149":Ua(null)}},M=function(a,b){if(null===A){A="";try{var c="";try{c=e.top.location.hash}catch(f){c=e.location.hash}if(c){var d=c.match(/\bdeid=([\d,]+)/);A=d?d[1]:""}}catch(f){}}if(c=(c=A)&&c.match(new RegExp("\\b("+a.join("|")+")\\b")))a=c[0];else if(b)a:{if(!(1E-4>Math.random())&&(c=Math.random(),c<a.length*b)){c=na();a=a[Math.floor(c*a.length)];break a}a=null}else a=null;return a};var J=void 0,N=v(),H=N.fifWin||window;J=J||H.document;var hb=[],ib=v();ib.hasOwnProperty("cmd")||(ib.cmd=hb);if(N.evalScripts)N.evalScripts();else{switch(M(qa,x.a().get(178))){case "21061213":$a=!0;break;case "21061214":I=!0;break;case "21061277":I=$a=!0}var fb=x.a().get(138)||M(pa,x.a().get(137))||M(["21061149"],x.a().get(167)),db=J,jb=fb,P=M(["21061316","21061317"],0);P&&("21061317"==P?(x.a().set(173,Ya),x.a().set(174,Ya)):x.a().set(163,P),x.a().get(152).push(P));if(jb)try{var kb=x.a().get(150);kb&&(E(),La(kb)&&(D[1]=kb));x.a().set(138,jb)}catch(a){}x.a().set(172,db.currentScript||eb());var lb=H.PerformanceObserver&&H.PerformanceLongTaskTiming&&M(["21061354","21061355"],0);lb&&x.a().get(152).push(lb);"21061355"==lb&&Xa();var mb,S=H;S=void 0===S?e:S;var nb=S.performance;if(mb=nb&&nb.now?nb.now():null){var ob={label:"1",type:9,value:mb},pb,qb=H;pb=qb.google_js_reporting_queue=qb.google_js_reporting_queue||[];1024>pb.length&&pb.push(ob)}var rb;var T=x.a(),U=T.get(76);if(U)rb=U;else{var V=["170","171","172"],sb=V[0]||"172",tb="",W,ub="/gpt/pubads_impl_",vb=!1;if(T.get(131))W="172";else if(1<V.length){var X=["21061512","21061513","21061514"],h=[""];if(1>=h.length||X.length!=h.length)h=[];var k=M(ea(X,h),.05);if(k){T.set(53,k);var wb;wb=0<=ca();T.set(170,wb);wb&&(X=h);if(k==X[0]){var xb=V[X.length-1];tb="?v="+xb;T.set(163,xb)}else for(var yb=1;yb<X.length;++yb)if(k==X[yb]){W=V[yb];break}}else vb=!0}else vb=!0;W=W||sb;if(vb){var zb=M(["21061282","21061283"],0);zb&&(T.get(152).push(zb),W=20171025,ub=bb[zb])}U=K+"//"+L+ub+W+".js"+tb;x.a().set(76,U);rb=U}var Y=rb,Ab=J,Bb=Ab.currentScript;if(!("complete"==Ab.readyState||"loaded"==Ab.readyState||Bb&&Bb.async)){var Cb="gpt-impl-"+Math.random();try{var Db='<script id="'+Cb+'" src="'+Y+'">\x3c/script>';I&&Ha()&&(Db+='<link rel="preconnect" href="'+K+"//"+L+'">');J.write(Db);N._syncTagged_=!0}catch(a){}if(J.getElementById(Cb))switch(N._loadStarted_=!0,fb){case "21060833":var Eb=ya();Wa(Eb);Va(Eb);break;case "21060622":case "21060713":case "21061149":Va(null)}}var Fb=!N._loadStarted_&&!N.fifWin&&M(["21061368","21061369"],0);Fb&&x.a().get(152).push(Fb);if("21061369"===Fb){gb();var Z=J.createElement("iframe");Z.src="javascript:false";Z.style.display="none";Z.width=0;Z.height=0;var Gb=J.head||J.body||J.documentElement;Gb.appendChild(Z);var Hb='<link rel=preload as=script href="'+Y+'">\n<script>googletag=window.parent.googletag;googletag.fifWin=window;\x3c/script>\n<script src="'+Y+'">\x3c/script>',Ib=Z.contentWindow.document;Ib.open();Ib.write(Hb);Ib.close();I&&Ha()&&Za(Gb);N._loadStarted_=!0}else if(!N._loadStarted_){gb();$a&&Ia(J,Y);var Jb=J.createElement("script");Jb.src=Y;Jb.async=!0;var Kb=J.head||J.body||J.documentElement;Kb.appendChild(Jb);I&&Ha()&&Za(Kb);N._loadStarted_=!0}};}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
