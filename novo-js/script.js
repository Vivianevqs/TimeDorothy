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
    window.open("mailto:vivianeq.silva@gmail.com");
  }