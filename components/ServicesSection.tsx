"use client";

import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Défilés de Mode",
    description: "Organisation et production de défilés professionnels",
    icon: "fas fa-tshirt"
  },
  {
    title: "Publicité",
    description: "Campagnes publicitaires et shooting photo",
    icon: "fas fa-camera"
  },
  {
    title: "Événements", 
    description: "Mannequins pour événements corporatifs et privés",
    icon: "fas fa-calendar"
  },
  {
    title: "Casting", 
    description: "Sélection et casting de mannequins professionnels",
    icon: "fas fa-search"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-black via-neutral-900 to-amber-900/80 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-14 drop-shadow-xl text-amber-300 uppercase tracking-wide">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white/10 border border-amber-200 backdrop-blur-md hover:scale-105 transition-transform duration-300 p-8 text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <span className="inline-block bg-amber-400 text-black rounded-full p-4 shadow-lg text-4xl">
                  <i className={`${service.icon}`}></i>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-amber-100 drop-shadow uppercase tracking-wide">{service.title}</h3>
              <p className="text-amber-200 text-base font-serif italic mb-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
