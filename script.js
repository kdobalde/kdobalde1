function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if(html.classList.contains('light')) {
  //html.classList.remove('light')
  // } else {
  // html.classList.add('light')
  // }

  // se for light mode, adicionar a imagem light, caso contrário, manter a imagem

  // pegar a tag img
  const img = document.querySelector("#profile img")
  
  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/pudim.png')
  } else {
    img.setAttribute('src', './assets/avatargato.png')
  }
}
