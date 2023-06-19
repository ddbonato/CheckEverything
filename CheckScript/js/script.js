
function myFunction() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}


function myFunction2() {
    var txt2;
    if (confirm("Press a button!")) {
      txt2 = "You pressed OK!";
    } else {
      txt2 = "You pressed Cancel!";
    }
    document.getElementById("demo2").innerHTML = txt2;
  }

