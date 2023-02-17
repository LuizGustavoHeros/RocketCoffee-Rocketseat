function clicou() {
  const botaoFechar = document.getElementById('botao-close')
  const botaoAbrir = document.getElementById('botao-open')
  const nav = document.getElementById('nav')
  const main = document.querySelector('main')
  const footer = document.querySelector('footer')

  if(botaoFechar.innerHTML === `<img src="./assets/menu-buguer-close.svg">` ) {
    botaoFechar.innerHTML = ''
  }else{
    botaoFechar.innerHTML = `<img src="./assets/menu-buguer-close.svg">`
  }
  
  botaoAbrir.classList.toggle('abrir')
  nav.classList.toggle('navegacao-open')
  main.classList.toggle('abrir')
  footer.classList.toggle('abrir')
}