// NetEye
function addBtnNetEye() {
    const regex = /WIN_(\d{1,2})_1000000151/;
    const divElements = document.querySelectorAll('div[id^="WIN_"][id$="_1000000151"]');

    divElements.forEach(function(divElement) {
        const match = divElement.id.match(regex);
        if (match && !divElement.querySelector("#btnNetEye_" + match[0])) {
            var btnNetEye = document.createElement("button");
            btnNetEye.textContent = "";
            btnNetEye.id = "btnNetEye_" + match[0];
            btnNetEye.classList.add("btnNetEye");
            btnNetEye.title = "NetEye Shortcut"
            btnNetEye.onclick = function() {
                var NetEyeUrl = buildNetEyeUrl(match[0]);
                openWindowMiniaturized(NetEyeUrl);
            };

            divElement.appendChild(btnNetEye);
        }
    });
}

// Nedi
function addBtnNedi() {
    const regex = /WIN_(\d{1,2})_1000000000/;
    const divElements = document.querySelectorAll('div[id^="WIN_"][id$="_1000000000"]');

    divElements.forEach(function(divElement) {
        const match = divElement.id.match(regex);
        if (match && !divElement.querySelector("#btnNedi_" + match[0])) {
            var btnNedi = document.createElement("button");
            btnNedi.textContent = "";
            btnNedi.id = "btnNedi_" + match[0];
            btnNedi.classList.add("btnNedi");
            btnNedi.title = "Nedi Shortcut"
            btnNedi.onclick = function() {
                var NediUrl = buildNediUrl(match[0]);
                openWindowMiniaturized(NediUrl);
            };

            divElement.appendChild(btnNedi);
        }
    });
}

// Back Office
function addBtnBackOffice() {
    const regex = /WIN_(\d{1,2})_303497300/;
    const divElements = document.querySelectorAll('div[id^="WIN_"][id$="_303497300"]');

    divElements.forEach(function(divElement) {
        const match = divElement.id.match(regex);
        if (match && !divElement.querySelector("#btnBackOffice_" + match[0])) {
            var btnBackOffice = document.createElement("button");
            btnBackOffice.textContent = "";
            btnBackOffice.id = "btnBackOffice_" + match[0];
            btnBackOffice.classList.add("btnBackOffice");
            btnBackOffice.title = "Back Office Shortcut"
            btnBackOffice.onclick = function() {
                var BackOfficeUrl = buildBackOfficeUrl(match[0]);
                openWindowMiniaturized(BackOfficeUrl);
            };

            divElement.appendChild(btnBackOffice);
        }
    });
}

setInterval(addBtnNedi, 1500);
setInterval(addBtnNetEye, 1500);
setInterval(addBtnBackOffice, 1500);

// NetEye
function buildNetEyeUrl(containerId) {
    var textareaId = "arid_" + containerId.substring(0, containerId.lastIndexOf("_")) + "_1000000151";
    var noteContent = document.getElementById(textareaId).value;

    var regex = /([A-Za-z0-9]+(-[A-Za-z0-9]+)+)/;
    var matchHostname = noteContent.match(regex);

    if (matchHostname) {
        return "https://monitor.irideos.it/neteye/search?q=" + matchHostname[0] + "#!/neteye/monitoring/host/show?host=" + matchHostname[0];
    }

    return "https://monitor.irideos.it/neteye/dashboard";
}

// Nedi
function buildNediUrl(containerId) {
    var textareaId = "arid_" + containerId.substring(0, containerId.lastIndexOf("_")) + "_1000000000";
    var noteContent = document.getElementById(textareaId).value;

    var regex = /([A-Za-z0-9]+(-[A-Za-z0-9]+)+)/;
    var matchHostname = noteContent.match(regex);

    if (matchHostname) {
        return "https://100.67.0.15/nedi/Devices-Config.php?shc=" + matchHostname[0];
    }

    return "https://100.67.0.15/nedi/Devices-Config.php";
}

// Back Office
function buildBackOfficeUrl(containerId) {
    var textareaId = "arid_" + containerId.substring(0, containerId.lastIndexOf("_")) + "_303497300";
    var noteContent = document.getElementById(textareaId).value;

    var regex = /[A-Za-z]+[0-9]+/;
    var matchHostname = noteContent.match(regex);

    if (matchHostname) {
        return "https://backoffice.mclink.it/p2/adslinfo?user=" + matchHostname[0];
    }

    return "https://backoffice.mclink.it/p2/main";
}

function openWindowMiniaturized(pageUrl) {
    var windowWidth = 1200;
    var windowHeight = 550;

    var xPos = (window.innerWidth - windowWidth) / 2;
    var yPos = (window.innerHeight - windowHeight) / 2;

    window.open(pageUrl, "Window Miniaturized", "width=" + windowWidth + ", height=" + windowHeight + ", top=" + yPos + ", left=" + xPos);
}