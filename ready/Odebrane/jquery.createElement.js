!function(a){a.createElement=function(b,c){var d,e,f,g,h,i,j,k;if(c&&(f=c.childNodes,f&&delete c.childNodes,(e=c.ownerDocument)&&delete c.ownerDocument),e=e||document,"iframe"===b&&c.name&&jQuery.browser.msie&&jQuery.browser.version<8&&(b='<iframe name="'+c.name.replace(/\"/g,"&quot;")+'">'),d=e.createElement(b),c){if("object"==typeof c.style){j=c.style,k=d.style;for(i in j)j.hasOwnProperty(i)&&(k[i]=j[i]);delete c.style}for(i in c)c.hasOwnProperty(i)&&void 0!==c[i]&&(d[i]=c[i])}if(f)for(a.isArray(f)||(f=[f]),i=0,h=f.length;i<h;i++)g=f[i],"string"==typeof g?d.appendChild(e.createTextNode(g)):d.appendChild(g);return d},a.ce=a.createElement}(jQuery);