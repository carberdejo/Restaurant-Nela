

//const contentCarrito = document.querySelector('.platos');

const Grupotarget = JSON.parse(localStorage.getItem('target')) || [];

let contenedorLista = document.querySelector('.platos'); 

let cont = 0;
const divPrecio = document.querySelector('#totalPrecio');

const contador = () => {
    Grupotarget.forEach(plato => cont += plato.precio);
    divPrecio.innerHTML = cont;
}

//Use-Cases
const createTarget = ( plato ) => {
    if (!plato) throw new Error('Se requiere el plato');
    const html = `  <img src="${plato.imagen}">
                        <div class="text-tarjeta">
                        <h3>${plato.titulo}</h3>
                        <p>S/.${plato.precio}</p>
                        </div>`;
    const divElement = document.createElement('div');
    divElement.innerHTML = html;
    divElement.classList.add('tarjeta-compra')
    divElement.setAttribute('id',plato.id)
    return divElement;
}

const renderTarget = ( menu = []) => {
    
    
    contenedorLista.innerHTML = '';
    menu.forEach(plato => {
        contenedorLista.append(createTarget(plato));
    })
}

if (Grupotarget != null) {
    renderTarget(Grupotarget);
    contador();
}




function eliminardato() {
    localStorage.removeItem('target');
    contenedorLista.innerHTML = '';
    divPrecio.innerHTML = cont=0;
}
