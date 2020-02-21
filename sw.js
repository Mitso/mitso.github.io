importScripts("/precache-manifest.f169daa91ab4c96d46edaeac8788698f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// Global workbox
console.log(workbox);
  if (workbox) {
    // Disable logging
    console.log("Workbox is loaded");
    workbox.precaching.precacheAndRoute(self.__precacheManifest);
  } else {
    console.error("Workbox could not be loaded. No offline support");
  }

