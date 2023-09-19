// gallery.js

// Function to generate gallery items from a list of image URLs
function generateGallery(imageUrls, galleryID) {
  const galleryElement = document.getElementById(galleryID);

  if (!galleryElement) {
    console.error(`Gallery element with ID '${galleryId}' not found.`);
    return;
  }

  imageUrls.forEach((imageUrl, index) => {
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
function setFeatured(imageUrl, galleryID) {
  document.getElementById(galleryID + "featured").src = imageUrl;
}
