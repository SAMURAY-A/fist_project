import React from "react";

export default function Section() {
  return (
    <>
      <div className="container bg-white">
        <div className="text-center mb-3">
          <p className="mb-3 font-medium text-lg">Services for All Age Women</p>
          <h2 className="text-[48px] w-[770px] mx-auto font-medium">I Love to Help People Feel Great about How They Look.</h2>
        </div>
        <div className="flex gap-3 items-center">
          <img
            className="p-2.5 w-[256px] h-[362px]"
            src="https://websitedemos.net/fashion-lifestyle-02/wp-content/uploads/sites/427/2020/01/model.jpg"
            alt="picture"
          />
          <img
            className="p-2.5 w-[259px] h-[429px]"
            src="https://websitedemos.net/fashion-lifestyle-02/wp-content/uploads/sites/427/2020/01/model-2.jpg"
            alt="picture"
          />
          <img
            className="p-2.5 h-[463px] w-[259px]"
            src="https://websitedemos.net/fashion-lifestyle-02/wp-content/uploads/sites/427/2020/01/model-3.jpg"
            alt="picture"
          />
          <img
            className="p-2.5 w-[259px] h-[397px]"
            src="https://websitedemos.net/fashion-lifestyle-02/wp-content/uploads/sites/427/2020/01/model-4.jpg"
            alt="picture"
          />
        </div>
        <div className="flex pt-[60px] pb-[100px]">
          <div className="flex gap-3 items-start">
            <h2 className="text-4xl text-[#EBCFC1]">01</h2>
            <div className="w-[316px] text-[#383f42]">
              <h3 className="text-[25px] mb-5 font-semibold text-black">Wardrobe Styling</h3>
              <p className="text-[15px] ">
                Sem curae incidunt in. Illum, culpa debitis omnis convallis
                fugiat temporibus
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <h2 className="text-4xl text-[#EBCFC1]">02</h2>
            <div className="w-[316px] text-[#383f42]">
              <h3 className="text-[25px] mb-5 font-semibold text-black">Wardrobe Styling</h3>
              <p className="text-[15px] ">
                Sem curae incidunt in. Illum, culpa debitis omnis convallis
                fugiat temporibus
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <h2 className="text-4xl text-[#EBCFC1]">03</h2>
            <div className="w-[316px] text-[#383f42]">
              <h3 className="text-[25px] mb-5 font-semibold text-black">Wardrobe Styling</h3>
              <p className="text-[15px] ">
                Sem curae incidunt in. Illum, culpa debitis omnis convallis
                fugiat temporibus
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
