
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

  console.log(nomePet, idadePet, racaPet, pesoPet, sexoPet, obsPet)
  console.log(nomeTutor, cpfTutor, contatoTutor, cepTutor, enderecoTutor, cidadeTutor)

}

function submit() {
  const data = {
    PetName: nomePet, PetWeight: pesoPet, PetGender: sexoPet, PetIdade: idadePet, PetObs: obsPet,
    PetTutorNome: nomeTutor, PetTutorCPF: cpfTutor, PetTutorContato: contatoTutor, PetTutorCEP: cepTutor,
    PetTutorEndereco: enderecoTutor, PetTutorNumero: numeroTutor, PetTutorCidade: cidadeTutor,
  };
  postData(data)

}

async function postData(data) {

  await fetch("http://localhost:5114/api/Pets", {
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

  limpa()
  inserido()

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