
async function cep() {

    var valuecep = document.getElementById('cep').value;
    let response = await fetch(`https://brasilapi.com.br/api/cep/v1/${valuecep}`);
    let data = await response.json();
  
    document.getElementById("rua").value = data.street;
    document.getElementById("estado").value = data.state;
    document.getElementById("cidade").value = data.city;
    document.getElementById("bairro").value = data.neighborhood;
  }