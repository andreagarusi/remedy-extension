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

setInterval(addBtnNetEye, 1500);

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


function openWindowMiniaturized(pageUrl) {
    var windowWidth = 1200;
    var windowHeight = 550;

    var xPos = (window.innerWidth - windowWidth) / 2;
    var yPos = (window.innerHeight - windowHeight) / 2;

    window.open(pageUrl, "Window Miniaturized", "width=" + windowWidth + ", height=" + windowHeight + ", top=" + yPos + ", left=" + xPos);
}