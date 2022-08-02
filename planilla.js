var Persona = require('./persona')

var empleados = [
    new Persona("Luke", "Anakin", "Sky", "Walker", new Date(2000, 6, 26)),
    new Persona("Leia", "Organa", "Sky", "Walker", new Date(2012, 7, 4)),
    new Persona("Han", "Solo", "Solo", "Han", new Date(1990, 2, 7)),
    new Persona("C3", "P0", "Sky", "Walker", new Date(1995, 1, 1)),
    new Persona("Padme", "Amidala", "Padme", "Amidala", new Date(2010, 12, 21))
]

empleados.push(new Persona("R", "2", "D", "2", new Date(2020, 12, 21)))

//console.log("Listado de empleados", empleados)

var listadoNombresCompletos = empleados.map(empleado => empleado.nombre())
console.log(listadoNombresCompletos)

var edadesEmpleados = empleados.map(empleado => empleado.calcularEdad())
console.log(edadesEmpleados)

var empleadosMayoresDeEdad = empleados.filter(empleado => empleado.calcularEdad() > 18)
console.log(empleadosMayoresDeEdad)
























