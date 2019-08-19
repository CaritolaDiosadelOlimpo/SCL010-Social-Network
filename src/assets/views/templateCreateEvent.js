import { newEvent } from './../js/event.js';


export const templateCreateEvent = () => {
	const containerNewEvent = document.createElement('div');
	const contentNewEvent =`<input type="text" id="name-event" placeholder=" Nombra a tu evento ">
							<input type="text" id="location-event" placeholder=" Ingresa una locación ">
							<input type="date" id="date-event" placeholder=" Fecha del evento ">
							<input type="text" id="description-event" placeholder=" Descripción del evento ">
							<input type="text" id="meet-point-event" placeholder=" Punto de encuentro ">
							<button id="chao"> Crear Evento</button>`;

	containerNewEvent.innerHTML = contentNewEvent;

	const createNewEvent = containerNewEvent.querySelector('#chao');
	createNewEvent.addEventListener('click', () => {
		newEvent();
	})
	return containerNewEvent;
}
