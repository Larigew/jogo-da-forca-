let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

let jogoAutomatico = true;

const palavras = [
    palavra001={
        nome: "ALEMANHA",
        categoria: "PAÍSES"
    } , 
    palavra002={
        nome: "INGLATERRA",
        categoria: "PAÍSES"
    } , 
    palavra003={
        nome: "BRASIL",
        categoria: "PAÍSES"
    } , 
    palavra004={
        nome: "ITALIA",
        categoria: "PAÍSES"
    } , 
    palavra005={
        nome: "ESPANHA",
        categoria: "PAÍSES"
    } , 
    palavra006={
        nome: "REI LEAO",
        categoria: "DISNEY"
    } , 
    palavra007={
        nome: "A BELA E A FERA",
        categoria: "DISNEY"
    } , 
    palavra008={
        nome: "ENROLADOS",
        categoria: "DISNEY"
    } , 
    palavra009={
        nome: "ALLADIN",
        categoria: "DISNEY"
    } , 
    palavra010={
        nome: "CINDERELA",
        categoria: "DISNEY"
    } , 
    palavra011={
        nome: "CACHORRO",
        categoria: "ANIMAIS"
    } , 
    palavra012={
        nome: "ZEBRA",
        categoria: "ANIMAIS"
    } , 
    palavra013={
        nome: "GATO",
        categoria: "ANIMAIS"
    } , 
    palavra014={
        nome: "ELEFANTE",
        categoria: "ANIMAIS"
    } , 
    palavra015={
        nome: "TIGRE",
        categoria: "ANIMAIS"
    } , 
    palavra016={
        nome: "DENTISTA",
        categoria: "PROFISSÃO"
    } , 
    palavra017={
        nome: "ESTILISTA",
        categoria: "PROFISSÃO"
    } , 
    palavra018={
        nome: "CONFEITERO",
        categoria: "PROFISSÃO"
    } , 
    palavra019={
        nome: "ATOR",
        categoria: "PROFISSÃO"
    } , 
    palavra020={
        nome: "PROFESSOR",
        categoria: "PROFISSÃO"
    } , 
];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
   
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)

}   

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela=document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    console.log(palavraSecretaSorteada)

    for(i = 0; i < palavraSecretaSorteada.length; i++) {
        if(listaDinamica[i]==undefined){
            if(palavraSecretaSorteada[i]==" "){
                listaDinamica[i]=" ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i]= "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        }
        else{
            if(palavraSecretaSorteada[i]==" "){
                listaDinamica[i]=" ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
  
            }
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra, false);
        comparaListas(letra);
        montarPalavraNaTela();
    } 
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background="#C71585";
    document.getElementById(tecla).style.color="#ffffff";
}

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--;
        carregaImagemForca();

        if(tentativas == 0){
            abreModal("OPS!" , "Não foi dessa vez... A palavra era " + palavraSecretaSorteada);
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i]==letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true){
        abreModal("PARABÉNS!" , "Você venceu...");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5: 
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4: 
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3: 
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2: 
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1: 
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0: 
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo

    let modalbody = document.getElementById("modalBody");
    modalbody.innerHTML = mensagem;

    $("#meumodal").modal({
        show: true
    });
}

let reiniciar = document.querySelector("#reiniciar")
reiniciar.addEventListener("click", function(){
    location.reload();
});
