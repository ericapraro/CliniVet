function cadPessoa(nome, tutor, exame, raca) {
    var tb = document.getElementById("tbPessoas");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);
    var editButton = document.createElement("button")
    var deleteButton = document.createElement("button")
    var iconeEdit = document.createElement('i');
    var iconeDelete = document.createElement('f');

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

    iconeDelete.classList.add('fa-solid', 'fa-trash-can'); 
    deleteButton.setAttribute('aria-label', 'Editar');
    deleteButton.appendChild(iconeDelete);
    deleteButton.id = 'deletar';
    deleteButton.style.marginLeft = '5px'
    deleteButton.style.border = '1px solid black';
    deleteButton.style.borderRadius = '5px';
    deleteButton.style.backgroundColor = 'transparent';
    deleteButton.style.fontWeight = 'normal';
    deleteButton.style.textDecoration = 'none';

    var cellInput = linha.insertCell(0);
    var cellCodigo = linha.insertCell(1);
    var cellNome = linha.insertCell(2);
    var cellTutor = linha.insertCell(3);
    var cellRaca = linha.insertCell(4);
    var cellExame = linha.insertCell(5);

    cellInput.appendChild(editButton);
    cellInput.appendChild(deleteButton);
    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellTutor.innerHTML = tutor;
    cellRaca.innerHTML = raca;
    cellExame.innerHTML = exame;

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

  }

  function edit(){
    window.location.href = '../Html/cadastro.html'
  }

  function inserir(){
    window.location.href = '../Html/cadastro.html'
  }