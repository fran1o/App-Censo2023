let cedulaPersonaSeleccionada
let idCensistaSeleccionado

function mostrarPersonasEncontradas(){

    let personas 
    let persona = ""
    let censistas
    let censista = ""

    //PERSONAS PENDIENTES DE VALIDAR Y CENSISTAS DISPONIBLES
    personas = sistema.personasNoValidadas()
    censistas = sistema.censistasDisponibles()

    console.log(sistema)

    for(let i = 0; i < personas.length; i++){

        persona += `<option value="${personas[i].cedula}">${personas[i].nombre}</option>`

    }

    document.querySelector("#slcpersonaEncontradaParaCensar").innerHTML = persona

    for(let i = 0; i < censistas.length; i++){

        censista += `<option value="${censistas[i].numeroIdentificador}">${censistas[i].nombreCensista}</option>`

    }

    document.querySelector("#slcCensistas").innerHTML = censista
    
}

document.querySelector("#btnReasignarCensista").addEventListener("click", reasignarCensista)

function reasignarCensista(){

    //CAPTURAMOS LOS VALORES DE LOS SELECT PARA REALIZAR LA REASIGNACION
    
    cedulaPersonaSeleccionada = document.querySelector("#slcpersonaEncontradaParaCensar").value
    idCensistaSeleccionado = Number(document.querySelector("#slcCensistas").value)

    if(sistema.cambiarIdPersonaSeleccionada(cedulaPersonaSeleccionada, idCensistaSeleccionado)){
        //LLAMO UNA FUNCION DE VER.JS PARA MOSTRAR EL MENSAJE UNA VEZ REALIZADO EL CAMBIO DE CENSISTA
        mensajeCensistaReasignado()

        document.querySelector("#reasignado").innerHTML = "Censista reasignado correctamente"

    }else{

        mensajeCensistaNoReasignado()

    }
    

    

    console.log(sistema)
}
