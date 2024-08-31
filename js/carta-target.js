function cartas() {
    const infoTarget = [
        { id:0, imagen: 'IMAGENES/pla1.jpg',video:'IMAGENES/vi1.mp4', titul: 'Seca de Carne', precio: 'S/.20' },
        { id:1, imagen: 'IMAGENES/pla2.jpg',video:'IMAGENES/vi1.mp4', titul: 'Arroz Chaufa', precio: 'S/.20' },
        { id:2, imagen: 'IMAGENES/pla3.jpg',video:'IMAGENES/vi1.mp4', titul: 'Tallarin', precio: 'S/.20' },
        { id:3, imagen: 'IMAGENES/pla4.jpg',video:'IMAGENES/vi1.mp4', titul: 'Tallarin Saltado', precio: 'S/.20' },
        { id:4, imagen: 'IMAGENES/pla5.jpg', video: 'IMAGENES/vi1.mp4', titul: 'Seca de Carne', precio: 'S/.20' },
        { id:5, imagen: 'IMAGENES/pla6.jpg', video: 'IMAGENES/huancaina.mp4', titul: 'Seca de Carne', precio: 'S/.20' },
        { id:6, imagen: 'IMAGENES/pla8.jpg', video: 'IMAGENES/huancaina.mp4', titul: 'Seca de Carne', precio: 'S/.20' },
        { id:7,imagen: 'IMAGENES/pla4.jpg', video: 'IMAGENES/vi1.mp4', titul: 'Seca de Carne', precio: 'S/.20' },
        { id:8,imagen: 'IMAGENES/pla3.jpg', video: 'IMAGENES/vi1.mp4', titul: 'Seca de Carne', precio: 'S/.20' }
    ]
    contenedorLista = document.querySelector('.contenedor__lista')
    infoTarget.forEach(cardta => {
        const boxito = document.createElement('div');
        const itemLista = document.createElement('div');
        const sombra = document.createElement('div');
        const text = document.createElement('div');

        boxito.classList.add('lista')
        itemLista.classList.add('lista__item');
        sombra.classList.add('fondo__item')
        text.classList.add('item__text')
    
        text.innerHTML = `<h3>${cardta.titul}</h3><p>${cardta.precio}</p>`
        itemLista.innerHTML = `<img src="${cardta.imagen}"><video autoplay muted loop onClick="logger(${cardta.id})" src="${cardta.video}" loop></video><div class="button"><span class="material-symbols-outlined">add</span></div>`

        itemLista.appendChild(sombra);
        itemLista.appendChild(text);
        boxito.appendChild(itemLista)
        contenedorLista.appendChild(boxito);

        itemLista.addEventListener('onclick', () => {
            localStorage.setItem('selectedCardId', cardta.id);
            window.location.href = '../Reservas.html';
        })
    })
}
cartas();

function logger(i) {
    let selectedCardIds = JSON.parse(localStorage.getItem('selectedCardIds')) || [];
    selectedCardIds.push(i);
    localStorage.setItem('selectedCardIds', JSON.stringify(selectedCardIds));
    //window.location.href = '../Reservas.html';
}