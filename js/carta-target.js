
class Target{
    static idcount = 1;
    /**
     * 
     * @param {String} imagen 
     * @param {String} video 
     * @param {String} titulo 
     * @param {} precio 
     */
    constructor( imagen, video, titulo, precio,filtro = Todos,categoria = Pollo) {
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
    IconAgregar: '.button',
    IConCategoria:'.box_icon',
};


const { Carnes, Pastas, Pollo, Pescado, Tragos } = Categoria;
const {Todos,Tendencia,Baratos,Mejores } = Filtros;
const menu = {
    todos: [
        new Target('IMAGENES/pla1.jpg', 'IMAGENES/vi1.mp4', 'Seca de Carne', 20,Mejores,Carnes),
        new Target('IMAGENES/pla2.jpg','IMAGENES/huancaina.mp4', 'Arroz Chaufa', 25,Tendencia,Carnes),
        new Target('IMAGENES/pla3.jpg', 'IMAGENES/vi1.mp4', 'Tallarin', 30,Baratos,Pollo),
        new Target('IMAGENES/pla4.jpg', 'IMAGENES/huancaina.mp4', 'Tallarin Saltado',35, Tendencia, Pastas),
        new Target('IMAGENES/pla5.jpg', 'IMAGENES/vi1.mp4', 'Tallarin', 30, Baratos, Pollo),
        new Target('IMAGENES/pla6.jpg', 'IMAGENES/vi1.mp4', 'Papa a la huancaina',30, Baratos, Pollo),
        new Target('IMAGENES/Ceviche.jpg', 'IMAGENES/Ceviche.mp4', 'Ceviche', 30, Tendencia, Pescado),
        new Target('IMAGENES/pla8.jpg', 'IMAGENES/vi1.mp4', 'Tallarin', 20, Baratos, Carnes),
        new Target('IMAGENES/Pescado-salca-picante.jpg', 'IMAGENES/Pescado-salca-picante.mp4', 'Pescado a salsa picante', 30, Baratos, Pescado),
        new Target('IMAGENES/EstofadoPescado.jpg', 'IMAGENES/EstofadoPescado.mp4', 'Estofado de Pescado',30, Baratos, Pescado),
        new Target('IMAGENES/pla1.jpg', 'IMAGENES/vi1.mp4', 'Tallarin', 30, Baratos, Pollo),
        new Target('IMAGENES/Coctel.jpg', 'IMAGENES/Coctel.mp4', 'Coctel', 30, Tendencia, Tragos),
        new Target('IMAGENES/Vino.jpg', 'IMAGENES/Vino.mp4', 'Vino', 30, Baratos, Tragos),
        new Target('IMAGENES/Whiskey.jpg', 'IMAGENES/Whiskey.mp4', 'Whiskey', 30,Mejores,Tragos),
    ],
    filtro: Filtros.Todos,
    categor: Pollo

}
//Stores
const getCategoria = () => {
    return menu.categor;
}
const getFiltros = () => {
    return menu.filtro;
}
const getMenusFiltros = ( filter = Todos ) => {
    switch (filter) {
        case Todos:
            return menu.todos.filter(plato => plato.categoria === menu.categor);
        case Filtros.Baratos:
            return menu.todos.filter(plato => plato.filtro === Baratos && plato.categoria === menu.categor);
        case Filtros.Mejores:
            return menu.todos.filter(plato => plato.filtro === Mejores && plato.categoria === menu.categor);
        case Filtros.Tendencia:
            return menu.todos.filter(plato => plato.filtro === Tendencia && plato.categoria === menu.categor);
    }
}

const setFiltros = ( newfilter = Filtros.Todos ) => {
    menu.filtro = newfilter;
}

const setCategorias = ( newcategoria = Pollo ) => {
    menu.categor = newcategoria;
}

const getMenuCategoria = ( categ = Pollo ) => {
    switch (categ) {
        case Pollo:
            return menu.todos.filter(plato => plato.categoria === Pollo);
        case Carnes:
            return menu.todos.filter(plato => plato.categoria === Carnes);
        case Pescado:
            return menu.todos.filter(plato => plato.categoria === Pescado);
        case Pastas:
            return menu.todos.filter(plato => plato.categoria === Pastas);
        case Tragos:
            return menu.todos.filter(plato => plato.categoria === Tragos);
    }
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
                            <p>Precio: <span>S/.${plato.precio}</span></p>
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

const displayFiltroMenu = () => {
    const Menus = getMenusFiltros(getFiltros());
    renderTarget('.contenedor__lista', Menus);
}

const displayCategoria = () => {
    const Menus = getMenuCategoria(getCategoria());
    console.log(Menus);
    renderTarget('.contenedor__lista', Menus);
}

const obtenerPlato = ( id ) => {
    element = menu.todos.find(plato => plato.id == id)
    return element;
}
    
(() => {
    displayFiltroMenu();

    //DOM
    const ButonFiltersMenu = document.querySelectorAll(ElementsHTML.ButonFilter);
    const ButonAgregar = document.querySelectorAll(ElementsHTML.IconAgregar);
    const ButonCategoriaMenu = document.querySelectorAll(ElementsHTML.ButonCategoria);

    //LISTENERS
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
            displayFiltroMenu();
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

    ButonCategoriaMenu.forEach(element => {
        element.addEventListener('click', (event) => {
            const cate = event.target.closest('[id]').id;
            switch (cate) {
                case Pollo: setCategorias(Pollo)
                    break;
                case Carnes: setCategorias(Carnes)
                    break;
                case Pescado: setCategorias(Pescado)
                    break;
                case Pastas: setCategorias(Pastas)
                    break;
                case Tragos: setCategorias(Tragos)
                    break;
            }
            displayCategoria();
            console.log(menu.todos);
        })
    })

})();
