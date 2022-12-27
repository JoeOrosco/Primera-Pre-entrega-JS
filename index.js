
alert("Bienvenido a: Home Recreation CAME HOUSE 🏡")

const crearReservaHabitacion = () => {
    let nombre 
    let apellido
    let reservar
    let numNoches
    let totalReserva
    let otraReserva

    do {
        nombre = prompt("Ingrese su Nombre:")
        apellido = prompt("Ingrese su Apellido:")

        while (nombre == "" || apellido == "" || !Number.isNaN (+nombre) || !Number.isNaN (+apellido)) {
                alert("Incorrecto:❌-> Necesitas completar el Nombre y el Apellido")
                nombre = prompt("Ingrese su nombre:") 
                apellido = prompt("Ingrese su apellido:")
        } 
    
        reservar = parseInt(prompt(`Bienvenido ${nombre} ${apellido} a: Home Recreation CAME HOUSE 🏡 
        Ingrese 1 -> Para reservar una habitación 🏡
        Ingrese 2 -> Para hacer su reserva gastronómica 🍰
        `))

        while (!reservar || reservar == 0 || reservar >= 3) {
            reservar = parseInt(prompt(`Bienvenido ${nombre} ${apellido} a: Home Recreation CAME HOUSE 🏡 
            Ingrese 1 -> Para reservar una habitación 🏡
            Ingrese 2 -> Para hacer su reserva gastronómica 🍰
            `))
        }
        
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

const crearReservaComida = ( ) => {
    let comida
    let nombreComida
    let precioComida

    comida = parseInt(prompt(`Escoja el plato que desea reservar 🍰
            Presione 1 para -> Lomo Salteado = 50$
            Presione 2 para -> Arroz con pato = 60$
            `))

            while (!comida || comida == 0 || comida >= 3){
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

crearReservaHabitacion()



