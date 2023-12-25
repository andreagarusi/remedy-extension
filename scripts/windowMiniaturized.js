function addBtnNetEye() {
    var mainDivNote = document.getElementById("WIN_3_1000000151");
    var searchDivNote = document.getElementById("WIN_4_1000000151");

    // Verifica se il bottone "NetEye" non è già stato aggiunto
    if (!document.getElementById("btnNetEye")) {
        var btnNetEye = document.createElement("button");
        btnNetEye.textContent = "NetEye";
        btnNetEye.id = "btnNetEye";
        btnNetEye.onclick = function() {
            var NetEyeUrl = buildNetEyeUrl();
            openWindowMiniaturized(NetEyeUrl);
        };

        // Verifica se è presente l'elemento mainDivNote e aggiunge il bottone a mainDivNote, altrimenti verifica searchDivNote
        if (mainDivNote) {
            mainDivNote.appendChild(btnNetEye);
        } else if (searchDivNote) {
            searchDivNote.appendChild(btnNetEye);
        }
    }
}

// Esegui la funzione addBtnNetEye ogni 1 secondo
setInterval(addBtnNetEye, 1000);

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

    // Apertura di una nuova finestra con l'URL e le dimensioni specificate
    window.open(pageUrl, "Window Miniaturized", "width=" + windowWidth + ", height=" + windowHeight + ", top=" + yPos + ", left=" + xPos);
}

addBtnNetEye();