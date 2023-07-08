let cedulaIngresadaInvitado
let datosInvitado
let idRandom = Math.floor((Math.random() * 3) + 1);
let nombreCensistaAleatorio = sistema.asignarCensistaAleatorio()

document.querySelector("#btnBuscarInvitado").addEventListener("click", buscarPersona)

function buscarPersona(){

    cedulaIngresadaInvitado = document.querySelector("#cedulaIngresada").value

    cedulaIngresadaInvitado = eliminarCaracteresCedula(cedulaIngresadaInvitado, ".")
    cedulaIngresadaInvitado = eliminarCaracteresCedula(cedulaIngresadaInvitado, "-")

    if(cedulaIngresadaInvitado === ""){

        document.querySelector("#mensajeBuscador").innerHTML = "Debe ingresar su cedula"

    }else if(verificarCedula(cedulaIngresadaInvitado)){
            

        if(sistema.validarCiInvitado(cedulaIngresadaInvitado)){

            document.querySelector("#mensajeBuscador").innerHTML = "El propietario de la cedula realizo el censo anteriormente"
    
            let datosPersona = sistema.precargarDatosInvitado(cedulaIngresadaInvitado)
            mostrarFormInvitadoPrecompletado()
            document.querySelector("#nombre").value = datosPersona.nombre
            document.querySelector("#edad").value = datosPersona.edad
            document.querySelector("#cedula").value = datosPersona.cedula
            document.querySelector("#slcDepartamentos").value = datosPersona.departamento
            document.querySelector("#slcOcupacion").value = datosPersona.ocupacion
    
        }else{
    
            mostrarFormInvitado()

        }

    }else{

        document.querySelector("#mensajeFormCensista").innerHTML = "Debe ingresar una cedula valida"

    }

}

document.querySelector("#btnEnviarDatosFormInvitadoPrecompletado").addEventListener("click",validarDatosInvitadoFormPrecompletado )

//VALIDAMOS LOS DATOS CUANDO NOS ENONTRAMOS CON UN FORMULARIO PRECOMPLETADO
function validarDatosInvitadoFormPrecompletado(){

    let nombre
    let edad
    let cedula
    let slcDepartamentos
    let slcOcupacion

    nombre = document.querySelector("#nombre").value
    edad = Number(document.querySelector("#edad").value)
    cedula = document.querySelector("#cedula").value
    slcDepartamentos = document.querySelector("#slcDepartamentos").value
    slcOcupacion = document.querySelector("#slcOcupacion").value

    cedula = eliminarCaracteresCedula(cedula, ".")
    cedula = eliminarCaracteresCedula(cedula, "-")

    if(cedula === ""){

        document.querySelector("#mensajeFormCensista").innerHTML = "Debe ingresar su cedula"

    }else if(verificarCedula(cedula)){
            
        formulario = new Formulario(nombre, edad, cedula, slcDepartamentos, slcOcupacion)

        if(sistema.validarCiInvitado(cedula)){
    
            datosInvitado = sistema.actualizarDatosPrecargadosInvitado(cedula)
    
            datosInvitado.nombre = nombre
            datosInvitado.edad = edad
            datosInvitado.cedula = cedula
            datosInvitado.departamento = slcDepartamentos
            datosInvitado.ocupacion = slcOcupacion
            datosInvitado.valido = "no"

            mensajeFormularioInvitadoEnviado()

            console.log(sistema)
    
        }

    }else{

        document.querySelector("#mensajeFormCensista").innerHTML = "Debe ingresar una cedula valida"

    }

    
}

document.querySelector("#btnEnviarDatosFormInvitado").addEventListener("click",validarDatosInvitado )

//VALIDAMOS LOS DATOS CUANDO NOS ENCONTRAMOS CON UN FORMULARIO VACIO (SI TENER DATOS PRE CARGADOS)
function validarDatosInvitado(){

    let nombre
    let edad
    let cedula
    let slcDepartamentos
    let slcOcupacion
    let formulario
    let valido = "no"

    nombre = document.querySelector("#nombre").value
    edad = Number(document.querySelector("#edad").value)
    cedula = document.querySelector("#cedula").value
    slcDepartamentos = document.querySelector("#slcDepartamentos").value
    slcOcupacion = document.querySelector("#slcOcupacion").value

    if(validarDatosFormCensista(nombre,edad,cedula, slcDepartamentos, slcOcupacion)){

        cedula = eliminarCaracteresCedula(cedula, ".")
        cedula = eliminarCaracteresCedula(cedula, "-")

        if(sistema.verificarSiCiExiste(cedula)){

            document.querySelector("#mensajeFormCensista").innerHTML = "Esta cedula ya fue ingresada"
        
        }else{

            if(verificarCedula(cedula)){

            
                formulario = new Formulario(nombre, edad, cedula, slcDepartamentos, slcOcupacion, valido, idRandom)
    
                sistema.agregarFormulario(formulario)
                mensajeFormularioInvitadoEnviado()
    
                console.log(sistema)
    
            }else{
    
                document.querySelector("#mensajeFormCensista").innerHTML = "Debe ingresar una cedula valida"
    
            }

        }

    }   

    
}