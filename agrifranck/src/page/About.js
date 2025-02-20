import React from 'react';
import { Link } from 'react-router-dom';
import pg from "../../src/assest/az.png";


const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      {/* En-tête */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">À propos de nous</h1>
        <p className="mt-4 text-gray-600">Votre destination pour des produits de qualité et un service exceptionnel.</p>
      </div>

      {/* Section principale */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Description de l'entreprise */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Notre mission</h2>
          <p className="text-gray-600 mb-4">
            Chez <span className="font-bold">Agrifrank</span>, nous nous efforçons de fournir les meilleurs produits
            aux meilleurs prix. Nous croyons en l'importance d'une expérience client de haute qualité, en offrant
            une sélection soigneusement choisie de produits, allant des semences aux produits agricoles finis.
          </p>
          <p className="text-gray-600 mb-4">
            Nous vous garantissons des produits fiables, un service de livraison rapide et un service client
            à l'écoute pour répondre à toutes vos questions.
          </p>
          <p className="text-gray-600">
            Nous sommes là pour transformer vos achats en ligne en une expérience agréable, sécurisée et sans souci.
          </p>
        </div>

        {/* Image illustrative */}
        <div>
          <img
            src={pg}
            alt="Notre boutique en ligne"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Valeurs de l'entreprise */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nos valeurs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Qualité des produits</h3>
            <p className="text-gray-600">
              Nous sélectionnons uniquement des produits de haute qualité pour garantir votre satisfaction.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Service client</h3>
            <p className="text-gray-600">
              Notre équipe est dédiée à offrir un support rapide et efficace, afin de répondre à toutes vos préoccupations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Livraison rapide</h3>
            <p className="text-gray-600">
              Nous nous engageons à expédier vos commandes rapidement et à les livrer en parfait état.
            </p>
          </div>
        </div>
      </div>

      {/* Section de contact */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Besoin de plus d'informations ?</h2>
        <p className="text-gray-600">
          Contactez-nous et découvrez comment nous pouvons améliorer votre expérience d'achat en ligne.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700">
          <Link to="https://www.facebook.com/profile.php?id=100063756054229" target='.self'>
          Nous rejoindre sur Facebook
          </Link>
        </button>
      </div>
    </div>
  );
};

export default About;
