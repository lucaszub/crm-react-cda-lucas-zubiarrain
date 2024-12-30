import React from "react";


export const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center">Bienvenue sur MonCRM</h1>
      <p className="mt-4 text-lg text-gray-700 text-center">
        Votre outil simple et efficace pour gérer votre activité quotidienne.
      </p>
      <div className="mt-8 space-y-4">
        <p className="text-gray-600">
          Cette outil est spécialement conçu pour aider les petites entreprises et les entrepreneurs à :
        </p>
        <ul className="list-disc list-inside pl-4 text-gray-600">
          <li>Suivre et organiser leurs rendez-vous avec leurs clients.</li>
          <li>Générer et gérer des factures et des devis en toute simplicité.</li>
          <li>Analyser leur activité grâce à des rapports clairs et détaillés.</li>
        </ul>
        <p className="text-gray-600">
          Offrez-vous plus de temps pour vous concentrer sur ce qui compte vraiment : votre métier.
        </p>
      </div>
    </div>
  );
};
