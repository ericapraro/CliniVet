function confere() {

    loginUsuario = document.getElementById('login').value;
    senhaUsuario = document.getElementById('senha').value;  
    
    async function fetchText() {
      // var value = document.getElementById('cnpj').value;
      let response = await fetch(`http://localhost:5114/api/Usuario`);
      let data = await response.json();
      console.log(data)
  
      data.map((item, i ) => {
        console.log(item.petId)
       
        var login = data[i].UsuarioLogin;
        var senha = data[i].UsuarioSenha;

    })


  }
  
    fetchText()
  
  }