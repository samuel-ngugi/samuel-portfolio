const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        if (navbar) {
            navbar.classList.remove("active");
        }
    });
});

const mainProjectImage = document.querySelector("#mainProjectImage");
const thumbnails = document.querySelectorAll(".thumbnail");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const projectImages = [
    {
        src: "prjct%20img/img1.png",
        alt: "Portfolio Project Image 1"
    },
    {
        src: "prjct%20img/img2.png",
        alt: "Portfolio Project Image 2"
    },
    {
        src: "prjct%20img/img3.png",
        alt: "Portfolio Project Image 3"
    },
    {
        src: "prjct%20img/img4.png",
        alt: "Portfolio Project Image 4"
    }
];

let currentImage = 0;

function showProjectImage(index) {

    if (!mainProjectImage) {
        return;
    }

    if (index < 0) {
        index = projectImages.length - 1;
    }

    if (index >= projectImages.length) {
        index = 0;
    }

    currentImage = index;

    mainProjectImage.src = projectImages[currentImage].src;
    mainProjectImage.alt = projectImages[currentImage].alt;

    thumbnails.forEach((thumbnail, i) => {

        thumbnail.classList.remove("active-thumb");

        if (i === currentImage) {
            thumbnail.classList.add("active-thumb");
        }

    });
}

thumbnails.forEach((thumbnail, index) => {

    thumbnail.addEventListener("click", () => {
        showProjectImage(index);
    });

});

if (nextBtn) {

    nextBtn.addEventListener("click", () => {

        currentImage++;

        if (currentImage >= projectImages.length) {
            currentImage = 0;
        }

        showProjectImage(currentImage);

    });

}

if (prevBtn) {

    prevBtn.addEventListener("click", () => {

        currentImage--;

        if (currentImage < 0) {
            currentImage = projectImages.length - 1;
        }

        showProjectImage(currentImage);

    });

}

showProjectImage(0);
