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

        div.dataset.interactions = "0";

        div.addEventListener("mouseover", () => {
            let interactions = parseInt(div.dataset.interactions);

            if (interactions === 0) {
                div.style.backgroundColor = getRandomRGBColor(); // First interaction: set random color
            } else {
                div.style.backgroundColor = darkenColor(div.style.backgroundColor, 0.1); // Subsequent interactions: darken the color
            }

            // Increment interaction count
            div.dataset.interactions = (interactions + 1).toString();
            
        });

        container.appendChild(div);
    }
}

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function darkenColor(rgbColor, factor) {
    // Extract RGB values
    let [r, g, b] = rgbColor.match(/\d+/g).map(Number);
    
    // Darken each component
    r = Math.max(0, Math.floor(r * (1 - factor)));
    g = Math.max(0, Math.floor(g * (1 - factor)));
    b = Math.max(0, Math.floor(b * (1 - factor)));
    
    return `rgb(${r}, ${g}, ${b})`;
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