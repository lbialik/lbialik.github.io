// gallery.js

// Function to generate multiple galleries
document.addEventListener("DOMContentLoaded", function () {
  // Gallery data (image URLs and associated IDs)
  const galleries = [
    {
      id: "teapotGallery",
      featuredId: "teapotGalleryFeatured",
      imageUrls: [
        "images/ceramics/teapot_1.jpg",
        "images/ceramics/teapot_2.jpg",
        "images/ceramics/teapot_3.jpg",
        "images/ceramics/teapot_4.jpg",
      ],
    },
    {
      id: "mugGallery",
      featuredId: "mugGalleryFeatured",
      imageUrls: [
        "images/ceramics/mugs_1.jpg",
        "images/ceramics/mugs_2.jpg",
        "images/ceramics/mugs_3.jpg",
      ],
    },
  ];

  // Initialize galleries
  galleries.forEach((gallery) => {
    generateFeatured(gallery.imageUrls[0], gallery.featuredId);
    generateGallery(gallery.imageUrls, gallery.id);
  });
});

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
