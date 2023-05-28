const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Get the input element and search icon
  const input = document.getElementById('input');
  const searchIcon = document.querySelector('.search ion-icon');

  // Add event listener to the search icon
  searchIcon.addEventListener('click', () => {
    searchProducts(input.value.toLowerCase());
  });

  // Add event listener to the input field for Enter key press
  input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      searchProducts(input.value.toLowerCase());
    }
  });

  // Search products function
  function searchProducts(keyword) {
    const items = document.querySelectorAll('.items');
    items.forEach(function(item) {
      const name = item.querySelector('.name').textContent.toLowerCase();
      const info = item.querySelector('.info').textContent.toLowerCase();

      if (name.includes(keyword) || info.includes(keyword)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
});


