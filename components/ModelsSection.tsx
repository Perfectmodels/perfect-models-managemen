"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Model {
  name: string;
  image: string;
  category: string;
  height: string;
  age: string;
}

const models: Model[] = [
  {
    name: "Sophie D.",
    image: "/models/sophie.jpg",
    category: "Mannequin Haute Couture",
    height: "178 cm",
    age: "24 ans"
  },
  {
    name: "Thomas L.",
    image: "/models/thomas.jpg",
    category: "Mannequin Homme",
    height: "185 cm",
    age: "27 ans"
  },
  {
    name: "Emma R.",
    image: "/models/emma.jpg",
    category: "Mannequin Teen",
    height: "172 cm",
    age: "19 ans"
  },
  {
    name: "Lucas M.",
    image: "/models/lucas.jpg",
    category: "Mannequin Fitness",
    height: "182 cm",
    age: "22 ans"
  }
];

const ModelsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nos Mannequins
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
                <p className="text-gray-600 mb-2">{model.category}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{model.height}</span>
                  <span>{model.age}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/mannequins"
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Découvrir tous nos mannequins
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
