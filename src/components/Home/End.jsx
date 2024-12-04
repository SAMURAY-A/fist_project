import React, { useState } from "react";

export default function End() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "Style",
      content:
        "Vitae molestie metus elementum ornare mauris. Occaecat, atque veniam dictum exceptetur.",
    },
    {
      title: "Trending Fashion",
      content:
        "Vitae molestie metus elementum ornare mauris. Occaecat, atque veniam dictum excepteur.",
    },
    {
      title: "People & Places",
      content:
        "Vitae molestie metus elementum ornare mauris. Occaecat, atque veniam dictum excepteur.",
    },
    {
      title: "Before-After",
      content:
        "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col lg:flex-row gap-8 p-6 mx-auto max-w-screen-lg">
        <div className="bg-[#D3B9B3] text-white p-6 rounded-lg w-full lg:w-1/3">
          <h2 className="text-4xl font-bold mb-6">Area of Expertise!</h2>
          {sections.map((section, index) => (
            <div key={index} className="border-b border-white last:border-b-0">
              <button
                onClick={() => toggleSection(index)}
                className="w-full text-left py-4 font-semibold flex justify-between items-center"
              >
                {section.title}
                <span>
                  {activeIndex === index ? (
                    <>&#9650;</> 
                  ) : (
                    <>&#9660;</>
                  )}
                </span>
              </button>
              {activeIndex === index && section.content && (
                <div className="py-2 text-sm text-gray-200">{section.content}</div>
              )}
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <img
              src="https://websitedemos.net/fashion-lifestyle-02/wp-content/uploads/sites/427/2020/01/fashion-shopping.jpg"
              alt="Content 1"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              I've Worked with from Big Agencies to New Bloggers.
            </h3>
            <p className="text-gray-600 mb-4">
              Molestiae purus facilisi nonummy soluta nisi odit, ac taciti
              voluptatibus, eveniet veritatis cubilia magna. Imperdiet.
            </p>
            <button className="text-sm text-[#D3B9B3] border border-[#D3B9B3] py-2 px-4 rounded hover:bg-[#D3B9B3] hover:text-white transition">
              Read More
            </button>
          </div>
          <div className="text-center">
            <img
              src="https://websitedemos.net/fashion-lifestyle-02/wp-content/uploads/sites/427/2020/01/makeup-kit.jpg"
              alt="Content 2"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              I Can Help You Take Your Next Step Regardless of Size.
            </h3>
            <p className="text-gray-600 mb-4">
              Molestiae purus facilisi nonummy soluta nisi odit, ac taciti
              voluptatibus, eveniet veritatis cubilia magna. Imperdiet.
            </p>
            <button className="text-sm text-[#D3B9B3] border border-[#D3B9B3] py-2 px-4 rounded hover:bg-[#D3B9B3] hover:text-white transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
