// Controllo se il browser supporta le notifiche
if ("Notification" in window) {
    // Richiesta all'utente abilitazione notifiche
    Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
            console.log("Permesso per le notifiche ottenuto.");
        } else if (permission === "denied") {
            console.log("Permesso per le notifiche negato.");
        }
    });
} else {
    console.log("Le notifiche non sono supportate in questo browser.");
}

// Funzione principale: parsing tabella home screen ogni 5 sec.
window.setInterval(function() {
    // Trova la tabella tramite l'ID
    const table = document.getElementById("T301444200");

    // Verifica se la tabella esiste
    if (table) {
        // Crea una matrice per memorizzare i dati della tabella
        const data = [];

        // Ottieni tutte le righe della tabella tranne l'header
        const rows = table.querySelectorAll("tbody tr:not(.hiddentablehdr)");

        // Loop attraverso le righe della tabella
        rows.forEach((row) => {
            // Ottieni tutte le celle della riga
            const cells = row.querySelectorAll("td");

            // Crea un oggetto per memorizzare i dati di questa riga
            const rowData = {};

            // Loop attraverso le celle e ottieni i dati
            cells.forEach((cell, index) => {
                const header = table.querySelector(`tr.hiddentablehdr th:nth-child(${index + 1})`).textContent;
                rowData[header] = cell.textContent.trim();

                // Verifica cella sotto la colonna "Stato"
                if (header === "Stato") {
                    switch (rowData[header].toLowerCase()) {
                        case "assegnato":
                            cell.classList.add("assegnato");
                            // SLA per gli assegnati di 30 minuti (margine 27 min)
                            if (checkDateSLA(rowData["Data inoltro"], 27)) {
                                notifier(rowData["ID richiesta"], "Ticket Assegnato in scadenza");
                            }
                            break;
                        case "in corso":
                            cell.classList.add("incorso");
                            // SLA per gli in corso di 4 ore (margine 3h e 30 min)
                            if (checkDateSLA(rowData["Data inoltro"], 3 * 60 + 30)) {
                                notifier(rowData["ID richiesta"], "Ticket In corso in scadenza");
                            }
                            break;
                        case "pendente":
                            cell.classList.add("pendente");
                            break;
                        case "risolto":
                            cell.classList.add("risolto");
                            break;
                        case "chiuso":
                            cell.classList.add("chiuso");
                            break;
                        default:
                    }
                }
            });

            // Aggiungi l'oggetto rowData alla matrice data
            data.push(rowData);
        });

        // Stampa la matrice data
        // console.log(data);

    } else {
        console.error("La tabella con l'ID specificato non esiste.");
    }

}, 5 * 1000);

function checkDateSLA(inputStringDate, timeInMinutes) {
    // Dividi la stringa in data e orario
    const [datePart, timePart] = inputStringDate.split(' ');

    // Dividi la data in giorno, mese e anno
    const [day, month, year] = datePart.split('/');

    // Dividi l'orario in ore, minuti e secondi
    const [hour, minute, second] = timePart.split('.');

    // Crea un oggetto Date con i valori estratti
    const formattedDate = new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:${second.padStart(2, '0')}`);

    // Ottenere l'orario attuale
    const now = new Date();

    if ((now - formattedDate) >= timeInMinutes * 60 * 1000) {
        return true;
    } else {
        return false;
    }
}

function notifier(id, title) {
    if (Notification.permission === "granted") {
        var options = {
            tag: id,
            body: id,
        };

        var notification = new Notification(title, options);

        notification.onclick = function() {
            // Azione da eseguire quando l'utente fa clic sulla notifica.
            console.log("Notifica cliccata.");
        };
    }
}