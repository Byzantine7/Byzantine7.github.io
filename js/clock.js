const setClock = document.querySelector("#clock");

function time(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // const seconds = String(date.getSeconds()).padStart(2, "0");
    setClock.innerText = `${hours}:${minutes}`;
};

time();
setInterval(time, 1000);
