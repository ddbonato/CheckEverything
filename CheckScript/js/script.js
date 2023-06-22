
function myFunction() {
  var txt;
  if (confirm("Deseja salvar em PDF!")) {
    txt = "Salvando"
  } else {
    txt = "Cancelado";
  }
  document.getElementById("demo").innerHTML = txt;
}


function myFunction2() {
    var txt2;
    if (confirm("Copiar para área de tranferência")) {
      txt2 = "Texto copiado";
    } else {
      txt2 = "Cancelado";
    }
    document.getElementById("demo2").innerHTML = txt2;
}

function lerArquivo() {
    const input = document.getElementById('inputFile');
    const arquivo = input.files[0];

    if (arquivo) {
      const leitor = new FileReader();

      leitor.onload = function(evento) {
        const conteudo = evento.target.result;
        const linhas = conteudo.split('\n').map(linha => linha.trim());
        
        console.log(linhas);
      };

      leitor.readAsText(arquivo);
    }
}

