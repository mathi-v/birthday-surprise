// Function to move the element randomly
function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%"; // Position from top
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%"; // Position from left
}

// Wait for DOM content to be loaded before adding event listener
document.addEventListener("DOMContentLoaded", function() {
    const moveRandom = document.querySelector("#move-random");

    if (moveRandom) {
        moveRandom.addEventListener("mouseenter", function(e) {
            moveRandomEl(e.target); // Move the element when mouse enters
        });
    } else {
        console.log("Element not found: #move-random");
    }
});
