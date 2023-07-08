class Sistema{

    constructor(){

        this.censista = [
            new Censista(1,"Francisco", "panch", "Micontra2023"),
            new Censista(2,"Juan", "juan", "Micontra2023"),
            new Censista(3,"Jose Pedro", "pepe", "Micontra2023")
            ]

        this.idProximo = 4

        
        this.formularios = [
            new Formulario("Agustin", 23, "49429904", "1", "estudiante", "no", 1),
            new Formulario("Elena", 52, "35961269", "1", "estudiante", "si", 1),
            new Formulario("Jose", 12, "49429904", "2", "estudiante", "si", 2),
            new Formulario("Camila", 15, "49429904", "2", "independiente", "si", 2),
            new Formulario("Jonathan", 17, "49429904", "3", "no-trabaja", "no", 3),
            new Formulario("Antonella", 24, "49429904", "19", "independiente", "si", 3),
            new Formulario("Emiliano", 10, "49795290", "4", "no-trabaja", "si", 3),
            new Formulario("Agustina", 15, "49795290", "5", "no-trabaja", "no", 1),
            new Formulario("Joaquin", 12, "49795290", "6", "no-trabaja", "si", 1),
            new Formulario("Pedro", 6, "49795290", "7", "no-trabaja", "si", 2),
            new Formulario("Graciela", 7, "49795290", "8", "dependiente", "si", 2),
            new Formulario("Gabriela", 28, "49795290", "8", "dependiente", "si", 3),
            new Formulario("Micaela", 30, "49795290", "6", "independiente", "si", 3),
            new Formulario("Andres", 12, "49795290", "8", "independiente", "si", 2),
            new Formulario("Fiorela", 12, "49795290", "9", "independiente", "si", 2),
            new Formulario("Mateo", 7, "49795290", "10", "independiente", "si", 1),
            new Formulario("Santiago", 90, "49795290", "11", "dependiente", "si", 1),
            new Formulario("Romina", 12, "49795290", "12", "estudiante", "si", 3),
            new Formulario("Rodrigo", 67, "49795290", "13", "estudiante", "si", 3),
            new Formulario("Ignacio", 28, "49795290", "15", "estudiante", "si", 1),
            new Formulario("Maria", 6, "49795290", "14", "dependiente", "si", 1),
            new Formulario("Ibai", 28, "49795290", "16", "no-trabaja", "si", 2),
            new Formulario("Matias", 12, "49795290", "17", "no-trabaja", "si", 2),
            new Formulario("Diego", 5, "49795290", "18", "no-trabaja", "no", 3),
            new Formulario("Nacho", 8, "49795290", "19", "dependiente", "si", 3),
            new Formulario("Nicolas", 23, "49795290", "1", "independiente", "si", 2),
            new Formulario("Mariana", 10, "49795290", "18", "independiente", "si", 1),
            new Formulario("Karina", 30, "49795290", "3", "independiente", "si", 2),
            new Formulario("Yessica", 40, "49795290", "10", "dependiente", "no", 3),
            new Formulario("Lourdes", 12, "49795290", "5", "no-trabaja", "si", 2),

        ]

        this.usuarioLogueado = null

    }

    //PERFIL CENSISTA

    agregarCensista(nuevoCensista){

        this.censista.push(nuevoCensista)

    }

    obtenerIdProximoCensista(){
        let id = this.idProximo
        this.idProximo++
        return id

    }

    agregarFormulario(formulario){

        this.formularios.push(formulario)

    }

    existeNombreUsuarioCensistaARegistrar(nombreUsuarioCensista){

        let existe = false

        for (let i = 0; i < this.censista.length; i++) {
            const element = this.censista[i];

            if(element.nombreUsuario === nombreUsuarioCensista){

                existe = true

            }
            
        }

        return existe
    }

    existeCensistaLogueado(nombreUsuarioCensista, clave){

        let usuarioActual = null

        for (let i = 0; i < this.censista.length; i++) {
            const element = this.censista[i];

            if(element.nombreUsuario.toLowerCase() === nombreUsuarioCensista.toLowerCase() && element.password === clave){
                usuarioActual = element
            }
            
        }

        return usuarioActual
    }

    totalCensados(){

        let contador = 0

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.valido === "si"){
                contador++
            }
            
        }

        return contador
    }

    buscarPersona(cedulaABuscar, idCensistaLogueado){

        let personaEncontrada = null

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.valido === "no"){

                if(element.cedula === cedulaABuscar && element.id === idCensistaLogueado){ 

                    personaEncontrada = element
                }

            }
            
        }

        return personaEncontrada
    }

    contadorPorDepartamento(dpto){

        let contador = 0

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.departamento === dpto){
                contador++
            }
            
        }

        return contador

    }
    contadorTotal(){

        let contador = this.formularios.length

        return contador

    }
    contadorNoValidados(){

        let contador = 0

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.valido === "no"){
                contador++
            }
            
        }

        return contador

    }

    contadorValidados(){

        let contador = 0

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.valido === "si"){
                contador++
            }
            
        }

        return contador

    }

    contadorNoValidados(){

        let contador = 0

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.valido === "no"){
                contador++
            }
            
        }

        return contador

    }

    contadorValidadosPorDepartamento(dpto){

        let contador = 0

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.valido === "si" && element.departamento === dpto){
                contador++
            }
            
        }

        return contador

    }

    personasNoValidadas(){

        let personaParaCensarEncontrada = []

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];
            
            if(element.id === this.usuarioLogueado.numeroIdentificador && element.valido === "no"){
                personaParaCensarEncontrada.push(element)
            }
        }

        return personaParaCensarEncontrada
    }
    censistasDisponibles(){

        let censistaEncontrado = []

        for (let i = 0; i < this.censista.length; i++) {
            const element = this.censista[i];
            
            if(element.id !== this.usuarioLogueado.numeroIdentificador){
                censistaEncontrado.push(element)
            }
        }

        return censistaEncontrado

    }

    cambiarIdPersonaSeleccionada(cedulaPersonaSeleccionada, idCensistaSeleccionado){
        
        let cambioExitoso = false

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.cedula === cedulaPersonaSeleccionada){
                element.id = idCensistaSeleccionado
                cambioExitoso = true
            }
            
        }

        return cambioExitoso
    }

    mayoresDeEdad(){

        let mayores = []

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.edad >= 18 && element.valido === "si"){

                mayores.push(element)
            }
        }

        return mayores

    }

    menoresDeEdad(){

        let menores = []

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.edad < 18 && element.valido === "si"){

                menores.push(element)
            }
        }

        return menores
        
    }

    //INVITADO

    validarCiInvitado(cedula){

        let existe = false

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.cedula === cedula && element.valido === "no"){
                existe = true
            }
            
        }

        return existe

    }

    verificarSiCiExiste(cedula){
        let ciEncontrada = false

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];
            
            if(element.cedula === cedula){
                ciEncontrada = true
            }
        }

        return ciEncontrada
    }

    precargarDatosInvitado(cedula){

        let persona = null

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(cedula === element.cedula){
                persona = element
            }
            
        }

        return persona
    }
    actualizarDatosPrecargadosInvitado(cedula){

        let persona = null

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(cedula === element.cedula){
                persona = element
            }
            
        }

        return persona
    }

    asignarCensistaAleatorio(){

        let nombreCensistaRandom = null 

        for (let i = 0; i < this.censista.length; i++) {
            const element = this.censista[i];
            
            if(element.numeroIdentificador === idRandom){
                nombreCensistaRandom = element.nombreCensista
            }
        }

        return nombreCensistaRandom
    }

    verEstadoInvitado(cedula){

        let censado = false

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.cedula === cedula && element.valido === "si"){
                censado = true
            }
            
        }

        return censado
    }

    totalEstudian(dpto){

        let contador = 0

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.departamento === dpto && element.ocupacion === "estudiante"){
                contador++
            }
            
        }

        return contador

    }

    totalNoTrabajan(dpto){
        let contador = 0

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.departamento === dpto && element.ocupacion === "no-trabaja"){
                contador++
            }
            
        }

        return contador
    }

    totalDependientesoIndependientes(dpto){
        let contador = 0

        for (let i = 0; i < this.formularios.length; i++) {
            const element = this.formularios[i];

            if(element.departamento === dpto){

                if(element.ocupacion === "independiente" || element.ocupacion === "dependientes"){
                    contador++
                }
                
            }
            
        }

        return contador
    }


}

class Censista{

    constructor(unNumeroIdentificador, unNombre, unNombreUsuario, unaPassword){
        this.numeroIdentificador = unNumeroIdentificador
        this.nombreCensista = unNombre
        this.nombreUsuario = unNombreUsuario
        this.password = unaPassword
        
    }
}

class Formulario{
    constructor(elNombreIngresado, edadIngresada, cedulaIngresada, departamentoSeleccionado, ocupacionSeleccionada, esValido, idCensista){

        this.nombre = elNombreIngresado
        this.edad = edadIngresada
        this.cedula = cedulaIngresada
        this.departamento = departamentoSeleccionado
        this.ocupacion = ocupacionSeleccionada
        this.valido = esValido
        this.id = idCensista
    }

}

