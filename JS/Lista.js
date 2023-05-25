function cadPessoa(nome, altura, sexo) {
    var tb = document.getElementById("tbPessoas");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellAltura = linha.insertCell(2);
    var cellSexo = linha.insertCell(3);

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellAltura.innerHTML = altura;
    cellSexo.innerHTML = sexo;

  }