
async function confere() {

    let loginUsuario = document.getElementById('login').value;
    let senhaUsuario = document.getElementById('senha').value;

    const data = {
      UsuarioLogin: loginUsuario, UsuarioSenha: senhaUsuario
    };
    
    await fetch("http://localhost:5114/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if(data.status == 200)
          window.location.href = 'clientesLista.html'
        else
          alert('Usuário ou senha incorretos!')
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  
  }

