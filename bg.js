const body = document.querySelector("body");

const IMG_NUMBER = 7;

function handleImagLoad(){
    console.log("finished image loading")
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number =Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init() {
    const randomeNumber = genRandom();
    paintImage(randomeNumber);

}

init();
