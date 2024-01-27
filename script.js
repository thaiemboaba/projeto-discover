function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')


  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light-2.jpg")
    img.setAttribute(
      "alt",
      "foto de Mayk Brito sorrindo, com óculos de sol. Fundo gradiente roxo e azul"
    )
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-2.jpg")
    img.setAttribute(
      "alt",
      "foto de Mayk Brito sorrindo, sem óculos de sol. Fundo gradiente roxo e azul"
    )

  }
}