let sistema = new Sistema()

//HOME
function mostrarBienvenida(){

    document.querySelector("#aux").style.display = "none"
    document.querySelector("#registrarse").style.display = "none"
    document.querySelector("#formLoginCensista").style.display = "none"
    document.querySelector("#contenedor-form-censistas").style.display = "none"
    document.querySelector("#contenedor-form-precompletado").style.display = "none"
    document.querySelector("#mensajeFormEnviado").style.display = "none"
    document.querySelector("#perfiles").style.display = "block"
    document.querySelector("#btnEnviarDatosFormCensistaDesdePrecompletados").style.display = "none"
    document.querySelector("#tablas-estadisticas").style.display = "none"
    document.querySelector("#contenedor-reasignar-censista").style.display = "none"
    document.querySelector("#btnVolverAReasignar").style.display = "none"
    document.querySelector("#mensajeFormInvitadoEnviado").style.display = "none"
    document.querySelector("#contenedor-buscador-invitado").style.display = "none"
    document.querySelector("#btnVolverFormularioInvitado").style.display = "none"
    document.querySelector("#navInvitado").style.display = "none"
    document.querySelector("#buscador-estado-invitado").style.display = "none"
    document.querySelector("#listado").style.display = "none"
    
    
}
mostrarBienvenida()

function ocultarNavs(){

    document.querySelector("#navCensista").style.display = "none"
    document.querySelector("#navInvitado").style.display = "none"
    document.querySelector("#opcionesIngreso").style.display = "none"
    document.querySelector("#formCensistas").style.display = "none"
    document.querySelector("#contenedor-buscador").style.display = "none"


}
ocultarNavs()

//PERFIL CENSISTA - REGISTRARSE E INICIAR SESION
document.querySelector("#perfilC").addEventListener("click", perfilCensista)

function perfilCensista(){

    document.querySelector("#opcionesIngreso").style.display = "block"
    document.querySelector("#perfiles").style.display = "none"

}

//REGISTRARSE
document.querySelector("#btnIrARegistrarme").addEventListener("click", verRegistrarme)

function verRegistrarme(){

    document.querySelector("#registrarse").style.display = "block"
    document.querySelector("#opcionesIngreso").style.display = "none"

}

//CANCELAR REGISTRARME
document.querySelector("#btnCancelarRegistrarme").addEventListener("click", cancelarRegistrarme)

function cancelarRegistrarme(){

    document.querySelector("#registrarse").style.display = "none"
    document.querySelector("#opcionesIngreso").style.display = "block"

}

//VER LOGIN
document.querySelector("#btnIrALogin").addEventListener("click", verLogin)

function verLogin(){
    document.querySelector("#registrarse").style.display = "none"
    document.querySelector("#opcionesIngreso").style.display = "none"
    document.querySelector("#formLoginCensista").style.display = "block"
}

//CANCELAR LOGIN CENSISTA
document.querySelector("#btnCancelarLoginCensista").addEventListener("click", cancelarLoginCensista)

function cancelarLoginCensista(){
    document.querySelector("#registrarse").style.display = "none"
    document.querySelector("#opcionesIngreso").style.display = "block"
    document.querySelector("#formLoginCensista").style.display = "none"

}

//ACTIVANDO NAVBAR PARA CENSISTA

function verNavBarCensista(){

    document.querySelector("#navCensista").style.display = "block"
    document.querySelector("#aux").style.display = "block"
    document.querySelector("#formLoginCensista").style.display = "none"
    document.querySelector("#opcionesIngreso").style.display = "none"
    
}

//FORM CENSISTAS
document.querySelector("#realizar-censo").addEventListener("click", mostrarFormCensista)

