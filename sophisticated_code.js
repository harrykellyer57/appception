/* 
Filename: sophisticated_code.js 

This code demonstrates a sophisticated and elaborate solution for an e-commerce website's shopping cart functionality.

The code is intentionally lengthy to showcase various features and workflows within the shopping cart system.

Note: This code is a simplified example and may not be optimized for production use.

*/

// Shopping cart class
class ShoppingCart {
  constructor() {
    this.cartItems = [];
  }

  // Add item to cart
  addToCart(item) {
    if (item.quantity > 0) {
      const existingItemIndex = this.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        this.cartItems[existingItemIndex].quantity += item.quantity;
      } else {
        this.cartItems.push(item);
      }

      console.log(`Added ${item.quantity} ${item.name} to the cart.`);
    } else {
      console.log("Please enter a valid quantity.");
    }
  }

  // Remove item from cart
  removeFromCart(itemId, quantity) {
    const itemIndex = this.cartItems.findIndex(
      (cartItem) => cartItem.id === itemId
    );

    if (itemIndex !== -1) {
      const item = this.cartItems[itemIndex];

      if (item.quantity <= quantity) {
        this.cartItems.splice(itemIndex, 1);
        console.log(`Removed ${item.name} from the cart.`);
      } else {
        item.quantity -= quantity;
        console.log(`Removed ${quantity} ${item.name} from the cart.`);
      }
    } else {
      console.log("Item not found in cart.");
    }
  }

  // Update item quantity in cart
  updateQuantity(itemId, newQuantity) {
    const item = this.cartItems.find((cartItem) => cartItem.id === itemId);

    if (item) {
      if (newQuantity > 0) {
        item.quantity = newQuantity;
        console.log(`Updated ${item.name} quantity to ${newQuantity}.`);
      } else {
        this.removeFromCart(itemId, item.quantity);
      }
    } else {
      console.log("Item not found in cart.");
    }
  }

  // Calculate total price of items in cart
  calculateTotalPrice() {
    let totalPrice = 0;

    this.cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });

    return totalPrice;
  }

  // Checkout and process payment
  checkout() {
    const totalPrice = this.calculateTotalPrice();
    console.log(`Total price: $${totalPrice}`);

    // Payment processing logic
    console.log("Processing payment...");

    // Simulated delay for processing
    setTimeout(() => {
      console.log("Payment processed successfully. Order placed!");
      this.cartItems = []; // Clear cart after successful checkout
    }, 3000);
  }

  // Get cart items
  getCartItems() {
    return this.cartItems;
  }
}

// Sample usage

const cart = new ShoppingCart();

// Add items to cart
const item1 = { id: 1, name: "Shirt", price: 19.99, quantity: 2 };
const item2 = { id: 2, name: "Jeans", price: 34.99, quantity: 1 };
const item3 = { id: 3, name: "Shoes", price: 49.99, quantity: 3 };

cart.addToCart(item1);
cart.addToCart(item2);
cart.addToCart(item3);

// Update quantity of an item in the cart
cart.updateQuantity(1, 5);

// Remove an item from the cart
cart.removeFromCart(2, 1);

// Display cart items
console.log("Cart Items: ", cart.getCartItems());

// Checkout and process payment
cart.checkout();