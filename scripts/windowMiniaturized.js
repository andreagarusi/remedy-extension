const divNoteContainerIds = ["WIN_1_1000000151", "WIN_3_1000000151", "WIN_4_1000000151", "WIN_5_1000000151"];
const paramsBuilderNetEyeUrl = ["arid_WIN_3_1000000151", "https://monitor.irideos.it/neteye/search?q=", "#!/neteye/monitoring/host/show?host=", "https://monitor.irideos.it/neteye/dashboard"];
const regexNetEye = /[A-Za-z0-9]+-[A-Za-z0-9]+@([A-Za-z0-9]+(\.[A-Za-z0-9]+)+)|([A-Za-z0-9]+(-[A-Za-z0-9]+)+)\.([A-Za-z0-9]+(-[A-Za-z0-9]+)+)\.[A-Za-z0-9]+|([A-Za-z0-9]+(-[A-Za-z0-9]+)+)_[A-Za-z0-9]+|([A-Za-z0-9]+(-[A-Za-z0-9]+)+)/;;

function addButtonToDiv(divElement, baseBtnId, btnText, paramsBuilderUrl, btnRegex) {
    const buttonId = `${baseBtnId}_${divElement}`;

    if (!divElement.querySelector(`#${buttonId}`)) {
        const netEyeButton = document.createElement("button");
        netEyeButton.textContent = btnText;
        netEyeButton.id = buttonId;
        netEyeButton.onclick = function() {
            const buttonUrl = buildButtonUrl(paramsBuilderUrl, btnRegex);
            openWindowMiniaturized(buttonUrl);
        };

        divElement.appendChild(netEyeButton);
    }
}

function addBtnNetEye() {
    divNoteContainerIds.forEach(identifier => {
        const divElement = document.getElementById(identifier);
        addButtonToDiv(divElement, "btnNetEye", "", paramsBuilderNetEyeUrl, regexNetEye);
    });
}

// Esegui la funzione addBtnNetEye ogni 1,5 secondo
setInterval(addBtnNetEye, 1500);


// Funzione per estrarre hostname dal campo Note, restituisce url NetEye
function buildButtonUrl(paramsBuilderUrl, regex) {
    var noteContent = document.getElementById(paramsBuilderUrl[0]).value;
    var matchHostname = noteContent.match(regex);

    if (matchHostname) {
        // console.log(matchHostname);
        return baseBtnUrl[1] + matchHostname[0] + baseBtnUrl[2] + matchHostname[0];
    }

    return baseBtnUrl[3];
}

function openWindowMiniaturized(pageUrl) {
    var windowWidth = 1200;
    var windowHeight = 550;

    // Calcola la posizione centrale della finestra principale
    var xPos = (window.innerWidth - windowWidth) / 2;
    var yPos = (window.innerHeight - windowHeight) / 2;

    window.open(pageUrl, "Window Miniaturized", "width=" + windowWidth + ", height=" + windowHeight + ", top=" + yPos + ", left=" + xPos);
}