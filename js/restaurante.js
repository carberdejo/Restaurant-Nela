function bannerCarrusel() {
    const cuadro = document.createElement('div')
    cuadro.innerHTML = `<div class="content">
                            <h1 id="tit">PROMOCIONES</h1>
                            <div id="boximg">
                                <img id="imgcab" src="IMAGENES/desc1.png" />
                            </div>
                        </div>` 
    (() => {
            let c = 0
            function carrusel() {
                c++
                if (c > 3) {
                    c = 1;
                }
                cuadro.querySelector('#imgcab').setAttribute('src', 'IMAGENES/desc' + c + '.png');
                
                setTimeout('carrusel()',3000)
            }
            document.body.setAttribute('onload', 'carrusel();')
    })
}