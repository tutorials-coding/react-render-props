import React from "react";
import { MdShoppingCart } from "react-icons/md";

import "./CartIcon.css";

export const CartIcon = ({ renderBadge = () => null, onClick }) => {
  return (
    <div className="carticon__container" onClick={onClick}>
      <div className="carticon__badgecontaiener">{renderBadge()}</div>
      <MdShoppingCart className="carticon__icon" />
    </div>
  );
};
