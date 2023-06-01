
async function cep() {

    var valuecep = document.getElementById('cep').value;
    let response = await fetch(`https://brasilapi.com.br/api/cep/v1/${valuecep}`);
    let data = await response.json();
  
    document.getElementById("rua").value = `${data.street}, ${data.neighborhood}`;
    document.getElementById("cidade").value = `${data.city} - ${data.state}`;
    // document.getElementById("estado").value = `${data.city} - ${data.state}`;
    // document.getElementById("bairro").value = ;
  }