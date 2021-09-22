class CartItem {
  id;
  title;
  price;
  quantity;
  constructor(idValue, titleValue, priceValue, quantityValue = 1) {
    this.title = titleValue;
    this.price = priceValue;
    this.id = idValue;
    this.quantity = quantityValue;
  }

  getTotal() {
    return parseFloat(this.price) * this.quantity;
  }

  render() {
    return `
      <div class="cart-item-primary">
        <div class="cart-item-title">${this.title}</div>
        <div class="cart-item-price">
          <span class="cart-item-currency">Rs </span>
          <span class="cart-item-price">${this.getTotal()}</span>
        </div>
      </div>
      <div class="actions">
        <div class="action-left"><i class="fas ${
          this.quantity > 1 ? "fa-minus" : "fa-trash"
        }"></i></div>
        <div class="quantity">${this.quantity}</div>
        <div class="action-right"><i class="fas fa-plus"></i></div>
      </div>
    `;
  }
}

const CART_ITEM_ACTIONS = {
  INCREASE_QUANTITY: "increase",
  DECREASE_QUANITTY: "decrease",
  DELETE_ITEM: "delete",
};

let cartItems = [];

const updateTotal = (totalValue) => {
  const cartTotalElement = document.querySelector("#cartTotal");
  cartTotalElement.textContent = totalValue;
};

const reCalculateCartTotal = () => {
  // TODO: this stays here for the beginners who're not familiar with reduce
  // let cartTotal = 0;
  // cartItems.forEach((cartItem) => {
  //   const itemTotal = cartItem.getTotal();
  //   cartTotal += itemTotal;
  // });
  const cartTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.getTotal();
  }, 0);
  updateTotal(cartTotal);
};

const itemExistsInCartAlready = (itemId) => {
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === itemId;
  });
  return {
    exists: !!existingItem,
    existingItem,
  };
};

const addItemToCart = (cartItem) => {
  const cartItemHTML = cartItem.render();
  const cartList = document.querySelector(".cart-list");
  const newCartItem = document.createElement("DIV");
  newCartItem.classList.add("cart-list-group-item");
  newCartItem.innerHTML = cartItemHTML;
  newCartItem.dataset.id = cartItem.id;
  cartList.append(newCartItem);
  cartItems.push(cartItem);
};

const editItemInCart = (cartItem, action) => {
  const existingItem = document.querySelector(
    `.cart .cart-list .cart-list-group-item[data-id="${cartItem.id}"]`
  );

  if (action === CART_ITEM_ACTIONS.DELETE_ITEM) {
    existingItem.remove();
    cartItems = cartItems.filter((cItem) => {
      return cItem.id !== cartItem.id;
    });
    reCalculateCartTotal();
    return;
  }

  if (action === CART_ITEM_ACTIONS.INCREASE_QUANTITY) {
    cartItem.quantity++;
  } else if (action === CART_ITEM_ACTIONS.DECREASE_QUANITTY) {
    cartItem.quantity--;
  }
  existingItem.innerHTML = cartItem.render();
  reCalculateCartTotal();
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
    // Item does not exist in the cart
    const cartItem = new CartItem(itemId, itemTitle, itemPrice);
    addItemToCart(cartItem);
  } else {
    // item does exist in the cart already
    editItemInCart(existingItem, CART_ITEM_ACTIONS.INCREASE_QUANTITY);
  }
  reCalculateCartTotal();
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
  const cartListElement = document.querySelector(".cart-list");
  cartListElement.addEventListener("click", (clickEvent) => {
    const target = clickEvent.target;
    const listItem = target.closest(".cart-list-group-item");
    const itemId = listItem.dataset.id;
    const { existingItem } = itemExistsInCartAlready(itemId);
    if (target.classList.contains("fa-plus")) {
      // plus button
      editItemInCart(existingItem, CART_ITEM_ACTIONS.INCREASE_QUANTITY);
    } else if (target.classList.contains("fa-minus")) {
      // plus button
      editItemInCart(existingItem, CART_ITEM_ACTIONS.DECREASE_QUANITTY);
    } else if (target.classList.contains("fa-trash")) {
      // plus button
      editItemInCart(existingItem, CART_ITEM_ACTIONS.DELETE_ITEM);
    }
  });
};

const main = () => {
  bindEventHandlers();
};

window.onload = () => {
  main();
};
