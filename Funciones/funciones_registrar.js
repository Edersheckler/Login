let cont = 0;
let contAux = 0;
var uno = false;
var dos = false;
var tres = false;
var cuatro = false;


document.getElementById("formu").addEventListener("submit", function(event){

let hasError = false;

valorEmail = document.getElementById('emailForm').value;
valorNombre = document.getElementById('nombreForm').value;
valorContraseña = document.getElementById('contraseñaForm').value;

//Validar campos vacios

if( valorEmail == null || valorEmail.length == 0) {
  alert('Error, el campo Email está vacio');
  hasError = true;
  uno = false;
  console.log(uno);
}else{ uno = true; console.log(uno);}

if( valorNombre == null || valorNombre.length == 0) {
  alert('Error, rellena el campo nombre');
  hasError = true;
  dos = false;
  console.log(dos);
}else{ dos = true; console.log(dos);}

if( valorContraseña == null || valorContraseña.length == 0) {
  alert('Error, el campo contraseña está vacio');
  hasError = true;
  tres = false;
  console.log(tres);
}else{ tres = true;  console.log(tres);}

if(!radioFrame.checked ){
  alert('Necesita Aceptar los terminos y condiciones');
  hasError = true;
  cuatro = false;
  console.log(cuatro);
}else{ cuatro =true; console.log(cuatro);}

//Validaciones Especificas en Gmail y Contraseña


//Validar los datos de Gmail
var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
var esValido = expReg.test(valorEmail);
if (esValido==true) {
    alert('El correo electronico es valido')
    cont++;
    
}else{
    alert('El correo electronico NO es valido')
    hasError = true;
}

//Validar Contraseña
if ($('#contraseñaForm').val().length >   6 ) { 
alert('Contraseña cumple con los requisitos');
cont++;         
}else{
    alert('La contraseña NO cumple con los requisitos')
    hasError = true;
}

//Si hay error no se ejecuta el submit
if(hasError) event.preventDefault();

});

//cambiando de color del boton 


$(".mandatoryfields").on("change", function () {
    if($('#emailForm').val().length > 0 && $('#nombreForm').val().length > 0  && $('#contraseñaForm').val().length > 0 && radioFrame.checked){
    $('#vl').css({background:'#1A75CF', color:'white'})

    }
    else{
        $('#vl').css({background:'white' , color:'#1A75CF;'})
    }

});
