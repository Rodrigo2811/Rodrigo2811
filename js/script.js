const masSobre = new XMLHttpRequest();

function loadDoc() {
 
       masSobre.onload = function () {
        document.getElementById("mas-sobre-mim").innerHTML = "Eu sempre gostei de tecnologia, desde os 14 anos ja gpstava de esta  ali na frente do computador, sempre pesquisando e procurar assuntos envolvendo a tecnologia e hoje procuro soluções para o que dizem nao ter solução, tecnologia é a minha paixão. <p> Não é à toa que eu continuo estudando e me envolvendo cada vez mas com a área." 
        this.responseText;
    }
    masSobre.open("GET", "");
    masSobre.send("");
}

