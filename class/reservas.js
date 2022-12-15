class Reserva {
    constructor (pNombre) {
        this.habitaciones = [];
        this.nombre = pNombre;
    }

    setHabitacion (pId) {
        let habitacionesLista = JSON.parse(localStorage.getItem(keyLocalStorageProducts));
        let HabitacionSeleccionada= habitacionesLista.find((p) => p.habitacionParis === pId);
        let nuevahabitacionReservada = new habitacionReservada(HabitacionSeleccionada.habitacionParis, 1)
        this.habitaciones.push(nuevahabitacionReservada);
    }


}