document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for(const image of images){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;
        })
    }

})

function setImageSize(imageId, width, height) {
    // Select the image element by its ID
    const image = document.getElementById(imageId);
    
    // Set the width and height dynamically
    image.style.width = width + 'px';
    image.style.height = height + 'px';
  }

  // Function to resize all images
  function resizeImages() {
    setImageSize('event1', 100, 150);  // Resize Image 1
    setImageSize('event2', 100, 150);  // Resize Image 2
    setImageSize('event3', 100, 150);  // Resize Image 3
    setImageSize('event4', 100, 150);  // Resize Image 4
  }