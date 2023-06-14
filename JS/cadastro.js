var loc = window.location.search.substring(1, window.location.search.length);
var idPet = loc.split("=")[1];

inicio()
function inicio() {
  if (idPet > 0)
    idUrl()
}

async function idUrl() {
  let response = await fetch(`http://localhost:5114/api/Pets/${idPet}`);
  let data = await response.json();

  cod = document.getElementById('cod').value = idPet;
  nomePet = document.getElementById('nomePet').value = data.petName;
  idadePet = document.getElementById('idadePet').value = data.petIdade;
  racaPet = document.getElementById('racaPet').value = data.petRaca;
  pesoPet = document.getElementById('pesoPet').value = data.petWeight;
  sexoPet = document.getElementById('sexoPet').value = data.petGender;
  obsPet = document.getElementById('obsPet').value = data.petObs;

  nomeTutor = document.getElementById('nomeTutor').value = data.petTutorNome;
  cpfTutor = document.getElementById('CPFTutor').value = data.petTutorCPF;
  contatoTutor = document.getElementById('ContatoTutor').value = data.petTutorContato;
  cepTutor = document.getElementById('CepTutor').value = data.petTutorCEP;
  enderecoTutor = document.getElementById('EnderecoTutor').value = data.petTutorEndereco;
  numeroTutor = document.getElementById('numeroTutor').value = data.petTutorNumero;
  cidadeTutor = document.getElementById('cidadeTutor').value = data.petTutorCidade;
}


async function cep() {

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

var nomeTutor;
var cpfTutor;
var contatoTutor;
var cepTutor;
var enderecoTutor;
var numeroTutor;
var cidadeTutor;


function onChangeCampos(e) {
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

}

function submit() {

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

  if(nomePet == '' || idadePet == '' || racaPet == '' || pesoPet == '' || sexoPet == '' || obsPet == '' || nomePet == ''|| 
     nomeTutor == '' || cpfTutor == '' || contatoTutor == '' || cepTutor == '' || enderecoTutor == '' || numeroTutor == ''|| cidadeTutor == '') {
    return alert('Todos os campos devem ser preenchidos!')
  }
  else {
    const data = {
      PetName: nomePet, PetWeight: pesoPet, PetGender: sexoPet, PetRaca: racaPet, PetIdade: idadePet, PetObs: obsPet,
      PetTutorNome: nomeTutor, PetTutorCPF: cpfTutor, PetTutorContato: contatoTutor, PetTutorCEP: cepTutor,
      PetTutorEndereco: enderecoTutor, PetTutorNumero: numeroTutor, PetTutorCidade: cidadeTutor
    };

    const dataPut = {
      PetName: nomePet, PetWeight: pesoPet, PetGender: sexoPet, PetRaca: racaPet, PetIdade: idadePet, PetObs: obsPet,
      PetTutorNome: nomeTutor, PetTutorCPF: cpfTutor, PetTutorContato: contatoTutor, PetTutorCEP: cepTutor,
      PetTutorEndereco: enderecoTutor, PetTutorNumero: numeroTutor, PetTutorCidade: cidadeTutor, PetId: idPet,
    };

    if (idPet > 0)
      putData(dataPut)
    else
      postData(data)

  }

}


async function postData(data) {
  await fetch("http://localhost:5114/api/Pets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    // .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      if (data.status != 404) {
        limpa()
        inserido()
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    })

  // limpa()
  // inserido()

}

async function putData(data) {

  await fetch(`http://localhost:5114/api/Pets/${idPet}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    // .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      if (data.status != 404) {
        limpa()
        inserido()
      }

    })
    .catch((error) => {
      console.log(data)
      console.error("Error:", error);
    })



}

function limpa() {

  nomePet = document.getElementById('nomePet').value = null;
  idadePet = document.getElementById('idadePet').value = null;
  racaPet = document.getElementById('racaPet').value = null;
  pesoPet = document.getElementById('pesoPet').value = null;
  sexoPet = document.getElementById('sexoPet').value = null;
  obsPet = document.getElementById('obsPet').value = null;

  nomeTutor = document.getElementById('nomeTutor').value = null;
  cpfTutor = document.getElementById('CPFTutor').value = null;
  contatoTutor = document.getElementById('ContatoTutor').value = null;
  cepTutor = document.getElementById('CepTutor').value = null;
  enderecoTutor = document.getElementById('EnderecoTutor').value = null;
  numeroTutor = document.getElementById('numeroTutor').value = null;
  cidadeTutor = document.getElementById('cidadeTutor').value = null;
}

function inserido() {

  var div = document.getElementById('divSpan');
  const paragrafo = document.createElement("p");
  paragrafo.id = "inserido";
  const conteudo = document.createTextNode('Cliente cadastrado com sucesso!');
  paragrafo.appendChild(conteudo);
  paragrafo.classList.add('span');
  div.appendChild(paragrafo);

  setTimeout(function () {
    var div = document.getElementById('divSpan');
    var para = document.getElementById('inserido');
    div.removeChild(para);
  }, 2000);

}