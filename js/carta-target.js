
class Target{
    static idcount = 1;
    /**
     * 
     * @param {String} imagen 
     * @param {String} video 
     * @param {String} titulo 
     * @param {} precio 
     */
    constructor( imagen, video, titulo, precio,filtro = Filtros.Todos,categoria) {
        this.id = Target.idcount++;
        this.imagen = imagen;
        this.video = video;
        this.titulo = titulo;
        this.precio = precio;
        this.filtro = filtro;
        this.categoria = categoria;
    }
}

//Objetos
const Categoria = {
    Pollo: 'Pollo',
    Carnes: 'Carnes',
    Pescado: 'Pescado',
    Pastas: 'Pastas',
    Tragos:'Tragos'
}
const Filtros = {
    Todos: 'Todos',
    Tendencia: 'Tendencia',
    Baratos: 'Baratos',
    Mejores:'Mejores',
}

const ElementsHTML = {
    ButonFilter: '#Filtro',
    ButonCategoria: '.icon_img',
    IconAgregar:'.button',
};


const {Carnes,Pastas,Pollo,Pescado,Tragos} = Categoria;
const menu = {
    todos: [
        new Target('IMAGENES/pla1.jpg', 'IMAGENES/vi1.mp4', 'Seca de Carne', 'S/.20',Filtros.Mejores,Carnes),
        new Target('IMAGENES/pla2.jpg','IMAGENES/huancaina.mp4', 'Arroz Chaufa', 'S/.25',Filtros.Tendencia,Carnes),
        new Target('IMAGENES/pla3.jpg', 'IMAGENES/vi1.mp4', 'Tallarin', 'S/.30'),
        new Target('IMAGENES/pla4.jpg', 'IMAGENES/huancaina.mp4', 'Tallarin Saltado', 'S/.35'),
    ],
    filtro: Filtros.Todos

}
//Stores
const getFiltros = () => {
    return menu.filtro;
}
const getMenusFiltros = ( filter = Filtros.Todos ) => {
    switch (filter) {
        case Filtros.Todos:
            return [...menu.todos];
        case Filtros.Baratos:
            return menu.todos.filter(plato => plato.filtro === Filtros.Baratos);
        case Filtros.Mejores:
            return menu.todos.filter(plato => plato.filtro === Filtros.Mejores);
        case Filtros.Tendencia:
            return menu.todos.filter(plato => plato.filtro === Filtros.Tendencia);
    }
}

const setFiltros = ( newfilter = Filtros.Todos ) => {
    menu.filtro = newfilter;
}

//Use-Cases
const createTarget = ( plato ) => {
    if (!plato) throw new Error('Se requiere el plato');
    const html = `  <div class="lista__item" >
                        <a href="Chaufa.html"><img src=${plato.imagen} alt=""></a> 
                        <a href="Chaufa.html"><video autoplay muted loop src=${plato.video} loop></video></a> 
                        <div class="fondo__item"></div>
                        <div class="item__text">
                            <h3>${plato.titulo}</h3>
                            <p>Precio: <span>${plato.precio}</span></p>
                        </div>
                        <div class="button"><span class="material-symbols-outlined">add</span></div>
                    </div>`;
    const divElement = document.createElement('div');
    divElement.innerHTML = html;
    divElement.classList.add('lista')
    divElement.setAttribute('id',plato.id)
    return divElement;
}

const renderTarget = (elementID, menu = []) => {
    
    let contenedorLista = document.querySelector(elementID); //'.contenedor__lista')
    contenedorLista.innerHTML = '';
    menu.forEach(plato => {
        contenedorLista.append(createTarget(plato));
    })
}

const displayMenu = () => {
    const Menus = getMenusFiltros(getFiltros());
    renderTarget('.contenedor__lista', Menus);
}
const obtenerPlato = ( id ) => {
    element = menu.todos.find(plato => plato.id == id)
    return element;
}
    
(() => {
    displayMenu();

    const ButonFiltersMenu = document.querySelectorAll(ElementsHTML.ButonFilter);
    const ButonAgregar = document.querySelectorAll(ElementsHTML.IconAgregar);

    ButonFiltersMenu.forEach(menus => {
        menus.addEventListener('click', (event) => {
            console.log(event.target.text);
            switch (event.target.text) {
                case Filtros.Todos:
                    setFiltros(Filtros.Todos)
                    break;
                case Filtros.Baratos:
                    setFiltros(Filtros.Baratos)
                    break;
                case Filtros.Mejores:
                    setFiltros(Filtros.Mejores)
                    break;
                case Filtros.Tendencia:
                    setFiltros(Filtros.Tendencia)
                    break;
            }
            displayMenu();
        })
    })

    ButonAgregar.forEach( element => {
        element.addEventListener('click', (event) => {
            let GroupTarget = JSON.parse(localStorage.getItem('target')) || [];
        
            const element = event.target.closest('[id]')
            const plato = obtenerPlato(element.id);
            GroupTarget.push(plato);
            console.log(GroupTarget);
            localStorage.setItem('target',JSON.stringify(GroupTarget))
        })
    })
})();

/*function cartas() {
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
}*/