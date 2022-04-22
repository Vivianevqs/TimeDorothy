document.getElementById("inputEnviar").addEventListener("click", validaFormulariocontato)

function validaFormulariocontato(){

  if(document.getElementById("inputNome").value != "" &&
      document.getElementById("inputEmail").value != "" &&
      document.getElementById("inputMensagem").value != "" &&
      document.getElementById("inputTelefone").value != "" ){

    alert("Prontinho! logo logo você receberá nosso contato!.")
   }else{
     alert("Por favor, preencha os campos em branco.")
   }
 }

 document.getElementById("btnCadastrarEmailEnviar").addEventListener("click", validaFormularioEmail)

 function validaFormularioEmail(){

  if(document.getElementById("inputEmailNovidades").value != "" ){

    alert("Prontinho! você receberá as novidades por email.")
   }else{
     alert("Por favor, preencha o campo de email.")
   }
  }

  function redirectWhatsapp() {
    window.open("http://api.whatsapp.com/send?1=pt_BR&phone=5511983579773");
  }

  function redirectEmail() {
    window.open("https://accounts.google.com/AccountChooser/identifier?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser");
  }

   function redirectFacebook() {
    window.open("https://pt-br.facebook.com/");
  }

  function redirectInstagram() {
    window.open("https://www.instagram.com/princepreta/");
  }

  function redirectLinkedin() {
    window.open("https://www.linkedin.com/in/solangefeliciano/");
  }

  

//JavaScript do Carousel de imagens/slideshow
  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}