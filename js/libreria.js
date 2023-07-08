function limpiarCamposRegistrarse(){

    document.querySelector("#txtNombreCensista").value = ""
    document.querySelector("#txtNombreUsuario").value = ""
    document.querySelector("#password").value = ""
}

//VALIDAMOS LA CONTRASEÑA CREADA AL REGISTRARSE
function claveValidaRegistrarse(password){

    let valida = false
    let contMay = false
    let contMin = false
    let conNum = false

    if(password.length >= 5){
        
        for (let i = 0; i < password.length; i++){

            if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
                contMay++
    
            } else if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
                contMin++
    
            } else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
                conNum++
            }
    
            if (contMay && contMin && conNum) {
                valida = true
                break;
                ;
            }
        }
    }
    

    return valida;


}

//VALIDAMOS LOS DATOS DEL FORMULARIO
function validarDatosFormCensista(nombre,edad,cedula,slcDepartamentos,slcOcupacion){

    let mensajes = ""
    let formularioValido = true

    if(nombre === "" || edad === "" || cedula === ""){

        mensajes += "Debe completar todos los campos"
        formularioValido = false

    }else if(edad > 130 || edad < 0){

        mensajes += "La edad ingresadaba debe ser entre 0 y 130"
        formularioValido = false
    }


    switch(slcDepartamentos){
        
        case "1":
            slcDepartamentos = "Artigas"
        break
        case "2":
            slcDepartamentos = "Salto"
        break
        case "3":
            slcDepartamentos = "Paysandu"
        break
        case "4":
            slcDepartamentos = "Rio Negro"
        break
        case "5":
            slcDepartamentos = "Soriano"
        break
        case "6":
            slcDepartamentos = "Colonia"
        break
        case "7":
            slcDepartamentos = "Rivera"
        break
        case "8":
            slcDepartamentos = "Tacuarembo"
        break
        case "9":
            slcDepartamentos = "Durazno"
        break
        case "10":
            slcDepartamentos = "Flores"
        break
        case "11":
            slcDepartamentos = "Florida"
        break
        case "12":
            slcDepartamentos = "San Jose"
        break
        case "13":
            slcDepartamentos = "Canelones"
        break
        case "14":
            slcDepartamentos = "Montevideo"
        break
        case "15":
            slcDepartamentos = "Cerro Largo"
        break
        case "16":
            slcDepartamentos = "Treinta y tres"
        break
        case "17":
            slcDepartamentos = "Lavalleja"
        break
        case "18":
            slcDepartamentos = "Maldonado"
        break
        case "19":
            slcDepartamentos = "Rocha"
        break
        default:
            mensajes = "Debe seleccionar un departamento"
            formularioValido = false
        break
    }

    switch(slcOcupacion){

        case "dependiente":
            slcOcupacion = "Dependiente"
        break
        case "independiente":
            slcOcupacion = "Independiente"
        break
        case "estudiante":
            slcOcupacion = "Estudiante"
        break
        case "no-trabaja":
            slcOcupacion = "No trabaja"
        break
        default:
            mensajes = "Debe seleccionar una ocupacion"
            formularioValido = false
        break
    }
    
    document.querySelector("#mensajeFormCensista").innerHTML = mensajes

    return formularioValido


}

//VERIFICAMOS LA CEDULA
function verificarCedula(cedula){

    let digitoVerificadorIngresado = cedula.charAt(cedula.length-1)
    let digitoVerificadorCalculado 
    let numeroVerificador = "2987634"
    let acumulador = 0               
    let cedulaValida = false

    if(cedula.length === 7){
        cedula = "0" + cedula
    }

    for(let i = 0; i < cedula.length-1; i++){

        acumulador += Number(cedula.charAt(i)) * Number(numeroVerificador.charAt(i))

    }

    if(acumulador % 10 === 0){

        digitoVerificadorCalculado = 0

    }else{
        
        digitoVerificadorCalculado = 10 - (acumulador % 10)

    }
    

    if(Number(digitoVerificadorCalculado) === Number(digitoVerificadorIngresado)){
        cedulaValida = true
        
    }

    return cedulaValida

}

function eliminarCaracteresCedula(cedula, caracteresAEliminar){

    let cedulaSinPuntosyGuiones = ""

    for(let i = 0; i < cedula.length; i++){

        if(cedula.charAt(i) !== caracteresAEliminar){

            cedulaSinPuntosyGuiones += cedula.charAt(i)

        }

    }
    
    return cedulaSinPuntosyGuiones

}

//VALIDAMOS DATOS CUANDO ENCONTRAMOS UN FORMULARIO CON DATOS CARGADOS
function validarDatosPrecompletados(nombre,edad,cedula){
    let mensajes = ""
    let formularioValido = true

    if(nombre === "" || edad === "" || cedula === ""){

        mensajes += "Debe completar todos los campos"
        formularioValido = false

    }else if(edad > 130 || edad < 0){

        mensajes += "La edad ingresadaba debe ser entre 0 y 130"
        formularioValido = false
    }

    document.querySelector("#mensajeFormPrecompletado").innerHTML = mensajes

    return formularioValido
}