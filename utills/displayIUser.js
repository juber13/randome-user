// import removeActive from "./removeActive";
import get from './getElement.js';
const btns = [...document.querySelectorAll('.btns')];



const image = get('.user-img');
const title = get('.title');
const userName = get('.name');

const displayUser = (persone) => {
    image.src = persone.img;
    title.textContent = "My Name is";
    userName.textContent = persone.name;
    removeActive(btns);
    btns[0].classList.add('active');
    btns.forEach(btn => {
        btn.addEventListener("click",function(){
            const label = btn.dataset.text;
            title.textContent = `My ${label} is`;
            userName.textContent = persone[label];
            removeActive(btns)
            btn.classList.add('active');
      })
   })
}

function removeActive(items){
    items.forEach(btn => btn.classList.remove('active'));
}

  export default displayUser;