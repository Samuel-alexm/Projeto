function toggleMode() {
  const html = document.documentElement
 html.classList.toggle("light")

 const img = document.querySelector("#Profile img")

 if(html.classList.contains("light")) {         

  img.setAttribute("src","./assets/avatar-light.png")
 } else {
   img.setAttribute("src", "./assets/pessoa.png")

 }
}








  


 
  

