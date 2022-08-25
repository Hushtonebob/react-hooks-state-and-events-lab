import React, { useState } from "react";

function Item({ name, category }) {

  const [added, setIsOn] = useState(false);

function handlePush(){
  setIsOn((added) => !added);
}

  return (
    <li className={added ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={added ? "remove": "add"} onClick={handlePush}>{added ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
