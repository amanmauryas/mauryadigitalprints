import React, { useState } from "react";

export default function Portfolio() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Handle opening modal
  const openModal = (index) => setSelectedImageIndex(index);

  // Handle closing modal
  const closeModal = () => setSelectedImageIndex(null);

  // Handle next image
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === portfolioData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous image
  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? portfolioData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-primary-purple mb-6">
          Our Portfolio
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded mb-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(index)}
              />
              <h3 className="text-xl font-semibold text-primary-purple mb-2">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Image Popup Modal with Carousel */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold px-3 py-1 rounded"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Left Button */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold px-3 py-1 rounded"
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing on button click
                prevImage();
              }}
            >
              ◀
            </button>

            {/* Display Image */}
            <img
              src={portfolioData[selectedImageIndex].image}
              alt="Selected"
              className="w-full h-auto rounded"
            />

            {/* Right Button */}
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold px-3 py-1 rounded"
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing on button click
                nextImage();
              }}
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


// Portfolio Data Array
const portfolioData = [
  { image: "./assets/portfolio1.png", title: "Brand Identity Design" },
  { image: "./assets/portfolio2.png", title: "E-commerce Website" },
  { image: "./assets/portfolio3.png", title: "Social Media Campaign" },
  { image: "./assets/portfolio4.png", title: "Mobile App UI/UX" },
  { image: "./assets/portfolio5.png", title: "Corporate Print Design" },
  { image: "./assets/portfolio6.png", title: "Logo & Branding" },
  { image: "./assets/portfolio7.png", title: "Brochure & Flyers" },
  { image: "./assets/portfolio8.png", title: "Web Development Project" },
  { image: "./assets/portfolio9.png", title: "Product Packaging" },
  { image: "./assets/portfolio10.png", title: "Marketing Collateral" },
  { image: "./assets/portfolio11.png", title: "Business Cards Design" },
  { image: "./assets/portfolio12.png", title: "Landing Page Design" },
  { image: "./assets/portfolio13.png", title: "3D Product Mockups" },
  { image: "./assets/portfolio14.png", title: "SEO & Digital Strategy" },
  { image: "./assets/portfolio15.png", title: "Custom Illustrations" },
];
