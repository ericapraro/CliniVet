
var nomeUsuario;
var cargoUsuario;
var loginUsuario;
var senhaUsuario;

function onChangeCampos(e){
  nomeUsuario = document.getElementById('usuarioNome').value;
  cargoUsuario = document.getElementById('usuarioCargo').value;
  loginUsuario = document.getElementById('usuarioLogin').value;
  senhaUsuario = document.getElementById('usuarioSenha').value;  

  console.log(nomeUsuario, cargoUsuario, loginUsuario, senhaUsuario)

}

function submit(){
  const data = {UsuarioName: nomeUsuario, UsuarioCargo: cargoUsuario, UsuarioLogin: loginUsuario, UsuarioSenha: senhaUsuario }; 
  postData(data)
}

async function postData(data){

  fetch("http://localhost:5114/api/Usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
}

function confirmaSenha() {
  let senha = document.getElementById('usuarioSenha').value;  
  let confirmaSenha = document.getElementById('confirmaSenha').value;  
  
  if(senha != confirmaSenha){
    alert('As senhas são diferentes!');
  return false;
  }
  submit();
  return true;
}