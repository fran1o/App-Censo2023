let nombreUsuarioCensista
let claveCensista

document.querySelector("#btnLoginCensista").addEventListener("click", iniciarSesion)

function iniciarSesion(){    

    nombreUsuarioCensista = document.querySelector("#nombreUsuarioCensista").value
    claveCensista = document.querySelector("#claveCensista").value

    if(nombreUsuarioCensista === "" || claveCensista === ""){

        document.querySelector("#avisoLogin").innerHTML = "Debe completar todos los campos"

    }

    sistema.usuarioLogueado = sistema.existeCensistaLogueado(nombreUsuarioCensista, claveCensista)

    if(sistema.usuarioLogueado !== null){

        verNavBarCensista()
        mostrarFormCensista()
        document.querySelector("#nombreUsuarioCensista").value = ""
        document.querySelector("#claveCensista").value = ""
        document.querySelector("#bienvenido").innerHTML = `Bienvenido/a ${sistema.usuarioLogueado.nombreUsuario}`

    }else{

        document.querySelector("#avisoLogin").innerHTML = "Usuario no encontrado, revise que los datos ingresados sean correctos"

    }

    console.log(sistema.usuarioLogueado)
}

document.querySelector("#cerrar-sesion").addEventListener("click", cerrarSesion)

function cerrarSesion(){

    sistema.usuarioLogueado = null
    mostrarBienvenida()
    ocultarNavs()
}

