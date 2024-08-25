const contentCarrito = document.querySelector('.mis-pedidos');

const cardId = parseInt(localStorage.getItem('selectedCardId'), 10);
const infoTarget2 = [
    { id: 0, imagen: 'IMAGENES/pla5.jpg', video: 'IMAGENES/vi1.mp4', titul: 'Seca de Carne', precio: 'S/.20' },
    { id: 1, imagen: 'IMAGENES/pla1.jpg', titul: 'Arroz Chaufa', precio: 'S/.20' },
    { id: 2, imagen: 'IMAGENES/pla2.jpg', titul: 'Tallarin', precio: 'S/.20' },
    { id: 3, imagen: 'IMAGENES/pla3.jpg', titul: 'Tallarin Saltado', precio: 'S/.20' },
    { id: 4, imagen: 'IMAGENES/pla4.jpg', titul: 'Seca de Carne', precio: 'S/.20' },
    { id: 5, imagen: 'IMAGENES/pla4.jpg', titul: 'Seca de Carne', precio: 'S/.20' },
    { id: 6, imagen: 'IMAGENES/pla4.jpg', titul: 'Seca de Carne', precio: 'S/.20' },
    { id: 7, imagen: 'IMAGENES/pla4.jpg', titul: 'Seca de Carne', precio: 'S/.20' },
    { id: 8, imagen: 'IMAGENES/pla4.jpg', titul: 'Seca de Carne', precio: 'S/.20' }
];
const card = infoTarget2[cardId];

if (!isNaN(cardId) && cardId >= 0 && cardId < infoTarget2.length) {
    const card = infoTarget2[cardId];
    console.log("card:", card);
    const target = document.createElement('div')
    target.innerHTML = `<img src="${card.imagen}">
                        <h3>${card.titul}</h3>
                        <p>${card.precio}</p>`
    contentCarrito.appendChild(target);
}