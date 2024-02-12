// Prefisso dominio comune per tutti i file
var domainPrefix = "https://andreagarusi.github.io/remedy-extension/";

// Array di URL dei file JavaScript da caricare
var jsFiles = [
    domainPrefix + "scripts/script.js",
    domainPrefix + "scripts/windowMiniaturized.js",
    domainPrefix + "scripts/shortcuts.js",
    // domainPrefix + "otherFile.js",
];

// Array di URL dei file CSS da caricare
var cssFiles = [
    domainPrefix + "styles/style.css",
    // domainPrefix + "otherFile.css",
];

// Funzione per caricare una lista di script e fogli di stile
function loadScriptsAndStyles(jsUrls, cssUrls) {
    var scriptPromises = jsUrls.map(function(url) {
        return new Promise(function(resolve, reject) {
            var script = document.createElement("script");
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    });

    var stylePromises = cssUrls.map(function(url) {
        return new Promise(function(resolve, reject) {
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = url;
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
        });
    });

    var allPromises = scriptPromises.concat(stylePromises);

    return Promise.all(allPromises);
}

// Carica tutti i file JavaScript e CSS
loadScriptsAndStyles(jsFiles, cssFiles)
    .then(function() {
        console.log("Caricati correttamente i file JavaScript e CSS.");
    })
    .catch(function(error) {
        console.error("Errore nel caricamento dei file JavaScript e CSS:", error);
    });