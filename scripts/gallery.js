// gallery.js

// Function to generate entire gallery, featured image included
function generateFeatured(imageUrl, featuredId) {
  // Create a new <img> element
  const imgElement = document.createElement("img");

  // Set the attributes for the <img> element
  imgElement.id = featuredId + "Img";
  imgElement.src = imageUrl;
  imgElement.alt = "Featured Image";
  imgElement.className = "featured-image";

  var parentElement = document.getElementById(featuredId);
  parentElement.appendChild(imgElement);
}

// Function to generate gallery items from a list of image URLs
function generateGallery(imageUrls, galleryId) {
  const galleryElement = document.getElementById(galleryId);

  if (!galleryElement) {
    console.error(`Gallery element with Id '${galleryId}' not found.`);
    return;
  }

  imageUrls.forEach((imageUrl, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    imgElement.alt = "Image " + (index + 1);
    imgElement.onclick = () => setFeatured(imageUrl, galleryId);

    galleryItem.appendChild(imgElement);
    galleryElement.appendChild(galleryItem);
  });
}

// Function to set the featured image
function setFeatured(imageUrl, galleryId) {
  document.getElementById(galleryId + "FeaturedImg").src = imageUrl;
}
