// gallery.js

// Function to generate gallery items from a list of image URLs
function generateGallery(images) {
  const galleryElement = document.getElementById("gallery");

  images.forEach((imageUrl, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    imgElement.alt = "Image " + (index + 1);
    imgElement.onclick = () => setFeatured(imageUrl);

    galleryItem.appendChild(imgElement);
    galleryElement.appendChild(galleryItem);
  });
}

// Function to set the featured image
function setFeatured(imageUrl) {
  document.getElementById("featured").src = imageUrl;
}
