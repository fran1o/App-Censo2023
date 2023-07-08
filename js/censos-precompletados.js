let cedulaABuscar
let personaEncontrada

document.querySelector("#btnBuscarPersona").addEventListener("click", buscador)

function buscador(){
  
  console.log(sistema)

  cedulaABuscar = document.querySelector("#buscador").value
  cedulaABuscar = eliminarCaracteresCedula(cedulaABuscar,".")
  cedulaABuscar = eliminarCaracteresCedula(cedulaABuscar,"-")

  personaEncontrada = sistema.buscarPersona(cedulaABuscar, sistema.usuarioLogueado.numeroIdentificador)

  if(personaEncontrada !== null){

    document.querySelector("#persona-no-encontrada").innerHTML = ""
    document.querySelector("#contenedor-form-precompletado").style.display = "block"
    document.querySelector("#btnEnviarDatosFormCensistaDesdePrecompletados").style.display = "block"
    document.querySelector("#nombreGuardado").value = personaEncontrada.nombre
    document.querySelector("#edadGuardada").value = personaEncontrada.edad
    document.querySelector("#cedulaGuardada").value = personaEncontrada.cedula
    document.querySelector("#slcDepartamentoCargado").value = personaEncontrada.departamento  
    document.querySelector("#slcOcupacionCargada").value = personaEncontrada.ocupacion
    
  }else{

    
    document.querySelector("#persona-no-encontrada").innerHTML = "No se encontro ninguna persona pendiente de validar"
    document.querySelector("#contenedor-form-precompletado").style.display = "none"
    document.querySelector("#btnEnviarDatosFormCensistaDesdePrecompletados").style.display = "none"

  }


}

document.querySelector("#btnEnviarDatosFormCensistaDesdePrecompletados").addEventListener("click", enviarFormularioValidadoDesdeFormsPrecompletados)

//ENVIAMOS UN FORMULARIO PRECARGADO
function enviarFormularioValidadoDesdeFormsPrecompletados(){

  let nombre
  let edad
  let cedula
  let slcDepartamentos
  let slcOcupacion
  let validarDatos

  nombre = document.querySelector("#nombreGuardado").value
  edad = Number(document.querySelector("#edadGuardada").value)
  cedula = document.querySelector("#cedulaGuardada").value
  slcDepartamentos = document.querySelector("#slcDepartamentoCargado").value
  slcOcupacion = document.querySelector("#slcOcupacionCargada").value
  validarDatos = document.querySelector("#validarCensoDesdePrecompletados").value

  if(validarDatosPrecompletados(nombre,edad,cedula)){

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
      case "departamentoCargado":
        slcDepartamentos = personaEncontrada.departamento
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
      case "ocupacionCargada":
        slcOcupacion = personaEncontrada.ocupacion
      break
  }

    cedula = eliminarCaracteresCedula(cedula, ".")
    cedula = eliminarCaracteresCedula(cedula, "-")
    
    if(verificarCedula(cedula)){

        switch(validarDatos){

            case "si":

                personaEncontrada.nombre = nombre
                personaEncontrada.edad = edad
                personaEncontrada.cedula = cedula
                personaEncontrada.departamento = slcDepartamentos
                personaEncontrada.ocupacion = slcOcupacion
                personaEncontrada.valido = "si"
                mensajeDatosEnviados()

            break
            case "no":

              document.querySelector("#mensajeFormPrecompletado").innerHTML = "El formulario ya se encuentra precompletado, debe validarlo"

            break
            default:

              document.querySelector("#mensajeFormPrecompletado").innerHTML = "Debe validar o no el formulario"

            break

        
        }  

    }else{

        document.querySelector("#mensajeFormPrecompletado").innerHTML = "Debe ingresar una cedula valida"

    }
  }

console.log(nombre,edad,cedula,slcDepartamentos,slcOcupacion)
}