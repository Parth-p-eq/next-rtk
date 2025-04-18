"use client";

const AddToCart = ({ id }) => {
  const handleClick = () => {
    // Get current cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const itemExists = existingCart.find((item) => item.id === id);

    let updatedCart;
    if (itemExists) {
      // Increase quantity if already exists
      updatedCart = existingCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // Add new product with quantity 1
      updatedCart = [...existingCart, { id, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log("Added to cart:", updatedCart);
  };

  return (
    <button
      onClick={handleClick}
      type="submit"
      className="relative h-12 w-30 rounded border border-slate-500 bg-slate-500 text-white shadow-md transition hover:shadow-slate-500"
    >
      <span>Add to Cart</span>
    </button>
  );
};

export default AddToCart;
