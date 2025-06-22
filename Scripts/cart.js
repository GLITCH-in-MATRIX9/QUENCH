document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-container");
  const cartTotal= document.getElementById("cart-total");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "0";
    return;
  }

   let totalPrice = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <img class="cart-images" src="${item.img}" alt="${item.name}" />
      <div>
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      </div>
      <button class="remove-btn" data-index="${index}" title="Remove this item">🗑️</button>
    `;

    cartContainer.appendChild(div);

    const numericPrice=parseInt(item.price.replace("₹"," ").trim());
    totalPrice+=numericPrice;
  });

//   set the total price
    cartTotal.textContent='₹' + totalPrice.toString();

  document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", () => {
      const indexToRemove = parseInt(button.getAttribute("data-index"));
      cart.splice(indexToRemove, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload(); // Reload to update view
    });
  });
});
