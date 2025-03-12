import React from "react";

export default function Services() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-primary-purple mb-6">
          Our Services
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 justify-center items-center text-center">

          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/9/KD/AU/ID/22187231/automatic-industrial-digital-printing-machines-inkjet-printers-500x500.jpg" alt="Service 1" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-primary-purple mb-2">Digital Printing</h3>
            <p>We offer high-quality digital printing for all your business, marketing, and personal needs.</p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyAmNSAkM3PgAbcoK5dss7jP9hYBZKk_C-hQ&s" alt="Service 2" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-primary-purple mb-2">Offset Printing</h3>
            <p>Get superior color accuracy and professional-grade offset printing for bulk orders.</p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://mplan.media/wp-content/uploads/2019/05/Best-Formats-For-Outdoor-Advertising-bg.webp" alt="Service 3" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-primary-purple mb-2">Outdoor Advertising</h3>
            <p>Enhance your brand’s visibility with customized billboards, banners, and signage solutions.</p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://websitedesignvapi.com/img/project/brand-promotion.png" alt="Service 4" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-primary-purple mb-2">Brand Promotion</h3>
            <p>Increase your brand awareness through strategic marketing and promotional campaigns.</p>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://etimg.etb2bimg.com/photo/80886133.cms" alt="Service 5" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-primary-purple mb-2">Digital Advertisement</h3>
            <p>Leverage online advertising to reach your target audience effectively across multiple platforms.</p>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://media.licdn.com/dms/image/v2/D5612AQHyLFkv9YBcGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715058774193?e=2147483647&v=beta&t=7yqv62DbvJWPvycGiDX4FGb79GOPsVB_dreB-SHh36E" alt="Service 6" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-primary-purple mb-2">Web Development</h3>
            <p>We build modern, responsive, and scalable websites tailored to your business needs.</p>
          </div>

          {/* Service 7 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://www.logoai.com/uploads/articles/2024/02/14/Screen%20Shot%202024-02-14%20at%202.45.42%20PM-1707896761.png" alt="Service 7" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-primary-purple mb-2">Graphic designing</h3>
            <p>Creative and professional graphic design services to enhance your brand identity and marketing materials.</p>
          </div>
          {/* Service 8 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://freshcodes.net/wp-content/uploads/2023/06/Process-of-Implementing-a-Customized-Solution.webp" alt="Service 7" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold text-primary-purple mb-2">Custom Business Solutions</h3>
            <p>We provide tailored solutions for all your business needs, ensuring seamless operations.</p>
          </div>
          {/* Service 9 */}
<div className="bg-white p-6 rounded-lg shadow-lg text-center">
  <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" alt="Service 9" className="w-full h-40 object-cover rounded mb-4" />
  <h3 className="text-xl font-semibold text-primary-purple mb-2">Content Creation & Copywriting</h3>
  <p>Engaging content and compelling copy to boost your brand’s voice and online presence.</p>
</div>

        </div>
      </div>
    </div>
  );
}
