let fname = document.getElementById("name");
let lastName = document.getElementById("lname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("messsage");


document.getElementById("sendData").addEventListener("click", function(event){
    event.preventDefault();

    if(fname.value === ""){
        console.log(alert("Llena el campo: Nombre"));
        return;
    }
    if(lastName.value === ""){
        console.log(alert("Llena el campo: Apellido"));
        return;
    }
    if(email.value.search('@')===-1){
        console.log(alert("Llena el campo: Correo electrónico"));
        return;
    }
    if(phone.value < 10){
        console.log(alert("Llena el campo: Telefono con 10 digitos"));
        return;
    }
    if(message.value === ""){
        console.log(alert("Ingresa un comentario"));
        return;
    }

});

