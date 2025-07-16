"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  button: string;
  link: string;
}

const Hero: React.FC = () => {
  const slides: Slide[] = [
    {
      image: '/background (1).jpg',
      title: 'L\'excellence a un visage',
      subtitle: 'L\'élégance au service de la perfection',
      button: 'Découvrir nos Mannequins',
      link: '/mannequins'
    },
    {
      image: '/background (2).jpg',
      title: 'Des talents exceptionnels',
      subtitle: 'Modèles professionnels et talentueux',
      button: 'Voir nos Mannequins',
      link: '/mannequins'
    },
    {
      image: '/background (3).jpg',
      title: 'L\'agence de référence',
      subtitle: 'Spécialisée dans la mode et la publicité',
      button: 'En savoir plus',
      link: '/about'
    },
    {
      image: '/background (4).jpg',
      title: 'Une équipe dédiée',
      subtitle: 'Professionnels à votre service',
      button: 'Nous contacter',
      link: '/contact'
    },
    {
      image: '/background (5).jpg',
      title: 'Des événements prestigieux',
      subtitle: 'Participer à nos événements',
      button: 'Nos événements',
      link: '/events'
    },
    {
      image: '/background (6).jpg',
      title: 'Rejoignez-nous',
      subtitle: 'Commencez votre carrière',
      button: 'Devenir mannequin',
      link: '/become-model'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src={slides[currentSlide].image}
          alt="Hero"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{slides[currentSlide].title}</h1>
          <p className="text-xl md:text-2xl mb-8">{slides[currentSlide].subtitle}</p>
          <Link href={slides[currentSlide].link}>
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              {slides[currentSlide].button}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
