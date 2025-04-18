"use client";
import { useState } from "react";

const RemoveFromCart = ({ id, onRemove }) => {
  const [isRemoved, setIsRemoved] = useState(false);

  const handleRemove = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = storedCart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setIsRemoved(true);

    // Notify parent to update UI
    if (onRemove) {
      onRemove(id);
    }

    // Optional: trigger custom event (if you want to listen somewhere else)
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <button
      onClick={handleRemove}
      type="button"
      className="relative h-12 w-40 rounded border border-slate-500 bg-slate-500 text-white shadow-md transition hover:shadow-slate-500"
    >
      <span>{isRemoved ? "Removed" : "Remove from Cart"}</span>
    </button>
  );
};

export default RemoveFromCart;
