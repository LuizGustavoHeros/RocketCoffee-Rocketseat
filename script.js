function clicou() {
  const botaoFechar = document.getElementById('botao-close')
  const botaoAbrir = document.getElementById('botao-open')


  if(botaoFechar.innerHTML === `<img src="./assets/menu-buguer-close.svg">` ) {
    botaoFechar.innerHTML = ''
  }else{
    botaoFechar.innerHTML = `<img src="./assets/menu-buguer-close.svg">`
  }
  
  botaoAbrir.classList.toggle('abrir')
}