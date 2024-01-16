function gestisciBottoni() {
    var elements = document.querySelectorAll('[arid="1000000151"]');

    elements.forEach(function(elemento) {
        var btnNetEye = elemento.querySelector('.btnNetEye');

        if (!btnNetEye) {
            btnNetEye = document.createElement('button');
            btnNetEye.className = 'btnNetEye';
            btnNetEye.textContent = '';
            btnNetEye.onclick = function() {
                var NetEyeUrl = buildNetEyeUrl();
                openWindowMiniaturized(NetEyeUrl);
            };

            elemento.appendChild(btnNetEye);

            // console.log('Creato btnNetEye');
        }
    });
}

setInterval(gestisciBottoni, 1500);

function buildNetEyeUrl() {
    var elements = document.querySelectorAll('[arid="1000000151"]');
    var regex = /[A-Za-z0-9]+-[A-Za-z0-9]+@([A-Za-z0-9]+(\.[A-Za-z0-9]+)+)|([A-Za-z0-9]+(-[A-Za-z0-9]+)+)\.([A-Za-z0-9]+(-[A-Za-z0-9]+)+)\.[A-Za-z0-9]+|([A-Za-z0-9]+(-[A-Za-z0-9]+)+)_[A-Za-z0-9]+|([A-Za-z0-9]+(-[A-Za-z0-9]+)+)/;

    elements.forEach(function(element) {
        var textarea = element.querySelector('textarea');

        if (textarea) {
            var noteContent = textarea.value;
        } else {
            return "https://monitor.irideos.it/neteye/dashboard";
        }
    });

    var matchHostname = noteContent.match(regex);

    if (matchHostname) {
        // console.log(matchHostname);
        return "https://monitor.irideos.it/neteye/search?q=" + matchHostname[0] + "#!/neteye/monitoring/host/show?host=" + matchHostname[0];
    }

    return "https://monitor.irideos.it/neteye/dashboard";
}

function openWindowMiniaturized(pageUrl) {
    // Specifica le dimensioni della finestra in miniatura
    var windowWidth = 1200;
    var windowHeight = 550;

    // Calcola la posizione centrale della finestra principale
    var xPos = (window.innerWidth - windowWidth) / 2;
    var yPos = (window.innerHeight - windowHeight) / 2;

    // Apertura di una nuova finestra con l'URL e le dimensioni specificate
    window.open(pageUrl, "Window Miniaturized", "width=" + windowWidth + ", height=" + windowHeight + ", top=" + yPos + ", left=" + xPos);
}