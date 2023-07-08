let contadorTotalCensados = sistema.totalCensados()
let contadorArtigas = sistema.contadorPorDepartamento("1")
let contadorSalto = sistema.contadorPorDepartamento("2")
let contadorPaysandu = sistema.contadorPorDepartamento("3")
let contadorRioNegro = sistema.contadorPorDepartamento("4")
let contadorSoriano = sistema.contadorPorDepartamento("5")
let contadorColonia = sistema.contadorPorDepartamento("6")
let contadorRivera = sistema.contadorPorDepartamento("7")
let contadorTacuarembo = sistema.contadorPorDepartamento("8")
let contadorDurazno = sistema.contadorPorDepartamento("9")
let contadorRocha = sistema.contadorPorDepartamento("10")
let contadorFlores = sistema.contadorPorDepartamento("11")
let contadorFlorida = sistema.contadorPorDepartamento("12")
let contadorSanJose = sistema.contadorPorDepartamento("13")
let contadorCanelones = sistema.contadorPorDepartamento("14")
let contadorMontevideo = sistema.contadorPorDepartamento("15")
let contadorCerroLargo = sistema.contadorPorDepartamento("16")
let contadorTreintaytres = sistema.contadorPorDepartamento("17")
let contadorLavalleja = sistema.contadorPorDepartamento("18")
let contadorMaldonado = sistema.contadorPorDepartamento("19")
let departamentoSeleccionado
let total = sistema.contadorTotal()
let pendientes = sistema.contadorNoValidados()
let porcentajePendientesDeValidar = ((pendientes * 100) / total) + "%"
let totalMayores = sistema.mayoresDeEdad()
let totalMenores = sistema.menoresDeEdad()


document.querySelector("#btnMostrarMayoresyMenores").addEventListener("click", mostrarMayoresyMenores)

function mostrarMayoresyMenores() {

    let contadorMayores = 0
    let contadorMenores = 0

    departamentoSeleccionado = document.querySelector("#dpto").value

    for (let i = 0; i < totalMayores.length; i++) {
        const element = totalMayores[i];

        console.log(element)

        if (element.departamento === departamentoSeleccionado) {

            contadorMayores++
        
        }
        
    }

    for (let i = 0; i < totalMenores.length; i++) {
        const element = totalMenores[i];

        if (element.departamento === departamentoSeleccionado) {

            contadorMenores++
       
        }

    }

    let porcentajeMayores = (contadorMayores * 100) / sistema.contadorValidadosPorDepartamento(departamentoSeleccionado)
    document.querySelector("#personas-mayores").innerHTML = `Porcentaje de personas mayores censadas ${porcentajeMayores} %`
    let porcentajeMenores = (contadorMenores * 100) / sistema.contadorValidadosPorDepartamento(departamentoSeleccionado)
    document.querySelector("#personas-menores").innerHTML = `Porcentaje de personas menores censadas ${porcentajeMenores}%`
        
    
}


document.querySelector("#porcentajePendientes").innerHTML = porcentajePendientesDeValidar
document.querySelector("#totalcensados").innerHTML = contadorTotalCensados
document.querySelector("#totalArtigas").innerHTML = contadorArtigas
document.querySelector("#totalSalto").innerHTML = contadorSalto
document.querySelector("#totalPaysandu").innerHTML = contadorPaysandu
document.querySelector("#totalRioNegro").innerHTML = contadorRioNegro
document.querySelector("#totalSoriano").innerHTML = contadorSoriano
document.querySelector("#totalColonia").innerHTML = contadorColonia
document.querySelector("#totalRivera").innerHTML = contadorRivera
document.querySelector("#totalTacuarembo").innerHTML = contadorTacuarembo
document.querySelector("#totalDurazno").innerHTML = contadorDurazno
document.querySelector("#totalRocha").innerHTML = contadorRocha
document.querySelector("#totalFlores").innerHTML = contadorFlores
document.querySelector("#totalFlorida").innerHTML = contadorFlorida
document.querySelector("#totalSanJose").innerHTML = contadorSanJose
document.querySelector("#totalCanelones").innerHTML = contadorCanelones
document.querySelector("#totalMontevideo").innerHTML = contadorMontevideo
document.querySelector("#totalCerroLargo").innerHTML = contadorCerroLargo
document.querySelector("#totalTreitaytres").innerHTML = contadorTreintaytres
document.querySelector("#totalLavalleja").innerHTML = contadorLavalleja
document.querySelector("#totalMaldonado").innerHTML = contadorMaldonado








