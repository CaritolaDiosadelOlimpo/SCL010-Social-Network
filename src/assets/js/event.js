export const newEvent = () => {

	let eventData = {}
	eventData.id = "";
	eventData.name = document.querySelector('#name-event').value;
	eventData.location = document.querySelector('#location-event').value;
	eventData.date = document.querySelector('#date-event').value;
	eventData.description = document.querySelector('#description-event').value;
	eventData.meetPoint = document.querySelector('#meet-point-event').value;

	console.log(eventData);
	//event.assistants = document.querySelector('#').value;
	//event.like = document.querySelector('#').value;
	if (eventData.name == "") {
    alert("debes ingresas un nombre a tu evento");
    return false;
  }
  if (eventData.location == "") {
    alert("debes ingresas una colección");
    return false;
  }
  if (eventData.date== "") {
    alert("debes ingresas tu correo electrónico");
    return false;
  }
  if (eventData.description == "") {
    alert("debes ingresas una descripción");
    return false;
  }
  if (eventData.meetPoint == "") {
    alert("debes ingresar un punto de encuentro");
    return false;
  }
  if (eventData.name &&
      eventData.location &&
      eventData.date &&
      eventData.description && 
      eventData.meetPoint){

      (eventData);
  }


}
