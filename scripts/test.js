document.addEventListener('DOMContentLoaded', function() {
    var table = document.getElementById('T301444200');
    var elements = table.querySelectorAll('*');

    elements.forEach(function(element) {
        var elementText = element.textContent || element.innerText;

        if (elementText.includes('#tas')) {
            element.classList.add('tas-highlight');
        }
    });
});