document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for(const image of images){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;

            if (image.classList.contains('large-img')) {
                image.width = 300;
                image.height = 200;
              } else if (image.classList.contains('medium-img')) {
                image.width = 150;
                image.height = 120;
              }
        })
        .catch(error => console.error('Error fetching image:', error));
    }

})