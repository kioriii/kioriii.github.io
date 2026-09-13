// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery and respond appropriately on click.

function activateGallery () {
  // alert("Hello from the gallery file!");

  // let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");

   // Image info to be updated
   let galleryInfo = document.querySelector("#gallery-info");
   let title = galleryInfo.querySelector(".title");
   let description = galleryInfo.querySelector(".description");
   
  thumbnails.forEach(function(thumbnail)  {
    thumbnail.addEventListener("click",function() {
    // Set clicked image as main image.
    let newImageSrc = thumbnail.dataset.largeVersion; 
    console.log(thumbnail)
    console.log(mainImage);
    console.log(newImageSrc);

    mainImage.setAttribute("src", newImageSrc);

    // Change which image is current and has an orange outline on the thumbnail.
    document.querySelector(".current").classList.remove("current");
    thumbnail.parentNode.classList.add("current");

    // Update image info based on the chosen thumbnail.
    title.innerHTML = thumbnail.dataset.title;
    description.innerHTML = thumbnail.dataset.description;
    });
  });
}