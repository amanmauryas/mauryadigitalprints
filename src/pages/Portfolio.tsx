import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-primary-purple mb-6">
          Our Portfolio
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="./assets/portfolio1.jpg" alt="Portfolio 1" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-primary-purple mb-2">Project Name 1</h3>
            <p>A brief description of the project showcasing our printing expertise.</p>
          </div>

          {/* Portfolio Item 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="./assets/portfolio2.jpg" alt="Portfolio 2" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-primary-purple mb-2">Project Name 2</h3>
            <p>A stunning print job that highlights our commitment to quality.</p>
          </div>

          {/* Portfolio Item 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="./assets/portfolio3.jpg" alt="Portfolio 3" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-primary-purple mb-2">Project Name 3</h3>
            <p>Custom prints designed to elevate brand identity and appeal.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
