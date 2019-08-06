
import {templateLogin} from './assets/view/templateLogin.js'
import {templateCreate} from './assets/view/templateCreate.js'

const ChangeRouter = (hash)=>  {
if (hash === '#login'){
    return showTemplate(hash);
}
}

const showTemplate = (hash)=>{
    const router = hash.substring(2);
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';
    
    switch (router){
        case 'login':
            containerRoot.appendChild(templateLogin());
        break;
        case 'create':
            containerRoot.appendChild(templateCreate());
        break;
        default:
            containerRoot.innerHTML =`<p>Error 404</p>`

    }
}




export const initRouter = () => {
    window.addEventListener("load", ChangeRouter(window.location.hash));


if ('onhaschange' in window){
    window.onhaschange = () => {
        ChangeRouter(window.location.hash);
        }
    }
}


