document.addEventListener("DOMContentLoaded", function() {
    const typedText = document.getElementById('nela_text');
    const text = typedText.textContent;
    typedText.textContent = ''; // Limpia todo el texto

    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 30); // Velocidad
        }
    }

    typeWriter();
});

// Final Kevin -->