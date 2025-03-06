import React from 'react';

const companies = [
  { image: 'https://brandeps.com/logo-download/D/DLF-logo-01.png', name: 'DLF' },
  { image: 'https://www.projectamber.org/wp-content/uploads/NSDC-logo-2022-12.png', name: 'NSDC' },
  { image: 'https://brandeps.com/logo-download/D/DLF-logo-01.png', name: 'DLF' },
  { image: 'https://www.projectamber.org/wp-content/uploads/NSDC-logo-2022-12.png', name: 'NSDC' },
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
