(function () {
  var queuedSuperProps = [];
  var queuedEvents = [];
  window.ub = {
    track: function (eventName, eventProps) {
      queuedEvents.push([eventName, eventProps]);
    },
    register: function (properties) {
      queuedSuperProps.push(properties);
    },
  };
  var script = document.createElement("script");
  script.async = true;
  script.src = "//static.naukimg.com/s/0/1/j/ub_v1.7.min.js";
  script.onload = function () {
    ub.init({
      beaconUrl: "https://logs.naukri.com/uba",
      bulkBeaconUrl: "https://logs.naukri.com/collectorapi/v1/uba/bulk",
      queuedEvents: queuedEvents,
      queuedSuperProps: queuedSuperProps,
      tenantId: "1",
      autoTrack: false,
      blackList: [],
    });
  };
  document.head.appendChild(script);
})();
ub.register({ appId: 103, pageName: "homepage", tenantId: "1" });

//hack of IE and safari bug : Super expression must either be null or a function, not undefined
if (typeof HTMLElement !== "function") {
  var _HTMLElement = function () {};
  _HTMLElement.prototype = HTMLElement.prototype;
  HTMLElement = _HTMLElement;
}


  var _cf = _cf || []; _cf.push(['_setFsp', true]); _cf.push(['_setBm', true]);
  _cf.push(['_setAu', '/resource/9929dab286rn2486ed8d012d78eecfa7']);{" "}
;


        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
     


        window.nLogger &&
            nLogger.init({
                tag: 'revamped_srp',
                nLogger: {
                    beaconUrl: 'https:\/\/lg.naukri.com\/uba',
                    eventName: 'newMonkError',
                    deviceType: 'SERVER'
                },
                boomerang: {
                    logBW: false,
                    beaconUrl: 'https:\/\/lg.naukri.com\/uba',
                    imageURL: '\/\/static.naukimg.com\/s\/0\/0\/i\/',
                    eventName: 'newMonkPerformance',
                    deviceType: 'SERVER'
                },
                tenantId: 1,
                appId: 103,
                userIP: '2045974146'
            });
    

    
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.defer = 'defer';
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-NX744H');
    