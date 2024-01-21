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

function ticketTableChecker() {
    const ticketTable = document.getElementById("T301444200");
    const checkedTicketTable = document.querySelector('table[checked="true"]');

    if (ticketTable && !checkedTicketTable) {
        const data = [];
        const statoMap = {
            "assegnato": {
                class: "assigned",
                marginSLA: 27,
                messageSLA: "\u{1F3AB} Ticket Assegnato in scadenza"
            },
            "in corso": {
                class: "inProgress",
                marginSLA: 3 * 60 + 30,
                messageSLA: "\u{26A0} Ticket In corso in scadenza"
            },
            "pendente": { class: "pending" },
            "risolto": { class: "resolved" },
            "chiuso": { class: "closedRow" }
        };

        const rows = ticketTable.querySelectorAll("tbody tr:not(.hiddentablehdr)");

        rows.forEach((row) => {
            const cells = row.querySelectorAll("td");
            const rowData = {};

            cells.forEach((cell, index) => {
                const header = ticketTable.querySelector(`tr.hiddentablehdr th:nth-child(${index + 1})`).textContent;
                rowData[header] = cell.textContent.trim();

                if (header === "Stato" && statoMap[rowData[header].toLowerCase()]) {
                    const statoData = statoMap[rowData[header].toLowerCase()];
                    cell.classList.add(statoData.class);

                    if (statoData.marginSLA && checkDateSLA(rowData["Data inoltro"], statoData.marginSLA)) {
                        notifier(rowData["ID richiesta"], statoData.messageSLA);
                    }
                }
            });

            if (rowData["Stato"].toLowerCase() === "chiuso") {
                row.classList.add("closedRow");
            }

            data.push(rowData);
        });

        ticketTable.setAttribute("checked", "true");
    }

    // script di test
    var spanElement = document.querySelector('span');
    var textContent = spanElement.textContent;
    var match = textContent.match(/#.*? -/);

    if (match) {
        var highlightedText = match[0];
        var remainingText = textContent.replace(highlightedText, '');

        spanElement.innerHTML = '<span class="highlight">' + highlightedText + '</span>' + remainingText;
    }

}

// Verifica elementi della tabella ticket ogni 0,5 sec
setInterval(ticketTableChecker, 500);

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