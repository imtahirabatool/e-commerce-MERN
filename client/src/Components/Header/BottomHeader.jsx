import React from "react";
import Row from "../common/Row";

const menus = [
  "Jewelry & Accessories",
  "Clothing & Shoe",
  "Home & Living",
  "Wedding & Party",
  "Toys & Entertainment",
  "Art & Collection",
  "Craft supplies & Tools",
];

const BottomHeader = () => {
  return (
    <div className="w-full px-[10%] h-[60px] bg-[#7b848d0d] ">
      <Row className="flex items-center h-full justify-between">
        {menus.map((items) => (
          <p className="text[16px] text-slate-800" key={items}>
            {items}
          </p>
        ))}
      </Row>
    </div>
  );
};

export default BottomHeader;
