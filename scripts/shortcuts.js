document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === 's' || event.key === 'S')) {
        document.getElementById("WIN_3_301614800").click();
        event.preventDefault();
    }

    if (event.ctrlKey && (event.key === 'Enter' || event.key === 'NumpadEnter')) {
        document.getElementById("WIN_3_304247110").click();
        event.preventDefault();
    }

    if (event.altKey && event.key === 'ArrowLeft') {
        document.getElementById("WIN_0_304248620").click();
        event.preventDefault();
    }

    if (event.altKey && event.key === 'ArrowRight') {
        document.getElementById("WIN_0_304248650").click();
        event.preventDefault();
    }
});