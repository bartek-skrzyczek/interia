//default config - if [wp_sn].js not found

//try to load window.prebidConfig.hb again
function retryPrebid(){
var devpoints=0;
if ((WP.performance)&&(WP.performance.getDevicePerformance)){
    devpoints=Math.round(WP.performance.getDevicePerformance().points);
}
if (window.prebidConfig){
   
    WP.stat.show("prebiddefault", {
                    "bunch": window.rekid,
                    "wpsn": window.wp_sn,
                    "performance": devpoints
    }, "yes");    

  window.prebidAPI.applyConfig(window.prebidConfig.hb,window.prebidConfig.rta);
} else {
  
    WP.stat.show("prebiddefault", {
                    "bunch": window.rekid,
                    "wpsn": window.wp_sn,
                    "performance": devpoints
    }, "no");  
    
    
}
}

setTimeout(retryPrebid,500);