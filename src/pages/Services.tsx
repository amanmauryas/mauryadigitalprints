import React from "react";

export default function Services() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-primary-purple mb-6">
          Our Services
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/9/KD/AU/ID/22187231/automatic-industrial-digital-printing-machines-inkjet-printers-500x500.jpg" alt="Service 1" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-primary-purple mb-2">Digital Printing</h3>
            <p>High-quality digital prints for all your business and personal needs.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyAmNSAkM3PgAbcoK5dss7jP9hYBZKk_C-hQ&s" alt="Service 2" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-primary-purple mb-2">Offset Printing</h3>
            <p>Professional-grade offset printing with superior color accuracy.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://images.teamshirts.net/image/upload/c_crop,w_1920,h_1024,x_0,y_0/q_auto,fl_lossy,f_auto,w_768/New%20Landingpages/UK/hero/business-mobile" alt="Service 3" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-primary-purple mb-2">Custom Merchandise</h3>
            <p>Get customized t-shirts, mugs, and more with your branding.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
