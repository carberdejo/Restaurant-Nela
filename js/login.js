function login() {
    //const fondo = document.createElement('div');
    const tablero = document.createElement('div');
    tablero.classList.add('tablero')
    //fondo.classList.add('fondo')

    document.body.appendChild(tablero)
    tablero.innerHTML = `<h2>Bienvenido</h2>
        <form>
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
            <button type="submit" onclick="finlogin()" id="login-btn">Entrar</button>
        </form>
        <div id="signup-link">
            <p>¿No tienes una cuenta? <a href="#">Regístrate</a></p>
        </div>`
        function finlogin() {
            tablero.remove();
        }
}
