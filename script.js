import get from './utills/getElement.js';
import getData from './utills/getUsers.js'
import displayUser from './utills/displayIUser.js';
const randomBtn = get('.randome-user-btn');

const showUser = async () => {
   const data = await getData();
   displayUser(data);
}


window.addEventListener('DOMContentLoaded' , showUser);
randomBtn.addEventListener('click' , showUser)
