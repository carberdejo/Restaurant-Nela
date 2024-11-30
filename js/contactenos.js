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
    titul.innerHTML = 'PROVEEDORES';
    

    const cartas = [
        { imagen: 'https://www.la-razon.com/wp-content/uploads/2024/05/22/14/Alicorp1-Alicorp-1.jpeg', imagen1: 'https://alicorpsoluciones.com.pe/wp-content/uploads/2023/03/linkpostalicorp.png', text: 'ALLICORP', hre: "https://www.alicorp.com.pe/pe/es/" },
        
        { imagen: 'https://www.esan.edu.pe/images/blog/2017/11/23/1200x630-laive.jpg', imagen1: 'https://storage.googleapis.com/web-laive-storage/Media/pages/2010-2018-(1200px).jpg',  text: 'LAIVE', hre: "http://laive.pe/" },
        
        { imagen: 'https://stakeholders.com.pe/wp-content/uploads/2021/02/nestleee-scaled.jpg',imagen1: 'https://tentulogo.com/wp-content/uploads/2024/07/strong-brand-image-when-expanding-to-new-markets-nestle.jpg', text: 'NESTLE',hre :"https://www.nestle.com.pe/" }
    ]

    cartas.forEach(carta =>{
        const   cardElement = document.createElement('div');
                cardElement.classList.add('card')

        const   imgElement = document.createElement('img');
                imgElement.classList.add('imagen1')
                imgElement.src = carta.imagen;

        const   imgElement1 = document.createElement('img');
                imgElement1.classList.add('imagen2')
                imgElement1.src = carta.imagen1

        const   textElement = document.createElement('a');
                textElement.href=carta.hre;
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
