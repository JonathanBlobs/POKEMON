const botaoAlterarTema = document.getElementById ("tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".img-botao")

botaoAlterarTema.addEventListener("click", () => {

  const modoEscuroAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if(modoEscuroAtivo){

    body.classList.remove("modo-escuro");

    imagemBotaoTrocaDeTema.setAttribute("src", "./pokemon/src/imagens/sun.png");

  } else {

    body.classList.add("modo-escuro");

    imagemBotaoTrocaDeTema.setAttribute("src", "./pokemon/src/imagens/moon.png");
  }

});