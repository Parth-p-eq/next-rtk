"use client";
import { useState } from "react";

const RemoveFromCart = ({ id, onRemove }) => {
  const [isRemoved, setIsRemoved] = useState(false);

  const handleRemove = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = storedCart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setIsRemoved(true);

    if (onRemove) {
      onRemove(id);
    }

    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <button
      onClick={handleRemove}
      type="button"
      className="relative h-12 w-40 rounded border border-slate-500 bg-slate-500 text-white shadow-md transition hover:shadow-slate-500"
    >
      <span>Remove from Cart</span>
    </button>
  );
};

export default RemoveFromCart;
