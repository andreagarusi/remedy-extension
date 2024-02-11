document.addEventListener('keydown', function(event) {
    // Salva
    if (event.ctrlKey && (event.key === 's' || event.key === 'S')) {
        document.querySelector('[id$="301614800"]').click();
        event.preventDefault();
    }

    // Aggiorna
    if (event.ctrlKey && (event.key === 'r' || event.key === 'R')) {
        document.querySelector('[id$="301444200"] > div.TableHdr > table > tbody > tr > td.TableHdrR > a.Ref.btn.btn3d.TableBtn').click();
        event.preventDefault();
    }

    // Aggiungi
    if (event.ctrlKey && (event.key === 'Enter' || event.key === 'NumpadEnter')) {
        document.querySelector('[id$="304247110"]').click();
        event.preventDefault();
    }

    // Back
    if (event.altKey && event.key === 'ArrowLeft') {
        document.querySelector('[id$="304248620"]').click();
        event.preventDefault();
    }

    // Next
    if (event.altKey && event.key === 'ArrowRight') {
        document.querySelector('[id$="304248650"]').click();
        event.preventDefault();
    }

});