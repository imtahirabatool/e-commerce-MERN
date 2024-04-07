import React from "react";
import Row from "../common/Row";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <div className="w-full px-[10%] py-[70px]">
      <Row className="w-full items-centre justify-between">
        <div className="w-[46%]">
          <h1 className="text-[74px] text-slate-950 font-light">Collection</h1>
          <p className="text-[30px] text-black mt-[52px]">
            You can explore and shop different products from various brands.
          </p>
          <Button />
        </div>
        <div className="w-[46%]">
          <div className="w-[324px] h-[442px] relative">
            <img
              className="animate-[wobble_10s_ease-in] w-full h-full rounded-tl-[160px] rounded-br-[160px]"
              src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Error"
            />
            <div className="animate-[wobble_10s_ease-in] w-[324px] h-[442px] absolute rounded-tl-[160px] rounded-br-[160px] -z-[1] border-[2px] border-[#00000040] top-[20px] left-[18px]" />
          </div>
        </div>
      </Row>
    </div>
  );
};

export default HeroSection;
