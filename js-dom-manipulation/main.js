class CartItem {
  title;
  price;
  constructor(titleValue, priceValue) {
    this.title = titleValue;
    this.price = priceValue;
  }

  render() {
    return `
    <div class="cart-item-primary">
      <div class="cart-item-title">${this.title}</div>
      <div class="cart-item-price">
        <span class="cart-item-currency">Rs </span>
        <span class="cart-item-price">${this.price}</span>
      </div>
    </div>
    <div class="actions">
      <div class="action-left">-</div>
      <div class="quantity">1</div>
      <div class="action-right">+</div>
    </div>
    `;
  }
}

const itemExistsInCartAlready = (itemId) => {
  const existingItem = document.querySelector(
    `.cart .cart-list .cart-list-group-item[data-id="${itemId}"]`
  );
  return {
    exists: existingItem !== null,
    existingItem,
  };
};

const onMenuItemClick = (clickEvent) => {
  const listItem = clickEvent.currentTarget;
  const itemTextEl = listItem.querySelector(".item-text");
  const itemTitle = itemTextEl.textContent;
  const priceEl = listItem.querySelector(".item-price");
  const itemPrice = priceEl.textContent;
  const itemId = listItem.dataset.id;
  const { exists, existingItem } = itemExistsInCartAlready(itemId);
  if (!exists) {
    const cartItem = new CartItem(itemTitle, itemPrice);
    const cartItemHTML = cartItem.render();
    const cartList = document.querySelector(".cart-list");
    const newCartItem = document.createElement("DIV");
    newCartItem.classList.add("cart-list-group-item");
    newCartItem.innerHTML = cartItemHTML;
    newCartItem.dataset.id = itemId;
    cartList.append(newCartItem);
  } else {
    console.log("update the quantity");
    const quantityElement = existingItem.querySelector(".actions .quantity");
    const quantityValue = parseFloat(quantityElement.textContent);
    console.log(quantityValue);
    quantityElement.textContent = quantityValue + 1;
  }
};

const bindEventHandlers = () => {
  const menuItems = document.querySelectorAll(
    ".menu .list-group .list-group-item"
  );
  menuItems.forEach((item) => {
    item.addEventListener("click", (clickEvent) => {
      onMenuItemClick(clickEvent);
    });
  });
};

const main = () => {
  bindEventHandlers();
};

window.onload = () => {
  main();
};
