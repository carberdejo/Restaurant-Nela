//CARRUSEL BANNER
let c = 0
function carrusel() {
    c++
    if (c > 3) {
        c = 1;
    }
    document.querySelector('#imgcab').setAttribute('src', 'IMAGENES/desc' + c + '.png');
    
    setTimeout('carrusel()',3000)
}
document.body.setAttribute('onload', 'carrusel();')




//CARRUSEL CARTAS
const carrousel = document.querySelector('.cartas')
let isDragging = false, startX, startScrollLeft;
let arrowBtns = document.querySelectorAll('.combos span')
const primeraCarta = carrousel.querySelector('.itemgroup').offsetWidth;
const carruselChildren = [...carrousel.children]

let cartaPrevia = Math.random(carrousel.offsetWidth / primeraCarta)

carruselChildren.slice(-cartaPrevia).reverse().forEach(card => {
    carrousel.insertAdjacentHTML('afterbegin',card.outerHTML)
})

carruselChildren.slice(0,cartaPrevia).reverse().forEach(card => {
    carrousel.insertAdjacentHTML('beforeend',card.outerHTML)
})


arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        carrousel.scrollLeft += btn.id ==='left' ? -primeraCarta : primeraCarta
    })
})

const dragStart = (e) => {
    isDragging = true
    carrousel.classList.add('dragging')
    startX = e.pageX;
    startScrollLeft = carrousel.scrollLeft
}

const dragging = (e) => {
    if (!isDragging) return;
    carrousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carrousel.classList.remove('dragging')
}

//const infinityScroll = () => {
//    if (carrousel.scrollLeft === 0) {
//        carrousel.scrollLeft = carrousel.scrollWidth - (2 * carrousel.offsetWidth)
//    } else if (Math.ceil(carrousel.scrollLeft) === carrousel.scrollWidth - carrousel.offsetWidth) {
//        carrousel.scrollLeft = carrousel.scrollWidth
//    }
//}
const infinityScroll = () => {
    // Si estamos en el inicio, mover el scroll al final menos dos veces el ancho del contenedor
    if (carrousel.scrollLeft === 0) {
        carrousel.scrollLeft = carrousel.scrollWidth - (2 * carrousel.offsetWidth);
    }
    // Si estamos en el final (casi), mover el scroll al principio
    else if (Math.ceil(carrousel.scrollLeft + carrousel.offsetWidth) >= carrousel.scrollWidth) {
        carrousel.scrollLeft = 1; // Mover el scroll ligeramente después del inicio para evitar la repetición del evento
    }
}
carrousel.addEventListener('mousedown', dragStart)
carrousel.addEventListener('mousemove', dragging)
document.addEventListener('mouseup', dragStop)
carrousel.addEventListener('scroll', infinityScroll)


//carta aleatoria

const deckPlatos = [];
const numOrden = [1, 2, 3, 4, 5];
const btn_pedir = document.querySelector('.btn-pedir')
const btn_nuevo = document.querySelector('.btn-nuevo')
const contenImage = document.querySelector('.imagenes')
let maxImagenes = 5;

function seleccionarNumeroAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}  
const numeroAleatorio = seleccionarNumeroAleatorio(numOrden);
console.log(numeroAleatorio);


function contarImagenes() {
    const conteo = {};
    contenImage.querySelectorAll('img').forEach(img => {
        const src = img.src;
        conteo[src] = (conteo[src] || 0) + 1;
    });
    return conteo;
}

function verificarVictoria() {
    const conteo = contarImagenes();
    for (const src in conteo) {
        if (conteo[src] >= 3) {
            alert("¡Ganaste! Has seleccionado tres imágenes iguales.");
            break;
        }
    }
}

btn_pedir.addEventListener('click', () => {
    // Verificar si ya se alcanzó el máximo de imágenes
    if (contenImage.children.length < maxImagenes) {
        const numeroAleatorio = seleccionarNumeroAleatorio(numOrden);
        console.log(numeroAleatorio);
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `../IMAGENES/${numeroAleatorio}.jpg`;
        imgCarta.classList.add('carta');
        contenImage.append(imgCarta);

        setTimeout(() => {
            verificarVictoria();
        }, 100);
    } else {
        console.log("Máximo de imágenes alcanzado");
        alert("Ya has alcanzado el máximo de 5 imágenes.");
    }
});

btn_nuevo.addEventListener('click', () => {
    contenImage.innerHTML = '';
    
})