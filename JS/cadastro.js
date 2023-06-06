
async function cep(){

    var valuecep = document.getElementById('CepTutor').value;
    let response = await fetch(`https://brasilapi.com.br/api/cep/v1/${valuecep}`);
    let data = await response.json();
  
    document.getElementById("EnderecoTutor").value = `${data.street}, ${data.neighborhood}`;
    document.getElementById("cidadeTutor").value = `${data.city} - ${data.state}`;

  }

  var nomePet;
  var idadePet;
  var racaPet;
  var pesoPet;
  var sexoPet;
  var obsPet;

  function onChangeCampos(e){
    nomePet = document.getElementById('nomePet').value;
    idadePet = document.getElementById('idadePet').value;
    racaPet = document.getElementById('racaPet').value;
    pesoPet = document.getElementById('pesoPet').value;
    sexoPet = document.getElementById('sexoPet').value;
    obsPet = document.getElementById('obsPet').value;
    
    nomeTutor = document.getElementById('nomeTutor').value;
    cpfTutor = document.getElementById('CPFTutor').value;
    contatoTutor = document.getElementById('ContatoTutor').value;
    cepTutor = document.getElementById('CepTutor').value;
    enderecoTutor = document.getElementById('EnderecoTutor').value;
    numeroTutor = document.getElementById('numeroTutor').value;
    cidadeTutor = document.getElementById('cidadeTutor').value;

    console.log(nomePet, idadePet, racaPet, pesoPet, sexoPet, obsPet)
    console.log(nomeTutor, cpfTutor, contatoTutor, cepTutor, enderecoTutor, cidadeTutor)

  }

  function submit(){
    const data = {PetName: nomePet, PetWeight: pesoPet, PetGender: sexoPet, PetIdade: idadePet, PetObs: obsPet,
                  PetTutorNome: nomeTutor, PetTutorCPF: cpfTutor, PetTutorContato: contatoTutor, PetTutorCEP: cepTutor,
                  PetTutorEndereco: enderecoTutor, PetTutorNumero: numeroTutor, PetTutorCidade: cidadeTutor, }; 
    postData(data)
  }

  async function postData(data){

    fetch("http://localhost:5114/api/Pets", {
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
