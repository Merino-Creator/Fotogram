const dialogRef = document.getElementById("imageDialog");

function openDialog(index) {
    currentIndex = index;
    current = index + 1;
    updateImage();
    updateCounter();
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
    currentIndex = 0;
    current = 1;
}

function closeOnOutsideClick(event) {
  const dialog = document.getElementById("imageDialog");
  const rect = dialog.getBoundingClientRect();

  const clickedInside =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (!clickedInside) {
    dialog.close();
  }
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
    "/imgs/mainPics/japan1.jpg",
    "/imgs/mainPics/japan2.jpg",
    "/imgs/mainPics/japan3.jpg",
    "/imgs/mainPics/japan4.jpg",
    "/imgs/mainPics/japan5.jpg",
    "/imgs/mainPics/japan6.jpg",
    "/imgs/mainPics/japan7.jpg",
    "/imgs/mainPics/japan8.jpg",
    "/imgs/mainPics/japan9.jpg",
    "/imgs/mainPics/japan10.jpg",
    "/imgs/mainPics/japan11.jpg",
    "/imgs/mainPics/japan12.jpg"
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

function handleKey(event) {
    if (!dialogRef.open) return;

    if (event.key === 'ArrowRight') {
        showNextImage();
        plusSlides();
    } else if (event.key === 'ArrowLeft') {
        showPreviousImage();
        minusSlides();
    } else if (event.key === 'Escape') {
        closeDialog();
    }
}
