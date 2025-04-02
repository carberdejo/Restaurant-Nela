class Users{

    constructor( nombre, contra) {
        this.nombre = nombre;
        this.contra = contra;
    }
}




const login = () => {
    //const fondo = document.createElement('div');
    const tablero = document.createElement('div');
    tablero.classList.add('tablero')

    const closeButton = document.createElement('button');
    closeButton.id = 'close-login-btn';
    closeButton.innerHTML = '&times;'; // Símbolo de cerrar
    closeButton.addEventListener('click', closeLogin);

    document.body.appendChild(tablero)
    tablero.innerHTML = `<h2>Bienvenido</h2>
        <form id ="loginForm">
            <div class="grupo">
                <label for="name">Nombre</label>
                <input type="text" id="name" placeholder="Joseph Dar" required>
            </div>
            <div class="grupo">
                <label for="password">Contraseña</label>
                <input type="password" id="password" placeholder="********" required>
            </div>
            <div id="recordarme">
                <input type="checkbox" id="recordar">
                <label for="remember">Recordarme</label>
            </div>
            <button type="submit"  id="login-btn">Entrar</button>
        </form>
        <div id="signup-link">
            <p>¿No tienes una cuenta? <a href="#">Regístrate</a></p>
        </div>`
    
    // Añadir el botón de cerrar al contenedor
    tablero.appendChild(closeButton);
    



    function closeLogin() {
            tablero.remove();
    }

    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtener valores de los campos
        const textName = document.getElementById('name');
        const textPassword = document.getElementById('password');

        const nombre = document.querySelector('#nomb');
        const getuser = sessionStorage.getItem('user');
        const obj = JSON.parse(getuser);
        
        
        // Validar campos vacíos
        if (textName.value.trim() === '') {
            alert('Por favor, ingrese su nombre.');
            return;
        }
        
        if (textPassword.value.trim() === '') {
            alert('Por favor, ingrese su contraseña.');
            return;
        }

        // Validar la longitud mínima de la contraseña (ej. mínimo 6 caracteres)
        if (textPassword.value.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        const usuario = new Users(textName.value, textPassword.value);
        sessionStorage.setItem('user', JSON.stringify(usuario))
        
        nombre.innerHTML = obj.nombre
        
        // Validación exitosa
        alert('Inicio de sesión exitoso!');
        closeLogin();
    });
}