function mostrarFormCensista(){
    document.querySelector("#formCensistas").style.display = "block"
    document.querySelector("#contenedor-form-censistas").style.display = "block"
    document.querySelector("#contenedor-form-precompletado").style.display = "none"
    document.querySelector("#contenedor-buscador").style.display = "none"
    document.querySelector("#tablas-estadisticas").style.display = "none"
    document.querySelector("#btnEnviarDatosFormInvitado").style.display = "none"
    document.querySelector("#btnEnviarDatosFormInvitadoPrecompletado").style.display = "none"
    document.querySelector("#btnEnviarDatosFormInvitado").style.display = "none"
    document.querySelector("#contenedor-reasignar-censista").style.display = "none"
    
}

//MENSAJE DATOS ENVIADOS

function mensajeDatosEnviados(){

    document.querySelector("#mensajeFormEnviado").style.display = "block"
    document.querySelector("#contenedor-buscador").style.display = "none"
    document.querySelector("#formCensistas").style.display = "none"
    document.querySelector("#contenedor-form-censistas").style.display = "none"
    document.querySelector("#contenedor-form-precompletado").style.display = "none"
    document.querySelector("#nombre").value = ""
    document.querySelector("#edad").value = ""
    document.querySelector("#cedula").value = ""
    document.querySelector("#slcDepartamentos").value = "seleccione"
    document.querySelector("#slcOcupacion").value = "seleccione"
    document.querySelector("#validarCenso").value = "slc"
    

}

//VOLVER AL FORM CENSISTA
document.querySelector("#btnVolverAlFormCensista").addEventListener("click", volverAlFormCensista)

function volverAlFormCensista(){

    document.querySelector("#mensajeFormEnviado").style.display = "none"
    document.querySelector("#formCensistas").style.display = "block"
    document.querySelector("#contenedor-form-censistas").style.display = "block"
    

}

//CENSOS PRECOMPLETADOS - BUSCADOR
document.querySelector("#censos-precompletados").addEventListener("click", irACensosPreCompletados)

function irACensosPreCompletados(){

    mostrarBienvenida()
    document.querySelector("#contenedor-buscador").style.display = "block"
    document.querySelector("#contenedor-form-precompletado").style.display = "none"
    document.querySelector("#buscador").value = ""
    document.querySelector("#persona-no-encontrada").innerHTML = ""
    document.querySelector("#perfiles").style.display = "none"

}

//ESTADISTICAS

document.querySelector("#estadisticas").addEventListener("click", mostrarTablas)

function mostrarTablas(){

    mostrarBienvenida()
    document.querySelector("#perfiles").style.display = "none"
    document.querySelector("#contenedor-buscador").style.display = "none"
    document.querySelector("#tablas-estadisticas").style.display = "block"
    document.querySelector("#reasignado-correctamente").style.display = "none"
    
}

document.querySelector("#reasignar-censistas").addEventListener("click", sesionReasignar)

//REASIGNAR CENSISTA

function sesionReasignar(){
    mostrarBienvenida()
    document.querySelector("#perfiles").style.display = "none"
    document.querySelector("#contenedor-buscador").style.display = "none"
    document.querySelector("#tablas-estadisticas").style.display = "none"
    document.querySelector("#contenedor-reasignar-censista").style.display = "block"
    document.querySelector("#reasignado-correctamente").style.display = "none"
    //LLAMO UNA FUNCION DE REASIGNAR-CENSISTA PARA MOSTRAR EL SELECT
    mostrarPersonasEncontradas()
}

function mensajeCensistaReasignado(){

    mostrarBienvenida()
    document.querySelector("#perfiles").style.display = "none"
    document.querySelector("#contenedor-buscador").style.display = "none"
    document.querySelector("#tablas-estadisticas").style.display = "none"
    document.querySelector("#contenedor-reasignar-censista").style.display = "none"
    document.querySelector("#reasignado-correctamente").style.display = "block"
    document.querySelector("#btnVolverAReasignar").style.display = "block"

}

function mensajeCensistaNoReasignado(){
    mostrarBienvenida()
    document.querySelector("#perfiles").style.display = "none"
    document.querySelector("#contenedor-buscador").style.display = "none"
    document.querySelector("#tablas-estadisticas").style.display = "none"
    document.querySelector("#contenedor-reasignar-censista").style.display = "block"
    document.querySelector("#mensajeError").innerHTML = "No hay personas pendientes para censar"
}


