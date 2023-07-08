let cantidadDpto = 0
let cantDpto
let arrayDepartamentos = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12","13", "14", "15","16", "17", "18", "19"]

for (let i = 0; i < arrayDepartamentos.length; i++) {
    const element = arrayDepartamentos[i];

    cantDpto = sistema.contadorPorDepartamento(element)
    console.log(cantDpto)

    let porcentaje = (cantDpto * 100) / sistema.formularios.length

    //MOSTRAMOS DATOS
    document.querySelector("#body-departamentos").innerHTML += `
    <tr>
    <td> ${element} </td>
    <td> ${sistema.totalEstudian(element)} </td>
    <td> ${sistema.totalNoTrabajan(element)} </td>
    <td> ${sistema.totalDependientesoIndependientes(element)} </td>
    <td> ${porcentaje} </td>
    </tr>

`
    
}



