alert("Bienvenido a: Home Recreation CAME HOUSE 🏡 \n Haz Click! en Aceptar para hacer su reserva 😇")

const mostrarHabitaciones = () => {

    const listado = habitaciones.map(habitacion => {
        return `${habitacion.tipo} - ${habitacion.precio}`
    })

    alert(listado.join("\n"))

    crearReservaHabitacion(listado)
}




const crearReservaHabitacion = (listado) => {
    let nombre
    let apellido
    let habitacion
    let numNoches
    let totalReserva
    let otraReserva

    do {
        nombre = prompt("Ingrese su Nombre:")
        apellido = prompt("Ingrese su Apellido:")

        while (nombre == "" || apellido == "" || !Number.isNaN(+nombre) || !Number.isNaN(+apellido)) {
            alert("Incorrecto:❌-> Necesitas completar el Nombre y el Apellido")
            nombre = prompt("Ingrese su nombre:")
            apellido = prompt("Ingrese su apellido:")
        }

        habitacion = prompt(`Bienvenido ${nombre} ${apellido} a: Home Recreation CAME HOUSE 🏡 
            ${listado.join('\n')}
            Ingrese el nombre de la habitacion a reservar:
        `)



        if (reservar == 1) {
            numNoches = parseInt(prompt(`¿Cuantas Noches ✨ quiere reservar?
            El precio por Noche es: 30$
            `))

            while (!numNoches || numNoches == 0) {
                numNoches = parseInt(prompt(`¿Cuantas Noches ✨ quiere reservar?
                El precio por Noche es: 30$
                `))
            }

            totalReserva = numNoches * 30
            alert(`Ha reservado ${numNoches} noches, y el total de su reserva es: ${totalReserva}$`)

            let quiereComida = confirm("Desea tambien hacer una reserva gastronómica? 🍰")
            if (quiereComida) {
                crearReservaComida()
            }

        } else if (reservar == 2) {
            crearReservaComida()
        }

        otraReserva = confirm("¿Quiere hacer otra reservación? 😇")
        alert("😁 Gracias por hacer su reserva en Home Recreation CAME HOUSE 🏡")

    } while (otraReserva);
}

const crearReservaComida = () => {
    let comida
    let nombreComida
    let precioComida

    comida = parseInt(prompt(`Escoja el plato que desea reservar 🍰
            Presione 1 para -> Lomo Salteado = 50$
            Presione 2 para -> Arroz con pato = 60$
            `))

    while (!comida || comida == 0 || comida >= 3) {
        comida = parseInt(prompt(`Escoja el plato que desea reservar 🍰
                Presione 1 para -> Lomo Salteado = 50$
                Presione 2 para -> Arroz con pato = 60$
                `))
    }

    switch (comida) {
        case 1:
            nombreComida = "Lomo Salteado"
            precioComida = 50
            break;
        case 2:
            nombreComida = "Arroz con pato"
            precioComida = 60
            break;
        default:
            alert("La opción ingresada es incorrecta ❌");
    }

    alert(`Usted escogio ${nombreComida} y el precio es: ${precioComida}$`)
}

mostrarHabitaciones()