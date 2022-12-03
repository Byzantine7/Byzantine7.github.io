const setClock = document.querySelector("#clock");

function time(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");         //String()  .padStart(2,"") 스트링 함수의 구조() miss..
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // const seconds = String(date.getSeconds()).padStart(2, "0");
    setClock.innerText = `${hours}:${minutes}`;            //시간이 초마다 갱신되려면 time 함수에 포함되야...
};

time();
setInterval(time, 1000);