document.querySelector("#btnVolverAReasignar").addEventListener("click", volverAReasignar)

function volverAReasignar(){

    sesionReasignar()

}

//PERFIL INVITADO

document.querySelector("#perfilI").addEventListener("click", mostrarBuscadorInvitado)

//BUSCADOR INVITADO

function mostrarBuscadorInvitado(){
    document.querySelector("#perfiles").style.display = "none"
    document.querySelector("#formCensistas").style.display = "none"
    document.querySelector("#contenedor-form-censistas").style.display = "none"
    document.querySelector("#mensajeFormInvitadoEnviado").style.display = "none"
    document.querySelector("#btnVolverFormularioInvitado").style.display = "none"
    document.querySelector("#contenedor-buscador-invitado").style.display = "block"
    document.querySelector("#buscador-estado-invitado").style.display = "none"
    document.querySelector("#cedulaIngresada").value = ""
    document.querySelector("#mensajeBuscador").innerHTML = ""
    mostrarNavInvitado()
}

//FORMULARIO INVITADO

function mostrarFormInvitadoPrecompletado(){

    document.querySelector("#contenedor-form-censistas").style.display = "block"
    document.querySelector("#perfiles").style.display = "none"
    document.querySelector("#formCensistas").style.display = "block"
    document.querySelector("#opcionesIngreso").style.display = "none"
    document.querySelector("#btnEnviarDatosFormCensista").style.display = "none"
    document.querySelector("#validarCenso").style.display = "none"
    document.querySelector("#btnEnviarDatosFormInvitadoPrecompletado").style.display = "block"
    document.querySelector("#btnEnviarDatosFormInvitado").style.display = "none"
    document.querySelector("#contenedor-buscador-invitado").style.display = "none"
    mostrarNavInvitado()
    

}

function mostrarFormInvitado(){

    document.querySelector("#contenedor-form-censistas").style.display = "block"
    document.querySelector("#perfiles").style.display = "none"
    document.querySelector("#formCensistas").style.display = "block"
    document.querySelector("#opcionesIngreso").style.display = "none"
    document.querySelector("#btnEnviarDatosFormCensista").style.display = "none"
    document.querySelector("#validarCenso").style.display = "none"
    document.querySelector("#btnEnviarDatosFormInvitadoPrecompletado").style.display = "none"
    document.querySelector("#btnEnviarDatosFormInvitado").style.display = "block"
    document.querySelector("#contenedor-buscador-invitado").style.display = "none"
    document.querySelector("#nombre").value = ""
    document.querySelector("#edad").value = ""
    document.querySelector("#cedula").value = ""
    document.querySelector("#slcDepartamentos").value = "seleccione"
    document.querySelector("#slcOcupacion").value = "seleccione"
    
    mostrarNavInvitado()

}

//MENSAJE FORMULARIO ENVIADO (INVITADO)

function mensajeFormularioInvitadoEnviado(){

    document.querySelector("#mensajeFormInvitadoEnviado").style.display = "block"
    document.querySelector("#contenedor-form-censistas").style.display = "none"
    document.querySelector("#perfiles").style.display = "none"
    document.querySelector("#formCensistas").style.display = "none"
    document.querySelector("#opcionesIngreso").style.display = "none"
    document.querySelector("#btnEnviarDatosFormCensista").style.display = "none"
    document.querySelector("#validarCenso").style.display = "none"
    document.querySelector("#btnVolverFormularioInvitado").style.display = "block"
    document.querySelector("#mensajeFormInvitadoEnviado").innerHTML = `<h3>Formulario enviado con exito, su censista asignado es: ${nombreCensistaAleatorio} </h3>`
    mostrarNavInvitado()
}

document.querySelector("#btnVolverFormularioInvitado").addEventListener("click", volverAFormInvitado)

