import React from 'react';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    content: 'Maurya Digital Print delivered exceptional quality for our marketing materials. Their attention to detail and quick turnaround time exceeded our expectations.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2940'
  },
  {
    name: 'Michael Chen',
    role: 'Event Coordinator',
    company: 'EventPro',
    content: 'The team at Maurya went above and beyond to ensure our event banners were perfect. Their customer service is outstanding!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2940'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    company: 'Design Studio',
    content: 'We rely on Maurya Digital Print for all our printing needs. Their consistency and quality are unmatched in the industry.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2940'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-r from-black via-primary-purple to-primary-pink text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 h-full">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm opacity-75">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-orange text-primary-orange" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed">{testimonial.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}