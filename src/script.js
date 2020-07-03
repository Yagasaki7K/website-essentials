window.onload = function ChangeHour() {
  var agora = new Date();
  var hora = agora.getHours();
  var checkBox = document.getElementById("myCheck");

  if ((hora >= 18 && hora <= 23) || hora < 6) {
    checkBox.checked = true;
    document.getElementsByTagName("body")[0].style.backgroundColor = "#181A1B";
    document.getElementsByTagName("div")[0].style.color = "white";
    document.getElementsByTagName("div")[3].style.color = "white";
    document.getElementsByTagName("font")[0].style.color = "white";
    document.getElementsByTagName("font")[1].style.color = "white";
    document.getElementsByTagName("font")[2].style.color = "white";
    document.getElementsByTagName("hr")[1].style.color = "white";
    document.getElementsById("copyright")[1].style.color = "white";
  } else if (hora >= 6 && hora <= 17) {
    checkBox.checked = false;
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
    document.getElementsByTagName("div")[0].style.color = "black";
    document.getElementsByTagName("div")[3].style.color = "black";
    document.getElementsByTagName("font")[0].style.color = "black";
    document.getElementsByTagName("font")[1].style.color = "black";
    document.getElementsByTagName("font")[2].style.color = "black";
    document.getElementsByTagName("hr")[1].style.color = "black";
    document.getElementsById("copyright")[1].style.color = "black";
  }
};

AOS.init({
  duration: 1200,
});

function greenFunction() {
  document.getElementById("logohead").src = "../public/image/logogreen.png";
  var indexColor = 0;
  while (indexColor < 150) {
    document.getElementsByTagName("a")[indexColor].style.color = "#17bf69";
    indexColor++;
  }
}

function blueFunction() {
  document.getElementById("logohead").src = "../public/image/logoblue.png";
  var indexColor = 0;
  while (indexColor < 150) {
    document.getElementsByTagName("a")[indexColor].style.color = "#1da1f2";
    indexColor++;
  }
}

function pinkFunction() {
  document.getElementById("logohead").src = "../public/image/logopink.png";
  var indexColor = 0;
  while (indexColor < 150) {
    document.getElementsByTagName("a")[indexColor].style.color = "#e0245e";
    indexColor++;
  }
}

function orangeFunction() {
  document.getElementById("logohead").src = "../public/image/logoorange.png";
  var indexColor = 0;
  while (indexColor < 150) {
    document.getElementsByTagName("a")[indexColor].style.color = "#f45d22";
    indexColor++;
  }
}

function changeImage() {
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#181A1B";
    document.getElementsByTagName("div")[0].style.color = "white";
    document.getElementsByTagName("div")[3].style.color = "white";
    document.getElementsByTagName("font")[0].style.color = "white";
    document.getElementsByTagName("font")[1].style.color = "white";
    document.getElementsByTagName("font")[2].style.color = "white";
    document.getElementsByTagName("hr")[1].style.color = "white";
    document.getElementsById("copyright")[1].style.color = "white";
  } else {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
    document.getElementsByTagName("div")[0].style.color = "black";
    document.getElementsByTagName("div")[3].style.color = "black";
    document.getElementsByTagName("font")[0].style.color = "black";
    document.getElementsByTagName("font")[1].style.color = "black";
    document.getElementsByTagName("font")[2].style.color = "black";
    document.getElementsByTagName("hr")[1].style.color = "black";
    document.getElementsById("copyright")[1].style.color = "black";
  }
}

function ptbr() {
  document.getElementById("head1").innerHTML =
    "Aplicativos essenciais para seu computador";
  document.getElementById("head2").innerHTML =
    "Softwares para um bom funcionamento e úteis para seu computador | <i>Build 1.7.7</i> de 0 de Julho —";
  document.getElementById("backup").innerHTML = "Programas de Backup / Nuvem";
  document.getElementById("comunication").innerHTML =
    "Programas de Comunicações";
  document.getElementById("developer").innerHTML =
    "Programas de Desenvolvimento";
  document.getElementById("entretenimento").innerHTML =
    "Programas de Entretenimento";
  document.getElementById("navegation").innerHTML =
    "Programas de Navegadores (Browser)";
  document.getElementById("opsystem").innerHTML = "Sistema Operacional";
  document.getElementById("utylitys").innerHTML = "Programas de Utilitários";
  document.getElementById("softwareask").innerHTML =
    'O software desejado não está na lista? Informe através das redes sociais — <b>Feito com <font color="red">❤</font> pela Kalify Inc.';
  document.getElementById("copyright2").innerHTML =
    '© Copyright 2017-2020 | Esse site é desenvolvido por <a href="https://www.facebook.com/AndersonMarlonDesign/" target="_blank">Anderson Marlon</a> e hospedado em <a href="https://www.netlify.com/" target="_blank">Netlify</a>. O código do site está hospedado no <a href="http://www.github.com/" target="_blank">GitHub</a>';
  document.getElementById("dev1").innerHTML = "Desenvolvedores";
  document.getElementById("dev2").innerHTML = "Desenvolvedores";
  document.getElementById("dev3").innerHTML = "Desenvolvedores";
  document.getElementById("dev4").innerHTML = "Desenvolvedores";
  document.getElementById("dev5").innerHTML = "Desenvolvedores";
  document.getElementById("dev6").innerHTML = "Desenvolvedores";
  document.getElementById("dev7").innerHTML = "Desenvolvedores";
}

function enusa() {
  document.getElementById("head1").innerHTML =
    "Essential applications for your computer";
  document.getElementById("head2").innerHTML =
    "Softwares for a good functioning and useful for your computer | <i> Build 1.7.7</i> of July 07th -";
  document.getElementById("backup").innerHTML = "Backup / Cloud Programs";
  document.getElementById("comunication").innerHTML = "Communication Programs";
  document.getElementById("developer").innerHTML = "Development Programs";
  document.getElementById("entretenimento").innerHTML =
    "Entertainment Programs";
  document.getElementById("navegation").innerHTML = "Browser Programs";
  document.getElementById("opsystem").innerHTML = "Operational System";
  document.getElementById("utylitys").innerHTML = "Utility Programs";
  document.getElementById("softwareask").innerHTML =
    'Is the desired software not listed? Report through social networks - <b> Done with <font color = "red"> ❤ </font> by Kalify Inc.';
  document.getElementById("copyright2").innerHTML =
    '© Copyright 2017-2020 | Thie site is build for <a href="https://www.facebook.com/AndersonMarlonDesign/" target="_blank">Anderson Marlon</a> and hosted on <a href="https://www.netlify.com/" target="_blank">Netlify</a>. The source code is hosted on <a href="http://www.github.com/" target="_blank">GitHub</a>.';
  document.getElementById("dev1").innerHTML = "Developers";
  document.getElementById("dev2").innerHTML = "Developers";
  document.getElementById("dev3").innerHTML = "Developers";
  document.getElementById("dev4").innerHTML = "Developers";
  document.getElementById("dev5").innerHTML = "Developers";
  document.getElementById("dev6").innerHTML = "Developers";
  document.getElementById("dev7").innerHTML = "Developers";
}
