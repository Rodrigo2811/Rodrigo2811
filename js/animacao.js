const menuDiv = document.getElementById('menu-mobile')
const btnanimar = document.getElementById('btn-menuMobile')

menuDiv.addEventListener('click', animar)

function animar() {
  menuDiv.classList.toggle('abrir')
  btnanimar.classList.toggle('ativo')
}