
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


