function confere() {

  loginUsuario = document.getElementById('login').value;
  senhaUsuario = document.getElementById('senha').value;

  async function fetchText() {
    // var value = document.getElementById('cnpj').value;
    let response = await fetch(`http://localhost:5114/api/Usuario`);
    let data = await response.json();
    console.log(data)

    for (var u in data) {
      var usuario = data[u].usuarioLogin;
      var senha = data[u].usuarioSenha;

      if (usuario == loginUsuario && senha == senhaUsuario) {
        window.location.href = '../Html/cadastro.html'
        return true
      }
      // } else{
      //   alert('Login ou senha incorretos!')
      //   console.log(usuario + ' ' + senha)
      //   console.log(loginUsuario + ' ' + senhaUsuario)
      //   return false
      // }

    }
    alert('Login ou senha incorretos!')
    return false

  }

  fetchText()

}