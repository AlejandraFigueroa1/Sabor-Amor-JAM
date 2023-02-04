let fname = document.getElementById("fname");
let lastName = document.getElementById("lname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");


document.getElementById("formularioid").addEventListener("submit", function(event){
    event.preventDefault();

    if(fname.value === " "){
        console.log(alert("Llena el campo: Nombre o Apellido"));
        return;
    }
    if(lastName.value ===" "){
        console.log(alert("Llena el campo: Apellido"));
        return;
    }
    if(email.value.search('@')===-1 || email.value === ""){
        console.log(alert("Llena el campo: Correo electrónico"));
        return;
    }
    if(phone.value.length !== 10 || phone.value === ""){
        console.log(alert("Llena el campo: Telefono con 10 digitos"));
        return;
    }
    if(message.value === ""){
        console.log(alert("Ingresa un comentario"));
        return;
    }
    let form = document.getElementById("formularioid")
    
    form.submit();
    

});
