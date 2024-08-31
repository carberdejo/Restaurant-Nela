//HORA 
function actualizarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    document.getElementById('reloj').textContent = `${horas}:${minutos}:${segundos}`;
}
setInterval(actualizarReloj, 1000);
actualizarReloj();  // Inicializa el reloj al cargar la página


//CARRUSEL MODAL
function banrrusel() {


    const marco = document.querySelector('.marco');
    const cuadro = document.querySelector('.cuadro');
    const imagen = document.querySelector('#imgcab')

    const listaImagen = ['https://storage.googleapis.com/fitia_public_images/recipes%2FPE-R-V-00000054_yfy604fr4nfdso83fr238gz9_large.jpg','https://cdn0.recetasgratis.net/es/posts/1/4/5/chicharron_de_pollo_peruano_76541_orig.jpg'];

    const existe = marco.querySelector('h3');
    if (existe) {
        existe.remove();
    }
    const titulo = document.createElement('h3')
    titulo.innerHTML = 'Chicharron de Pollo';
    marco.appendChild(titulo);
    
    
    let contador = 0;

    function showImage(index) {
        imagen.src = listaImagen[index];
    }

    function nextImage() {
        contador = (contador + 1) % listaImagen.length;
        showImage(contador);
    }

    marco.style.display = 'block';
    showImage(contador); // Mostrar la primera imagen

    // Cambiar imagen automáticamente cada 3 segundos
    setInterval(nextImage, 3000);
                        
}

function closeLogin() {
const marco = document.querySelector('.marco');
if (marco) {
    setTimeout(() => {
        marco.style.display = 'none';
    }, 300); // Tiempo para la animación de salida
}
}


