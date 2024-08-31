document.addEventListener('DOMContentLoaded', function() {
    const mesaBtns = document.querySelectorAll('.mesa-btns button');
    const reservaInfo = document.querySelector('.reserva-info .mensaje');
    let selectedMesas = 0;

    mesaBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('siguiente')) {
                if (selectedMesas > 0) {
                    reservaInfo.textContent = `Has reservado ${selectedMesas} mesa(s). ¡Gracias por tu reserva!`;
                } else {
                    reservaInfo.textContent = 'Por favor, selecciona al menos una mesa.';
                }
            } else if (this.textContent === '+') {
                selectedMesas++;
                reservaInfo.textContent = `Has seleccionado ${selectedMesas} mesa(s).`;
            } else {
                selectedMesas = parseInt(this.textContent);
                reservaInfo.textContent = `Has seleccionado ${selectedMesas} mesa(s).`;
            }
        });
    });
});