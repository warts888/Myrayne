// Keeps track of the current page
let currentPage = 0;
const pages = document.querySelectorAll('.page');
const compass = document.getElementById('sun-moon');
const starsContainer = document.querySelector('.stars');
const starCount = 250; // Number of stars

// Star generation (only needs to run once)
for (let i = 0; i < starCount; i++) {
    const star = document.createElement('span');
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 2 + 1; // Random star size

    star.style.left = `${posX}vw`;
    star.style.top = `${posY}vh`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    starsContainer.appendChild(star);
}

// Function to go to the next page
function nextPage() {
    // Prevents auto-advancement if we're at the 'night' page

    currentPage = (currentPage + 1) % pages.length;
    updatePageTransform();

    // Get the current page class (to check if it's a transition page)
    const currentPageClass = pages[currentPage].classList[1];
    
    // Only auto-advance if we are on a transition page
    if (currentPageClass === 'day-to-dusk' || currentPageClass === 'dusk-to-night') {
        setTimeout(nextPage, 3500); // Automatically move to the next page after 2 seconds
    }
}

// Function to go directly to a specific page
function goToPage(pageIndex) {
    currentPage = pageIndex;
    updatePageTransform();
}

// Helper function to update page positions
function updatePageTransform() {
    pages.forEach((page, index) => {
        page.style.transform = `translateX(-${currentPage * 100}%)`;
    });
}




