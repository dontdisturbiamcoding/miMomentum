chrome.runtime.onInstalled.addListener(function (e) {
    e &&
      e.reason &&
      "install" === e.reason &&
      chrome.tabs.create({ url: "index.html" });
  })
  function openTab() {
    chrome.tabs.create({ url: "index.html" });

  }

  //   chrome.tabs.onCreated.addListener(
//             function () {
//             chrome.tabs.create({ url: "index.html" });
//             }); 
// Con esta función de arriba, he conseguido petar chrome. Ha entrado un bucle infinito de abrir pestañas que no me 
// permitía ni deshabilitar la extensión ni acceder a configuración. Ver foto mensaje para Chrome para ver revisar 
// el porqué he desinstalado Chrome
