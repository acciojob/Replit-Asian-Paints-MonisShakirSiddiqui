//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const gridContainer = document.getElementById('grid-container');
  const changeButton = document.getElementById('change_button');
  const resetButton = document.getElementById('reset_button');

  // Function to create grid items
  function createGrid() {
    for (let i = 1; i <= 9; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.id = i;
      gridItem.textContent = i;
      gridContainer.appendChild(gridItem);
    }
  }

  // Function to change color of grid item
  function changeColor(blockId, color) {
    const block = document.getElementById(blockId);
    if (block) {
      block.style.backgroundColor = color;
    }
  }

  // Function to reset all grid item colors
  function resetColors() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      item.style.backgroundColor = 'transparent';
    });
  }

  // Event listener for Change Color button
  changeButton.addEventListener('click', function() {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;
    changeColor(blockId, color);
  });

  // Event listener for Reset button
  resetButton.addEventListener('click', function() {
    resetColors();
  });

  // Create grid on DOMContentLoaded
  createGrid();
});
