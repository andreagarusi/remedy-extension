document.addEventListener('DOMContentLoaded', function() {
    var table = document.getElementById('T301444200');
    var cells = table.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {
        var cellText = cells[i].textContent || cells[i].innerText;

        if (cellText.includes('#tas')) {
            // Aggiungi la classe per lo stile
            cells[i].classList.add('tas-highlight');
        }
    }
});