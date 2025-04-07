// Add tabindex attribute to all images on page load
window.onload = function () {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.setAttribute('tabindex', '0');
    });
}

// Update function for onmouseover event
function upDate(previewPic) {
    const imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}

// Undo function for onmouseleave event
function undo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Add listeners for onfocus and onblur
const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('focus', () => upDate(image));
    image.addEventListener('blur', undo);
});