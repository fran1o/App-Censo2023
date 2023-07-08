let cedulaIngresadaParaVerEstado

document.querySelector("#btnBuscarEstado").addEventListener("click", mostrarEstado)

function mostrarEstado(){

    cedulaIngresadaParaVerEstado = document.querySelector("#cedulaIngresadaBuscadorEstado").value

    if(sistema.verEstadoInvitado(cedulaIngresadaParaVerEstado)){
        document.querySelector("#mensajeBuscadorEstado").innerHTML = "Su censo ya fue validado con exito"
    }else{
        document.querySelector("#mensajeBuscadorEstado").innerHTML = `Su censo aun no fue validado, recuerde que el censista asignado es: ${nombreCensistaAleatorio}`
    }
}