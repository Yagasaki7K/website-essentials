function changeImage() {

    if (document.getElementById("imgClickAndChange").src == "https://i.imgur.com/AbzUitZ.png") 
    {
        document.getElementById("imgClickAndChange").src = "https://i.imgur.com/BwAPQdH.png";
        document.getElementsByTagName("body")[0].style.backgroundColor = "#1b2836";
        document.getElementsByTagName("div")[0].style.color = "white";
        document.getElementsByTagName("div")[3].style.color = "white";
        document.getElementsByTagName("font")[0].style.color = "white";
        document.getElementsByTagName("font")[1].style.color = "white";
        document.getElementsByTagName("font")[2].style.color = "white";
        document.getElementsByTagName("hr")[1].style.color = "white";
        document.getElementsById("copyright")[1].style.color = "white";
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "https://i.imgur.com/AbzUitZ.png";
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
    document.getElementById('head1').innerHTML = 'Aplicativos essenciais para seu computador';
    document.getElementById('head2').innerHTML = 'Softwares para um bom funcionamento e úteis para seu computador | <i>Build 1.6.8</i> de 12 de Abril —';
    document.getElementById('backup').innerHTML = 'Programas de Backup / Nuvem';
    document.getElementById('comunication').innerHTML = 'Programas de Comunicações';
    document.getElementById('developer').innerHTML = 'Programas de Desenvolvimento';
    document.getElementById('entretenimento').innerHTML = 'Programas de Entretenimento';
    document.getElementById('navegation').innerHTML = 'Programas de Navegadores (Browser)';
    document.getElementById('opsystem').innerHTML = 'Sistema Operacional';
    document.getElementById('utylitys').innerHTML = 'Programas de Utilitários';
    document.getElementById('softwareask').innerHTML = 'O software desejado não está na lista? Informe através das redes sociais — <b>Feito com <font color="red">❤</font> pelo Anderson "Yagasaki" Marlon';
    document.getElementById('copyright2').innerHTML = '© Copyright 2017-2019 | Esse site é desenvolvido por <a href="https://www.facebook.com/AndersonMarlonDesign/" target="_blank">Anderson Marlon</a> e hospedado em <a href="https://www.netlify.com/" target="_blank">Netlify</a>. O código do site está hospedado no <a href="http://www.github.com/" target="_blank">GitHub</a>';
}

function enusa() {
    document.getElementById('head1').innerHTML = 'Essential applications for your computer';
    document.getElementById('head2').innerHTML = 'Softwares for a good functioning and useful for your computer | <i> Build 1.6.8 </i> of April 12 -';
    document.getElementById('backup').innerHTML = 'Backup / Cloud Programs';
    document.getElementById('comunication').innerHTML = 'Communication Programs';
    document.getElementById('developer').innerHTML = 'Development Programs';
    document.getElementById('entretenimento').innerHTML = 'Entertainment Programs';
    document.getElementById('navegation').innerHTML = 'Browser Programs';
    document.getElementById('opsystem').innerHTML = 'Operational System';
    document.getElementById('utylitys').innerHTML = 'Utility Programs';
    document.getElementById('softwareask').innerHTML = 'Is the desired software not listed? Report through social networks - <b> Done with <font color = "red"> ❤ </font> by Anderson "Yagasaki" Marlon';
    document.getElementById('copyright2').innerHTML = '© Copyright 2017-2019 | Thie site is build for <a href="https://www.facebook.com/AndersonMarlonDesign/" target="_blank">Anderson Marlon</a> and hosted on <a href="https://www.netlify.com/" target="_blank">Netlify</a>. The source code is hosted on <a href="http://www.github.com/" target="_blank">GitHub</a>.';
}
