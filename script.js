let dialogRef = document.getElementById("imageDialog");
let current = 1;
let max = 12;
let currentIndex = 0;

const IMAGES = [
  "./imgs/mainPics/japan1.jpg",
  "./imgs/mainPics/japan2.jpg",
  "./imgs/mainPics/japan3.jpg",
  "./imgs/mainPics/japan4.jpg",
  "./imgs/mainPics/japan5.jpg",
  "./imgs/mainPics/japan6.jpg",
  "./imgs/mainPics/japan7.jpg",
  "./imgs/mainPics/japan8.jpg",
  "./imgs/mainPics/japan9.jpg",
  "./imgs/mainPics/japan10.jpg",
  "./imgs/mainPics/japan11.jpg",
  "./imgs/mainPics/japan12.jpg"
];

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
  const DIALOG = document.getElementById("imageDialog");
  const RECT = DIALOG.getBoundingClientRect();

  const CLICKED_INSIDE =
    event.clientX >= RECT.left &&
    event.clientX <= RECT.right &&
    event.clientY >= RECT.top &&
    event.clientY <= RECT.bottom;

  if (!CLICKED_INSIDE) {
    DIALOG.close();
  }
}

function updateCounter() {
  document.getElementById('imageCounter').innerText = `${current}/${max}`;
}

function plusSlides() {
  current = (current % max) + 1;
  updateCounter();
  currentIndex = (currentIndex + 1) % IMAGES.length;
  updateImage();
}

function minusSlides() {
  current = (current - 2 + max) % max + 1;
  updateCounter();
  currentIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
  updateImage();
}

function updateImage() {
  document.getElementById('dialogImages').src = IMAGES[currentIndex];
}

function handleKey(event) {
  if (!dialogRef.open) return;

  if (event.key === 'ArrowRight') {
    plusSlides();
  } else if (event.key === 'ArrowLeft') {
    minusSlides();
  } else if (event.key === 'Escape') {
    closeDialog();
  }
}
