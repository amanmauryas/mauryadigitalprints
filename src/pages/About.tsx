import React, { useState } from "react";

export default function AboutUs() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen py-12" : "bg-gray-100 text-gray-900 min-h-screen py-12"}>
      <div className="container mx-auto px-6 lg:px-20">
        {/* Theme Toggle Button */}
        <div className="flex justify-end mb-4">
          <button 
            className="px-4 py-2 rounded bg-primary-purple text-white hover:bg-opacity-90"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <h1 className="text-4xl font-bold text-center text-primary-purple mb-6">
          About Us
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Welcome to <span className="font-semibold">Maurya Digital Print</span>, your one-stop destination for high-quality digital printing solutions. 
          With years of experience in the industry, we are committed to providing innovative and cost-effective printing services that meet the needs of businesses and individuals alike.
        </p>
        
        {/* Mission & Vision */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className={darkMode ? "bg-gray-800 p-6 rounded-lg shadow-lg" : "bg-white p-6 rounded-lg shadow-lg"}>
            <h2 className="text-2xl font-semibold text-primary-purple mb-3">Our Mission</h2>
            <p>
              Our mission is to deliver top-notch printing services that empower brands and businesses with stunning visuals and reliable print materials.
            </p>
          </div>
          <div className={darkMode ? "bg-gray-800 p-6 rounded-lg shadow-lg" : "bg-white p-6 rounded-lg shadow-lg"}>
            <h2 className="text-2xl font-semibold text-primary-purple mb-3">Our Vision</h2>
            <p>
              We envision becoming a leading digital printing company known for innovation, excellence, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-primary-purple mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className={darkMode ? "bg-gray-800 p-6 rounded-lg shadow-lg" : "bg-white p-6 rounded-lg shadow-lg"}>
              <h3 className="text-xl font-semibold text-primary-purple mb-2">Quality Assurance</h3>
              <p>We use premium materials and advanced printing techniques to ensure the best quality prints.</p>
            </div>
            <div className={darkMode ? "bg-gray-800 p-6 rounded-lg shadow-lg" : "bg-white p-6 rounded-lg shadow-lg"}>
              <h3 className="text-xl font-semibold text-primary-purple mb-2">Timely Delivery</h3>
              <p>We value your time and ensure quick turnaround times without compromising on quality.</p>
            </div>
            <div className={darkMode ? "bg-gray-800 p-6 rounded-lg shadow-lg" : "bg-white p-6 rounded-lg shadow-lg"}>
              <h3 className="text-xl font-semibold text-primary-purple mb-2">Affordable Pricing</h3>
              <p>We offer competitive pricing to provide high-quality services at budget-friendly rates.</p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-primary-purple mb-6">Meet Our Founder</h2>
          <div className="flex flex-col items-center">
            <img 
              src="./assets/founder.jpg" 
              alt="Founder" 
              className="w-40 h-40 rounded-full shadow-lg mb-4" 
            />
            <h3 className="text-2xl font-semibold">Arvind Maurya</h3>
            <p className="italic">Founder & CEO, Maurya Digital Print</p>
            <p className="max-w-xl mt-4">
              "At Maurya Digital Print, our goal is to redefine the printing experience with unmatched quality and customer service. 
              We believe in creating lasting impressions through every print we deliver. Thank you for trusting us with your printing needs."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}