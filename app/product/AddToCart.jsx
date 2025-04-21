"use client";

const AddToCart = ({ id }) => {
  const handleClick = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemExists = existingCart.find((item) => item.id === id);

    let updatedCart;
    if (itemExists) {
      updatedCart = existingCart.map((item) =>
        item.id === id ? { ...item } : item
      );
    } else {
      updatedCart = [...existingCart, { id }];
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
