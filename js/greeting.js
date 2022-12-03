// import "./js/clock.Js"

// console.log(hours)

const form = document.querySelector("form");
const h1 = document.querySelector("#hidden");
const loginInput = document.querySelector("#sign input");
const CLASS_HIDDEN = "hidden";
// console.log(form)

function inputEvent(event) {
    event.preventDefault();
    const username = loginInput.value; //////////////////////////////외워야함.
    localStorage.setItem("username", username);
    form.classList.add(CLASS_HIDDEN); //입력폼을 삭제한다.
    h1.classList.remove(CLASS_HIDDEN); //환영폼을 보여준다
    h1.innerText = `Welcome ${username}!`; ///////// 외워야함 innerText
};


const aname = localStorage.getItem("username");
// console.log(aname);

if(aname === null){
    form.classList.remove(CLASS_HIDDEN);
    // form.addEventListener("submit", inputEvent);  //처음방문한 이용자
}else{
    form.classList.add(CLASS_HIDDEN);
    h1.classList.remove(CLASS_HIDDEN);          //중복방문(등록된) 이용자
    h1.innerText = `Hello ${aname} !`;
};

form.addEventListener("submit", inputEvent); /////////////  외워야됨.  form 을 지정해서 이벤트 리스너를 적용
