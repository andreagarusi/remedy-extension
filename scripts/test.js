document.addEventListener('DOMContentLoaded', function() {
    var spanElement = document.querySelector('span');
    var textContent = spanElement.textContent;
    var match = textContent.match(/#.*? -/);

    if (match) {
        var highlightedText = match[0];
        var remainingText = textContent.replace(highlightedText, '');

        spanElement.innerHTML = '<span class="highlight">' + highlightedText + '</span>' + remainingText;
    }
});