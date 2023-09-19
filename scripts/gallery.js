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
        "images/ceramics/mugs_2.jpg",
        "images/ceramics/mugs_3.jpg",
        "images/ceramics/mugs_1.jpg",
      ],
    },
    {
      id: "woodGallery",
      featuredId: "woodGalleryFeatured",
      imageUrls: [
        "images/ceramics/wood_1.jpg",
        "images/ceramics/wood_2.jpg",
        "images/ceramics/wood_3.jpg",
        "images/ceramics/wood_4.jpg",
        "images/ceramics/wood_5.jpg",
      ],
    },
    {
      id: "cupsGallery",
      featuredId: "cupsGalleryFeatured",
      imageUrls: [
        "images/ceramics/cups_5.jpg",
        "images/ceramics/cups_6.jpg",
        "images/ceramics/cups_7.jpg",
        "images/ceramics/cups_8.jpg",
      ],
    },
    {
      id: "tankGallery",
      featuredId: "tankGalleryFeatured",
      imageUrls: ["images/ceramics/tank_1.jpg", "images/ceramics/tank_2.jpg"],
    },
    {
      id: "hands_sphereGallery",
      featuredId: "hands_sphereGalleryFeatured",
      imageUrls: [
        "images/ceramics/hands_sphere_2.jpg",
        "images/ceramics/hands_sphere_3.jpg",
        "images/ceramics/hands_sphere_1.jpg",
        "images/ceramics/hands_sphere_4.jpg",
      ],
    },
    {
      id: "dinnerSetGallery",
      featuredId: "dinnerSetGalleryFeatured",
      imageUrls: [
        "images/ceramics/dinner_set_1.jpg",
        "images/ceramics/dinner_set_2.jpg",
      ],
    },
    {
      id: "marbledGallery",
      featuredId: "marbledGalleryFeatured",
      imageUrls: [
        "images/ceramics/marbled_1.jpg",
        "images/ceramics/marbled_2.jpg",
        "images/ceramics/marbled_3.jpg",
      ],
    },
    {
      id: "vinesGallery",
      featuredId: "vinesGalleryFeatured",
      imageUrls: [
        "images/ceramics/vines_1.jpg",
        "images/ceramics/vines_2.jpg",
        "images/ceramics/vines_3.jpg",
        "images/ceramics/vines_4.jpg",
        "images/ceramics/vines_5.jpg",
        "images/ceramics/vines_6.jpg",
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
