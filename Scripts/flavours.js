document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".flavour-button").forEach((button, index) => {
    button.addEventListener("click", () => {
      const name = document.querySelectorAll(".flavour-name")[index].innerText;
      const price = document.querySelectorAll(".flavour-price")[index].innerText;
      const img = document.querySelectorAll(".flavour-image")[index].getAttribute("src");

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push({ name, price, img });

      localStorage.setItem("cart", JSON.stringify(cart));
    
      // Show snackbar notification
      const snackbar = document.getElementById("snackbar");
      snackbar.className = "show";
      snackbar.innerText = `${name} added to cart!`;

      setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
      }, 2000);
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const flavourTypeSelect = document.getElementById("flavour-type");
  const priceRange = document.getElementById("price-range");
  const sortingSelect = document.querySelector(".sorting-select");
  const flavourCardsContainer = document.querySelector(".flavours-section-right");

  const allFlavourCards = Array.from(document.querySelectorAll(".flavour-card"));

  function applyFiltersAndSort() {
    const selectedType = flavourTypeSelect.value;
    const maxPrice = parseInt(priceRange.value);
    const sortOption = sortingSelect.value;

    let filteredCards = allFlavourCards.filter(card => {
      const type = card.dataset.type;
      const price = parseInt(card.dataset.price);
      return (selectedType === "all" || type === selectedType) && price <= maxPrice;
    });

    if (sortOption === "price-low-high") {
      filteredCards.sort((a, b) => a.dataset.price - b.dataset.price);
    } else if (sortOption === "price-high-low") {
      filteredCards.sort((a, b) => b.dataset.price - a.dataset.price);
    }

    // Clear and re-add
    flavourCardsContainer.innerHTML = "";
    filteredCards.forEach(card => {
      flavourCardsContainer.appendChild(card);
    });
  }

  // Initial render
  applyFiltersAndSort();

  // Event listeners
  flavourTypeSelect.addEventListener("change", applyFiltersAndSort);
  priceRange.addEventListener("input", applyFiltersAndSort);
  sortingSelect.addEventListener("change", applyFiltersAndSort);
});


// adding a price range visualizer

const priceRange = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");
// Set initial value
priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
});

