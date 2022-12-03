const images = ["0.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","8.jpg","10.jpg","11.jpg","12.jpg"];

const button = document.querySelector(".fa-sharp");

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src= `img/${chosenImage}`;
document.querySelector("#bgimg").appendChild(bgImage);

function newImage() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    bgImage.src= `img/${chosenImage}`;
    document.querySelector("#bgimg").appendChild(bgImage);
}

button.addEventListener("click", newImage)

