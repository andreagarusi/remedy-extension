function addBtnNetEye() {
    var interval = setInterval(function() {
        var divNote = document.getElementById('WIN_3_1000000151');

        // Verifica se l'elemento div esiste
        if (divNote) {
            var btnNetEye = document.createElement('button');
            btnNetEye.textContent = 'NetEye';
            btnNetEye.id = 'btnNetEye';
            btnNetEye.onclick = openWindowMiniaturized;

            // Aggiunta btnNetEye all'elemento div
            divNote.appendChild(btnNetEye);

            // Interrompe l'esecuzione periodica dopo aver aggiunto il btnNetEye
            clearInterval(interval);
        }
    }, 1000);
}

function openWindowMiniaturized() {
    var pageUrl = 'https://www.example.com';

    // Specifica le dimensioni della finestra in miniatura
    var windowWidth = 400;
    var windowHeight = 300;

    // Calcola la posizione centrale della finestra principale
    var xPos = (window.innerWidth - windowWidth) / 2;
    var yPos = (window.innerHeight - windowHeight) / 2;

    // Apertura di una nuova finestra con l'URL e le dimensioni specificate
    window.open(pageUrl, 'Window Miniaturized', 'width=' + windowWidth + ', height=' + windowHeight + ', top=' + yPos + ', left=' + xPos);
}

addBtnNetEye();