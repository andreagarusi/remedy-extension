document.addEventListener('keydown', function(event) {
    // Salva
    if (event.ctrlKey && (event.key === 's' || event.key === 'S')) {
        var elem = document.querySelector('[id$="301614800"]');
        if (elem) {
            elem.click();
        }
        event.preventDefault();
    }

    // Aggiorna
    if (event.ctrlKey && (event.key === 'r' || event.key === 'R')) {
        var elem = document.querySelector('[id$="301444200"] > div.TableHdr > table > tbody > tr > td.TableHdrR > a.Ref.btn.btn3d.TableBtn');
        if (elem) {
            elem.click();
        }
        event.preventDefault();
    }

    // Aggiungi
    if (event.ctrlKey && (event.key === 'Enter' || event.key === 'NumpadEnter')) {
        var elem = document.querySelector('[id$="304247110"]');
        if (elem) {
            elem.click();
        }
        event.preventDefault();
    }

    // Back
    if (event.altKey && event.key === 'ArrowLeft') {
        var elem = document.querySelector('[id$="304248620"]')
        if (elem) {
            elem.click();
        }
        event.preventDefault();
    }

    // Next
    if (event.altKey && event.key === 'ArrowRight') {
        var elem = document.querySelector('[id$="304248650"]');
        if (elem) {
            elem.click();
        }
        event.preventDefault();
    }
});