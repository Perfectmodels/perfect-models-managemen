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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nos Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-4xl mb-4">
                <i className={`${service.icon} text-black`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
