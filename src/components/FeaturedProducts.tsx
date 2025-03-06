import React from 'react';
import { Printer, CreditCard, Shirt, Flag } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    icon: <Printer className="w-8 h-8" />,
    title: 'Digital Printing',
    description: 'High-quality brochures, flyers, and marketing materials',
    image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=2940'
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: 'Business Cards',
    description: 'Premium business cards that make lasting impressions',
    image: 'https://asset.gecdesigns.com/img/visiting-card-templates/attractive-business-card-template-to-promote-your-brand-1680963547355-cover.webp'
  },
  {
    icon: <Shirt className="w-8 h-8" />,
    title: 'Custom Apparel',
    description: 'Personalized t-shirts, caps, and promotional wear',
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=2940'
  },
  {
    icon: <Flag className="w-8 h-8" />,
    title: 'Banners & Signs',
    description: 'Eye-catching banners and signage for any occasion',
    image: 'https://images.template.net/153477/banner-template-m8lyw.jpg'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Products</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          className="pb-12"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-primary-purple dark:text-primary-pink">{product.icon}</div>
                    <h3 className="text-xl font-semibold ml-3 dark:text-white">{product.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}