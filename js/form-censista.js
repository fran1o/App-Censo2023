let nombre
let edad
let cedula
let slcDepartamentos
let slcOcupacion
let validarDatos
let formulario

document.querySelector("#btnEnviarDatosFormCensista").addEventListener("click", enviarDatosFormCensista)

function enviarDatosFormCensista(){

    nombre = document.querySelector("#nombre").value
    edad = Number(document.querySelector("#edad").value)
    cedula = document.querySelector("#cedula").value
    slcDepartamentos = document.querySelector("#slcDepartamentos").value
    slcOcupacion = document.querySelector("#slcOcupacion").value
    validarDatos = document.querySelector("#validarCenso").value

    if(validarDatosFormCensista(nombre,edad,cedula, slcDepartamentos, slcOcupacion)){ 

        cedula = eliminarCaracteresCedula(cedula, ".")
        cedula = eliminarCaracteresCedula(cedula, "-")

        if(sistema.verificarSiCiExiste(cedula)){

            document.querySelector("#mensajeFormCensista").innerHTML = "La cedula ingresada ya fue censada, puede ir a consultar censos precompletados"
        
        }else{

            if(verificarCedula(cedula)){

            
                formulario = new Formulario(nombre, edad, cedula, slcDepartamentos, slcOcupacion, validarDatos, sistema.usuarioLogueado.numeroIdentificador)
    
                switch(validarDatos){
    
                    case "si":
    
                        sistema.agregarFormulario(formulario)
                        mensajeDatosEnviados()
    
                    break
                    case "no":
    
                        sistema.agregarFormulario(formulario)
                        mensajeDatosEnviados()
    
                    break
                    default:
    
                        document.querySelector("#mensajeFormCensista").innerHTML = "Debe validar o no el formulario"
    
                    break
    
                
                }  
    
            }else{
    
                document.querySelector("#mensajeFormCensista").innerHTML = "Debe ingresar una cedula valida"
    
            }

        }
        
        
    }
}
