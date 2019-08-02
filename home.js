function callValue() {
  alert("city");
  var select = document.getElementById("city");
  var city = select[select.selectedIndex].value;
  if (city === 1) {
    alert("city");
    // location = "antananarivo.html";
    window.location.replace("https://www.google.com/");
  }
}

function change() {
  alert("city");
  var x = document.getElementById("ant");
  var please = x[x.selectedIndex].value;
  if (please === 1) {
    alert("city");
    locaton.replace("https://www.google.com/");
  }
}
