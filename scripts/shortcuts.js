document.addEventListener('keydown', function(event) {
    // Salva
    if (event.ctrlKey && (event.key === 's' || event.key === 'S')) {
        document.getElementById("WIN_3_301614800").click();
        event.preventDefault();
    }

    // Aggiorna
    if (event.ctrlKey && (event.key === 'r' || event.key === 'R')) {
        var elements = document.querySelectorAll('.Ref.btn.btn3d.TableBtn');

        if (elements.length > 0) {
            elements.forEach(function(element) {
                element.click();
            });

            event.preventDefault();
        }
    }

    // Aggiungi
    if (event.ctrlKey && (event.key === 'Enter' || event.key === 'NumpadEnter')) {
        document.getElementById("WIN_3_304247110").click();
        event.preventDefault();
    }

    // Back
    if (event.altKey && event.key === 'ArrowLeft') {
        document.getElementById("WIN_0_304248620").click();
        event.preventDefault();
    }

    // Next
    if (event.altKey && event.key === 'ArrowRight') {
        document.getElementById("WIN_0_304248650").click();
        event.preventDefault();
    }

    // Nuovo incidente
    if (event.ctrlKey && event.shiftKey && (event.key === 'n' || event.key === 'N')) {
        var targetElement = findElementWithText("Nuovo incidente");

        if (targetElement) {
            targetElement.click();
            event.preventDefault();
        }
    }

    // Ricerca incidente
    if (event.ctrlKey && event.shiftKey && (event.key === 'f' || event.key === 'F')) {
        var targetElement = findElementWithText("Ricerca incidente");

        if (targetElement) {
            targetElement.click();
            event.preventDefault();
        }
    }

});

function findElementWithText(text) {
    var elements = document.querySelectorAll('a.btn span.navLabel');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].textContent.trim() === text) {
            return elements[i].closest('a.btn');
        }
    }
    return null;
}