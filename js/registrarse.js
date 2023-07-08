let txtNombreCensista
let txtNombreUsuario;
let password;
let nuevoCensista;


document.querySelector("#btnRegistrarse").addEventListener("click", registrarse)

function registrarse(){
    
    let censistaRegistrado = false

    txtNombreCensista = document.querySelector("#txtNombreCensista").value
    txtNombreUsuario = document.querySelector("#txtNombreUsuario").value
    password = document.querySelector("#password").value

    if(txtNombreUsuario === "" || txtNombreCensista === "" || password === ""){
        document.querySelector("#aviso").innerHTML = "Debe completar todos los campos"

    }else if(sistema.existeNombreUsuarioCensistaARegistrar(txtNombreUsuario)){

        document.querySelector("#aviso").innerHTML = "El nombre de usuario ya existe, debe probar con otro"

    }else if(!claveValidaRegistrarse(password)){

        document.querySelector("#aviso").innerHTML = "La contraseña debe tener 5 o mas caracteres, una miniscula, una mayuscula y un numero"
        console.log(claveValidaRegistrarse(password))
    }else{

        nuevoCensista = new Censista(sistema.obtenerIdProximoCensista(),txtNombreCensista,txtNombreUsuario, password)
        sistema.agregarCensista(nuevoCensista)
        console.log(sistema)
        console.log(nuevoCensista)

        censistaRegistrado = true
    }
    
    limpiarCamposRegistrarse()

    if(censistaRegistrado){
        verLogin()
    }


}

