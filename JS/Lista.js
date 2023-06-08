

window.addEventListener('load', function () {
  // Sua função a ser disparada quando a página for carregada
  // fetch(url).then(response =>{
  //   return response.json();
  //     }).then(data =>
  //     {
  // })
  cadPessoa();
});

function cadPessoa(nome, tutor, raca) {

  async function fetchText() {
    // var value = document.getElementById('cnpj').value;
    let response = await fetch(`http://localhost:5114/api/Pets`);
    let data = await response.json();
    console.log(data)
    // for (var i = 0; i < data.length; i++) {


    //   //pega os dados da desgraça da tabela
    //   var tb = document.getElementById("tbPessoas");
    //   var qtdLinhas = tb.rows.length;

    //   //inicia tooltip
    //   var editButton = document.createElement("button")
    //   var deleteButton = document.createElement("button")
    //   var iconeEdit = document.createElement('i');
    //   var iconeDelete = document.createElement('f');

    //   //tooltip icone editar
    //   iconeEdit.classList.add('fa-solid', 'fa-pencil');
    //   editButton.setAttribute('aria-label', 'Editar');
    //   editButton.setAttribute('onclick', 'edit()');
    //   editButton.insertBefore(iconeEdit, editButton.firstChild);
    //   editButton.id = 'editar';
    //   editButton.style.marginLeft = '5px'
    //   editButton.style.border = '1px solid black';
    //   editButton.style.borderRadius = '5px';
    //   editButton.style.backgroundColor = 'transparent';
    //   editButton.style.fontWeight = 'normal';
    //   editButton.style.textDecoration = 'none';

    //   //tooltip icone delete
    //   iconeDelete.classList.add('fa-solid', 'fa-trash-can');
    //   deleteButton.setAttribute('aria-label', 'Editar');
    //   deleteButton.appendChild(iconeDelete);
    //   deleteButton.setAttribute('onclick', 'deletar()');
    //   deleteButton.id = 'deletar';
    //   deleteButton.style.marginLeft = '5px'
    //   deleteButton.style.border = '1px solid black';
    //   deleteButton.style.borderRadius = '5px';
    //   deleteButton.style.backgroundColor = 'transparent';
    //   deleteButton.style.fontWeight = 'normal';
    //   deleteButton.style.textDecoration = 'none';

    //   //Adiciona colunas

    //   var linha = tb.insertRow(qtdLinhas);
    //   var cellInput = linha.insertCell(0);
    //   var cellCodigo = linha.insertCell(1);
    //   var cellNome = linha.insertCell(2);
    //   var cellTutor = linha.insertCell(3);
    //   var cellRaca = linha.insertCell(4);

    //   //Insere dados
    //   cellInput.appendChild(editButton);
    //   cellInput.appendChild(deleteButton);
    //   cellCodigo.innerHTML = data[i].petId;
    //   cellNome.innerHTML = data[i].petName;
    //   cellTutor.innerHTML = data[i].petWeight;
    //   cellRaca.innerHTML = data[i].petGender;

    //   //organiza classes
    //   cellInput.classList.add('col-2', 'td');
    //   cellCodigo.classList.add('col-2', 'td');
    //   cellNome.classList.add('col-2', 'td');
    //   cellTutor.classList.add('col-2', 'td');
    //   cellRaca.classList.add('col-2', 'td');

    //   //TOLLTIPS
    //   tippy('#editar', {
    //     content: 'Editar',
    //     placement: 'bottom',
    //     theme: 'fundo',
    //     animation: 'rotate'
    //   });

    //   tippy('#deletar', {
    //     content: 'Excluir',
    //     placement: 'bottom',
    //     theme: 'fundo',
    //     animation: 'rotate'
    //   });
    // }










    data.map((item, i) => {
      console.log(item.petId)
      //pega os dados da desgraça da tabela
      var tb = document.getElementById("tbPessoas");
      var qtdLinhas = tb.rows.length;

      //inicia tooltip
      var editButton = document.createElement("button")
      var deleteButton = document.createElement("button")
      var iconeEdit = document.createElement('i');
      var iconeDelete = document.createElement('f');

      //tooltip icone editar
      iconeEdit.classList.add('fa-solid', 'fa-pencil');
      editButton.setAttribute('aria-label', 'Editar');
      editButton.setAttribute('onclick', 'edit()');
      editButton.insertBefore(iconeEdit, editButton.firstChild);
      editButton.id = 'editar';
      editButton.style.marginLeft = '5px'
      editButton.style.border = '1px solid black';
      editButton.style.borderRadius = '5px';
      editButton.style.backgroundColor = 'transparent';
      editButton.style.fontWeight = 'normal';
      editButton.style.textDecoration = 'none';

      //tooltip icone delete
      iconeDelete.classList.add('fa-solid', 'fa-trash-can');
      deleteButton.setAttribute('aria-label', 'Editar');
      deleteButton.appendChild(iconeDelete);
      deleteButton.setAttribute('onclick', `deletar(${item.petId})`);
      deleteButton.id = 'deletar';
      deleteButton.style.marginLeft = '5px'
      deleteButton.style.border = '1px solid black';
      deleteButton.style.borderRadius = '5px';
      deleteButton.style.backgroundColor = 'transparent';
      deleteButton.style.fontWeight = 'normal';
      deleteButton.style.textDecoration = 'none';

      //Adiciona colunas

      var linha = tb.insertRow(qtdLinhas);
      var cellInput = linha.insertCell(0);
      var cellCodigo = linha.insertCell(1);
      var cellNome = linha.insertCell(2);
      var cellTutor = linha.insertCell(3);
      var cellRaca = linha.insertCell(4);

      //Insere dados
      cellInput.appendChild(editButton);
      cellInput.appendChild(deleteButton);
      cellCodigo.innerHTML = data[i].petId;
      cellNome.innerHTML = data[i].petName;
      cellTutor.innerHTML = data[i].petWeight;
      cellRaca.innerHTML = data[i].petGender;

      //organiza classes
      cellInput.classList.add('col-2', 'td');
      cellCodigo.classList.add('col-2', 'td');
      cellNome.classList.add('col-2', 'td');
      cellTutor.classList.add('col-2', 'td');
      cellRaca.classList.add('col-2', 'td');

      //TOLLTIPS
      tippy('#editar', {
        content: 'Editar',
        placement: 'bottom',
        theme: 'fundo',
        animation: 'rotate'
      });

      tippy('#deletar', {
        content: 'Excluir',
        placement: 'bottom',
        theme: 'fundo',
        animation: 'rotate'
      });
    })

    // }) 


  }

  fetchText()



}

function edit() {
  window.location.href = '../Html/cadastro.html'
}

function inserir() {
  window.location.href = '../Html/cadastro.html'
}
async function deletar(id) {
  console.log(id)
  const response = await fetch(`http://localhost:5114/api/Pets/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
  });

  location.reload()
  return response;

}

