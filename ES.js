document.addEventListener("DOMContentLoaded", function() {
    const screen = document.querySelector('.screen');
    const gridSizeInput = document.getElementById('grid-size');
    const createGridButton = document.getElementById('create-grid');

    function createGrid(size) {
        screen.innerHTML = ''; // Clear any existing grid
        const container = document.createElement("div");
        container.classList.add("grid-container");

        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        const itemCount = size * size;
        for (let i = 1; i <= itemCount; i++) {
            const div = document.createElement("div");
            div.classList.add("grid-item");

            // Add event listener for permanent color change on hover
            div.addEventListener('mouseenter', function() {
                div.style.backgroundColor = '#999'; // Change to desired color
            });

            container.appendChild(div);
        }

        screen.appendChild(container);
    }

    // Create initial grid
    createGrid(parseInt(gridSizeInput.value));

    // Update grid based on user input
    createGridButton.addEventListener('click', function() {
        const gridSize = parseInt(gridSizeInput.value);
        if (gridSize >= 2 && gridSize <= 64) {
            createGrid(gridSize);
        } else {
            alert("Please enter a size between 2 and 64.");
        }
    });
});
