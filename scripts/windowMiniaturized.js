function addBtnNetEye() {
    const mainDivNote = document.getElementById("WIN_3_1000000151");
    const searchDivNote = document.getElementById("WIN_4_1000000151");

    if (mainDivNote) {
        if (!mainDivNote.querySelector("#btnNetEyeMain")) {
            var btnNetEyeMain = document.createElement("button");
            btnNetEyeMain.textContent = "";
            btnNetEyeMain.id = "btnNetEyeMain";
            btnNetEyeMain.onclick = function() {
                var NetEyeUrl = buildNetEyeUrl();
                openWindowMiniaturized(NetEyeUrl);
            };

            mainDivNote.appendChild(btnNetEyeMain);
        }
    }

    if (searchDivNote) {
        if (!searchDivNote.querySelector("#btnNetEyeSearch")) {
            var btnNetEyeSearch = document.createElement("button");
            btnNetEyeSearch.textContent = "";
            btnNetEyeSearch.id = "btnNetEyeSearch";
            btnNetEyeSearch.onclick = function() {
                var NetEyeUrl = buildNetEyeUrl();
                openWindowMiniaturized(NetEyeUrl);
            };

            searchDivNote.appendChild(btnNetEyeSearch);
        }
    }
}

// Esegui la funzione addBtnNetEye ogni 1,5 secondo
setInterval(addBtnNetEye, 1500);

// Funzione per estrarre hostname dal campo Note, restituisce url NetEye
function buildNetEyeUrl() {
    var noteContent = document.getElementById("arid_WIN_3_1000000151").value;
    var regex = /[A-Za-z0-9]+-[A-Za-z0-9]+@([A-Za-z0-9]+(\.[A-Za-z0-9]+)+)|([A-Za-z0-9]+(-[A-Za-z0-9]+)+)\.([A-Za-z0-9]+(-[A-Za-z0-9]+)+)\.[A-Za-z0-9]+|([A-Za-z0-9]+(-[A-Za-z0-9]+)+)_[A-Za-z0-9]+|([A-Za-z0-9]+(-[A-Za-z0-9]+)+)/;
    var matchHostname = noteContent.match(regex);

    if (matchHostname) {
        // console.log(matchHostname);
        return "https://monitor.irideos.it/neteye/search?q=" + matchHostname[0] + "#!/neteye/monitoring/host/show?host=" + matchHostname[0];
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