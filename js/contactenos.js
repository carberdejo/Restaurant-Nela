const btnVisitar = document.querySelector('.caja0__button')

function divya() {

    const modal = document.querySelector('#myModal')
    const cardsContainer = document.querySelector('#cardsContainer')
    
    cardsContainer.innerHTML = '';
    
    const existe = modal.querySelector('h3');
    if (existe) {
        existe.remove();
    }
    const titul = document.createElement('h3')
    modal.prepend(titul)
    titul.innerHTML = 'Promociones';
    

    const cartas = [
        { imagen: 'IMAGENES/pla1.jpg',imagen1: 'IMAGENES/pla4.jpg', text: 'plato 1' },
        { imagen: 'IMAGENES/pla4.jpg',imagen1: 'IMAGENES/pla4.jpg', text: 'plato 2' },
        { imagen: 'IMAGENES/pla3.jpg',imagen1: 'IMAGENES/pla4.jpg', text: 'plato 3' }
    ]

    cartas.forEach(carta =>{
        const cardElement = document.createElement('div');
        cardElement.classList.add('card')

        const imgElement = document.createElement('img');
        imgElement.classList.add('imagen1')
        imgElement.src = carta.imagen;

        const imgElement1 = document.createElement('img');
        imgElement1.classList.add('imagen2')
        imgElement1.src = carta.imagen1

        const textElement = document.createElement('p');
        textElement.innerHTML = carta.text;

        cardElement.appendChild(imgElement);
        cardElement.appendChild(imgElement1);
        cardElement.appendChild(textElement)
        cardsContainer.appendChild(cardElement);

    })

    modal.style.display = 'block'

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
    
}
