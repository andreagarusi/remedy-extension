function aggiungiBottoneSePresente() {
    var interval = setInterval(function() {
        var divNote = document.getElementById('WIN_3_1000000151');

        // Verifica se l'elemento div esiste
        if (divNote) {
            var btnNetEye = document.createElement('button');
            btnNetEye.textContent = 'NetEye';
            btnNetEye.id = 'btnNetEye';
            btnNetEye.onclick = openNetEyeMiniaturized;

            // Aggiunta btnNetEye all'elemento div
            divNote.appendChild(btnNetEye);

            // Interrompe l'esecuzione periodica dopo aver aggiunto il btnNetEye
            clearInterval(interval);
        }
    }, 1000);
}

// Funzione per aprire la pagina in miniatura
function apriPaginaInMiniatura() {
    // Specifica l'URL della pagina web che desideri aprire
    var urlPagina = 'https://www.example.com';

    // Specifica le dimensioni della finestra in miniatura
    var larghezzaFinestra = 400;
    var altezzaFinestra = 300;

    // Calcola la posizione centrale della finestra principale
    var xPos = (window.innerWidth - larghezzaFinestra) / 2;
    var yPos = (window.innerHeight - altezzaFinestra) / 2;

    // Apre una nuova finestra con l'URL specificato e le dimensioni desiderate
    window.open(urlPagina, 'PaginaMiniatura', 'width=' + larghezzaFinestra + ', height=' + altezzaFinestra + ', top=' + yPos + ', left=' + xPos);
}

// Chiamare la funzione per aggiungere il bottone se l'elemento è presente
aggiungiBottoneSePresente();