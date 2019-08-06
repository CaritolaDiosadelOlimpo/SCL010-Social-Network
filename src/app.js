console.log("hola mundo");

import { initRouter } from './route.js';


//llama a otra funcion 
const init = ()=>{
    initRouter();
}

window.addEventListener('load', init);`