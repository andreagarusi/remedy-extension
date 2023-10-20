// Creazione del link al file di stile Bootstrap
var linkElement = document.createElement('link');
linkElement.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
linkElement.rel = 'stylesheet';
linkElement.integrity = 'sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN';
linkElement.crossOrigin = 'anonymous';

// Creazione del tag script per il bundle di Bootstrap
var scriptElement = document.createElement('script');
scriptElement.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
scriptElement.integrity = 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL';
scriptElement.crossOrigin = 'anonymous';

// Aggiungi gli elementi al DOM
document.head.appendChild(linkElement);
document.body.appendChild(scriptElement);