document.addEventListener('DOMContentLoaded', function() {
    var table = document.getElementById('T301444200');
    var spans = table.getElementsByTagName('span');

    for (var i = 0; i < spans.length; i++) {
        var spanText = spans[i].textContent || spans[i].innerText;

        if (spanText.includes('#tas')) {
            spans[i].classList.add('tas-highlight');
        }
    }
});