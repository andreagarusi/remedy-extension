function addBtnNetEye() {
    var interval = setInterval(function() {
        var divNote = document.getElementById("WIN_3_1000000151");

        // Verifica se l"elemento div esiste
        if (divNote) {
            var btnNetEye = document.createElement("button");
            btnNetEye.textContent = "NetEye";
            btnNetEye.id = "btnNetEye";
            btnNetEye.onclick = function() {
                var NetEyeUrl = buildNetEyeUrl();
                openWindowMiniaturized(NetEyeUrl);
            };

            // Aggiunta btnNetEye all"elemento div
            divNote.appendChild(btnNetEye);

            // Interrompe l"esecuzione periodica dopo aver aggiunto il btnNetEye
            clearInterval(interval);
        }
    }, 1000);
}

// Funzione per estrarre hostname dal campo Note, restituisce url NetEye
function buildNetEyeUrl() {
    var textareaContent = document.getElementById("arid_WIN_3_1000000151").value;

    // Se la stringa contiene "HOST:"
    if (textareaContent.includes("HOST:")) {
        var regexHost = /HOST:\s*([^ ]+)/;
        var matchHost = textareaContent.match(regexHost);

        if (matchHost) {
            return "https://monitor.irideos.it/neteye/search?q=" + matchHost[1] + "#!/neteye/monitoring/host/show?host=" + matchHost[1];
        }
    }
    // Se la stringa contiene "SERVICE:"
    else if (textareaContent.includes("SERVICE:")) {
        var regexService = /SERVICE:\s*([^ ]+)\s*su\s*([^ ]+)/;
        var matchService = textareaContent.match(regexService);

        if (matchService) {
            return "https://monitor.irideos.it/neteye/search?q=" + matchService[2] + "#!/neteye/monitoring/host/show?host=" + matchService[2];
        }
    }

    // Restituisce url della dashboard NetEye se nessun match è stato trovato
    return "https://monitor.irideos.it/neteye/dashboard";
}

function openWindowMiniaturized(pageUrl) {
    // Specifica le dimensioni della finestra in miniatura
    var windowWidth = 1200;
    var windowHeight = 550;

    // Calcola la posizione centrale della finestra principale
    var xPos = (window.innerWidth - windowWidth) / 2;
    var yPos = (window.innerHeight - windowHeight) / 2;

    // Apertura di una nuova finestra con l"URL e le dimensioni specificate
    window.open(pageUrl, "Window Miniaturized", "width=" + windowWidth + ", height=" + windowHeight + ", top=" + yPos + ", left=" + xPos);
}

addBtnNetEye();