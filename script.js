const dialogRef = document.getElementById("imageDialog");

function openDialog() {
    dialogRef.showModal()
}

function closeDialog() {
    dialogRef.close();
}

let current = 1;
const max = 12;

function updateCounter() {
    document.getElementById('imageCounter').innerText = `${current}/${max}`;
}

function plusSlides() {
    current = (current % max) + 1;
    updateCounter();
}

function minusSlides() {
    current = (current - 2 + max) % max + 1;
    updateCounter();
}

const images = [
    "imgs/japan1.jpg",
    "imgs/japan2.jpg",
    "imgs/japan3.jpg",
    "imgs/japan4.jpg",
    "imgs/japan5.jpg",
    "imgs/japan6.jpg",
    "imgs/japan7.jpg",
    "imgs/japan8.jpg",
    "imgs/japan9.jpg",
    "imgs/japan10.jpg",
    "imgs/japan11.jpg",
    "imgs/japan12.jpg"
];
let currentIndex = 0;

function updateImage() {
    document.getElementById('dialogImages').src = images[currentIndex];
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}
