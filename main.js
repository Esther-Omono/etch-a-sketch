const container = document.getElementById("container");
const button = document.getElementById("reset-button");

function createGrid(squaresPerSide) {
    container.innerHTML = "";

    const containerSize = 960;  // Size of the container (width and height)
    
    // Set the container's CSS
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;
    
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        
        // Set flex-basis and max-width as percentage
        const percentage = (100 / squaresPerSide).toFixed(8);
        div.style.flexBasis = `${percentage}%`;
        div.style.maxWidth = `${percentage}%`;

        div.addEventListener("mouseover", () => {
            div.classList.add("hovered");
        });

        container.appendChild(div);
    }
}

button.addEventListener("click", () => {
    let squaresPerSide = parseInt(prompt("Enter the number of squares per side (maximum 100):"));

    if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(squaresPerSide);
});

createGrid(16);