function BuscarCookies() {
    var name = "ubicacion=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        valor = (c.substring(name.length, c.length));
        console.log(valor);
      }
    }
    return "";
  }