import React from 'react';

const companies = [
  { image: 'https://brandeps.com/logo-download/D/DLF-logo-01.png', name: 'DLF' },
  { image: 'https://www.projectamber.org/wp-content/uploads/NSDC-logo-2022-12.png', name: 'NSDC' },
  { image: 'https://authentix.com/wp-content/themes/authentix/dist/assets/images/logo-color.png', name: 'Authentix' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMU01y4_Atje-fKlVgk1ppuWxGSa4eT2UXPA&s', name: 'Vimaal' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJCbKuK9V4GfW3lASDNX1bQXOrnVfW7Jk4Q&s', name: 'MKT' },
  { image: 'https://www.ihmkkr.com/wp-content/uploads/2022/05/the-lodhi-hotel-logo.png', name: 'The Lodhi Hotel' },
  { image: 'https://logowik.com/content/uploads/images/andaz-hotels-resorts1685.jpg', name: 'Andaz hotel' },
  { image: 'https://www.hotelierindia.com/cloud/2021/11/22/NidJ0jPi-logo_hyatt_1.jpg', name: 'Hayatt hotel' },
  { image: 'https://www.adgully.com/img/400/2010-07-Modicare1.jpg', name: 'Modicare' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ60LFDH3ICcFFvo2YOTq9LaPTATkjnb6vEA&s', name: 'Yamahah' },
];

export default function Companies() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted By Leading Companies</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={company.image} alt={company.name} className="w-24 h-24 object-contain mb-2" />
              <span className="font-semibold">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
