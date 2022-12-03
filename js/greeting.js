// import "./js/clock.Js"

// console.log(hours)

const form = document.querySelector("form");
const h1 = document.querySelector("#hidden");
const loginInput = document.querySelector("#sign input");
const CLASS_HIDDEN = "hidden";
// console.log(form)

function inputEvent(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    form.classList.add(CLASS_HIDDEN);
    h1.classList.remove(CLASS_HIDDEN);
    h1.innerText = `Welcome ${username}!`;
};


const aname = localStorage.getItem("username");
// console.log(aname);

if(aname === null){
    form.classList.remove(CLASS_HIDDEN);
    // form.addEventListener("submit", inputEvent);
}else{
    form.classList.add(CLASS_HIDDEN);
    h1.classList.remove(CLASS_HIDDEN); 
    h1.innerText = `Hello ${aname} !`;
};

form.addEventListener("submit", inputEvent);
