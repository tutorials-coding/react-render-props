import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import { CartIcon } from "./CartIcon/CartIcon";
import "./Example.css";

const renderBadge = (count) => {
  return (
    <div className="example__badgecontainer">
      <div className="example__badge">{count}</div>
    </div>
  );
};

export const Example = () => {
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    console.log("Cart Item clicked");
  };

  const handleAddItemClick = () => {
    setCart([...cart, {}]);
  };

  return (
    <div className="example__container">
      <div className="example__content">
        <Button onClick={handleAddItemClick}>Add new item</Button>
        <CartIcon
          renderBadge={() => renderBadge(cart.length)}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
