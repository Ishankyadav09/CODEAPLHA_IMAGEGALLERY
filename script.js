// =============================
// Select Elements
// =============================

const filterButtons = document.querySelectorAll(".filters button");
const images = document.querySelectorAll(".image");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// =============================
// Filter Images
// =============================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active Button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        images.forEach(image => {

            if (filter === "all") {

                image.style.display = "block";

            } else {

                if (image.classList.contains(filter)) {

                    image.style.display = "block";

                } else {

                    image.style.display = "none";

                }

            }

        });

    });

});

// =============================
// Open Lightbox
// =============================

images.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.style.display = "flex";

    });

});

// =============================
// Show Image
// =============================

function showImage() {

    const img = images[currentIndex].querySelector("img");

    lightboxImg.src = img.src;

}

// =============================
// Close
// =============================

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// =============================
// Next
// =============================

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;

    }

    showImage();

});

// =============================
// Previous
// =============================

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = images.length - 1;

    }

    showImage();

});

// =============================
// Close by Clicking Background
// =============================

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

// =============================
// Keyboard Support
// =============================

document.addEventListener("keydown", (e) => {

    if (lightbox.style.display !== "flex") return;

    if (e.key === "Escape") {

        lightbox.style.display = "none";

    }

    if (e.key === "ArrowRight") {

        nextBtn.click();

    }

    if (e.key === "ArrowLeft") {

        prevBtn.click();

    }

});