
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

