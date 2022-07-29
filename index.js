var configuracion = require('./configuracion')

console.log(configuracion)

class Persona{
    //constructor
    constructor(primerNombre, segundoNombre, primerApellido, segundoApellido, fechaNacimiento){
        this.primerNombre = primerNombre
        this.segundoNombre = segundoNombre
        this.primerApellido = primerApellido
        this.segundoApellido = segundoApellido

        this.contratado = false
        this.horasTrabajadas = 0
        this.identidad = null
        this.sueldoBase = configuracion.sueldoBase

        this.fechaNacimiento = fechaNacimiento
        this.edad = new Date() - fechaNacimiento
    }

    nombreCompleto(){
        return this.primerNombre + " " + this.segundoNombre
    }

    apellidoCompleto(){
        return this.primerApellido + " " + this.segundoApellido
    }

    nombre(){
        return this.nombreCompleto() + " " + this.apellidoCompleto()
    }

    calcularEdad(){
        var difEdad = (Date.now() - this.fechaNacimiento.getTime())/ 31557600000 // 24 * 3600 * 365.25 * 1000
        return Math.floor(difEdad)
    }

    contratar(valor){
        this.contratado = valor
        console.log(`Se ${valor ? "contrató" : "desipidió"} a la persona`, this.nombre()) //Backtick
    }

    trabajar(cantidadHoras){
        if(this.contratado){
            this.horasTrabajadas = this.horasTrabajadas + cantidadHoras
            console.log(`El empleado ${this.nombre()} trabajó ${cantidadHoras} horas, sumando un total de: ${this.horasTrabajadas} horas trabajadas`)
        }else{
            console.warn(`La persona ${this.nombre()} no está contratada por lo que no puede trabajar`)
        }
    }

    cobrar(){
        const sueldo = this.horasTrabajadas * this.sueldoBase
        console.log(`Se pagó al empleado ${this.nombre()} un total de ${sueldo.toString()} por un concepto de ${this.horasTrabajadas} horas trabajadas.`)
        this.horasTrabajadas = 0
    }

    //ejemplo: 15
    aumentoPorcentual(valorPorcentual){
        this.sueldoBase = this.sueldoBase * (1 + valorPorcentual/100)
        console.log(`Se aumentó el sueldo del empleado ${this.nombre()} en un ${valorPorcentual}%, su nuevo sueldo es: ${this.sueldoBase}`)
    }

    aumentoValor(valorMonetario){
        this.sueldoBase = this.sueldoBase + valorMonetario
        console.log(`Se aumentó el sueldo del empleado ${this.nombre()} en un valor de ${valorMonetario}, su nuevo sueldo es: ${this.sueldoBase}`)
    }

    asignarIdentidad(identidad){
        var expresion = /\d{4}-\d{4}-\d{5}$/g
        if(expresion.test(identidad)){
            this.identidad =identidad
            console.log(`El empleado ${this.nombre()} tiene el numero de identidad ${this.identidad}`)
        }else{
            console.log("Esta identidad es incorrecta")
        }
    }

}

var persona1 = new Persona("Luke", "Anakin", "Sky", "Walker", new Date(2000, 6, 26));
var persona2 = new Persona("John", "Jose", "Doe", "Sanchez", new Date());

var persona3 = new Persona()

persona1.contratar(true)
persona1.trabajar(8)
persona1.trabajar(8)
persona1.trabajar(8)
persona1.aumentoPorcentual(15)
persona1.trabajar(8)
persona1.aumentoValor(20)
persona1.trabajar(6)
persona1.cobrar()
persona1.asignarIdentidad("000-0000-51233")
persona1.asignarIdentidad("0000-0000-51233")
//persona1.cobrar()