function volverAFormInvitado(){

    document.querySelector("#mensajeFormInvitadoEnviado").style.display = "none"
    document.querySelector("#perfiles").style.display = "none"
    document.querySelector("#opcionesIngreso").style.display = "none"
    document.querySelector("#btnEnviarDatosFormCensista").style.display = "none"
    document.querySelector("#btnVolverFormularioInvitado").style.display = "none"
    document.querySelector("#btnEnviarDatosFormInvitadoPrecompletado").style.display = "none"
    document.querySelector("#btnEnviarDatosFormInvitado").style.display = "block"
    document.querySelector("#validarCenso").style.display = "none"
    document.querySelector("#formCensistas").style.display = "block"
    document.querySelector("#contenedor-form-censistas").style.display = "block"
    document.querySelector("#nombre").value = ""
    document.querySelector("#edad").value = ""
    document.querySelector("#cedula").value = ""
    document.querySelector("#slcDepartamentos").value = "seleccione"
    document.querySelector("#slcOcupacion").value = "seleccione"
    mostrarNavInvitado()

}

//NAVBAR INVITADO

function mostrarNavInvitado(){

    document.querySelector("#navInvitado").style.display = "block"
}


document.querySelector("#IrAlbuscador").addEventListener("click", buscadorInvitadoDesdeNav)

//BUSCADOR INVITADO

function buscadorInvitadoDesdeNav(){

    mostrarBuscadorInvitado()
    document.querySelector("#cedulaIngresada").value = ""
    document.querySelector("#mensajeBuscador").innerHTML = ""
    document.querySelector("#mensajeFormCensista").innerHTML = ""
    document.querySelector("#listado").style.display = "none"

}

//PERFILES INVITADO

document.querySelector("#irAperfiles").addEventListener("click", irAPerfiles)

function irAPerfiles(){

    document.querySelector("#perfiles").style.display = "block"
    document.querySelector("#navInvitado").style.display = "none"
    document.querySelector("#contenedor-buscador-invitado").style.display = "none"
    document.querySelector("#formCensistas").style.display = "none"
    document.querySelector("#contenedor-form-censistas").style.display = "none"
    document.querySelector("#mensajeFormInvitadoEnviado").style.display = "none"
    document.querySelector("#btnVolverFormularioInvitado").style.display = "none"
    document.querySelector("#buscador-estado-invitado").style.display = "none"
    document.querySelector("#listado").style.display = "none"
}

//VER ESTADO INVITADO

document.querySelector("#verEstado").addEventListener("click", verEstado)

function verEstado(){

    document.querySelector("#buscador-estado-invitado").style.display = "block"
    document.querySelector("#contenedor-buscador-invitado").style.display = "none"
    document.querySelector("#formCensistas").style.display = "none"
    document.querySelector("#contenedor-form-censistas").style.display = "none"
    document.querySelector("#mensajeFormInvitadoEnviado").style.display = "none"
    document.querySelector("#btnVolverFormularioInvitado").style.display = "none"
    document.querySelector("#perfiles").style.display = "none"
    document.querySelector("#cedulaIngresadaBuscadorEstado").value = ""
    document.querySelector("#mensajeBuscadorEstado").innerHTML = ""
    document.querySelector("#listado").style.display = "none"
}

//LISTADO DE CENSADOS

document.querySelector("#listado-censados").addEventListener("click", verListado)

function verListado(){
    document.querySelector("#contenedor-buscador-invitado").style.display = "none"
    document.querySelector("#formCensistas").style.display = "none"
    document.querySelector("#contenedor-form-censistas").style.display = "none"
    document.querySelector("#mensajeFormInvitadoEnviado").style.display = "none"
    document.querySelector("#btnVolverFormularioInvitado").style.display = "none"
    document.querySelector("#perfiles").style.display = "none"
    document.querySelector("#cedulaIngresadaBuscadorEstado").value = ""
    document.querySelector("#mensajeBuscadorEstado").innerHTML = ""
    document.querySelector("#listado").style.display = "block"
    document.querySelector("#buscador-estado-invitado").style.display = "none"

}
