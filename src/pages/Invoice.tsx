import React from "react";

const Invoice: React.FC = () => {
  return (
    <div className=" py-12 px-4 card-for input">
      <div className="invoice container mx-auto border shadow-lg rounded-lg p-8">
        {/* En-tête de la facture */}
        <div className="invoice-header flex justify-between mb-8">
          <div className="left-section">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Facture <small className="text-lg text-gray-500">Avec crédit</small>
            </h1>
            <h4 className="text-sm text-gray-500">N°: 554775/R1 | Date : 01/01/2015</h4>
          </div>
          <div className="right-section flex justify-end items-center">
            
            <ul className="text-sm text-gray-600">
              <li><strong>RCJA Australia</strong></li>
              <li>Lorem Ipsum</li>
              <li>2 Alliance Lane VIC</li>
              <li>info@rcja.com</li>
            </ul>
          </div>
        </div>

        {/* Détails entreprise et client */}
        <div className="flex gap-8">
          <div className="company-details w-1/2 bg-gray-50 border p-4 rounded-lg">
            <h4 className="text-lg font-semibold">Détails de l'entreprise</h4>
            <ul className="text-sm text-gray-600">
              <li><strong>Nom :</strong> RCJA</li>
              <li><strong>Adresse :</strong> 1 Rue Inconnue VIC</li>
              <li><strong>Téléphone :</strong> (+61)404123123</li>
              <li><strong>Email :</strong> admin@rcja.com</li>
              <li><strong>Contact :</strong> John Smith</li>
            </ul>
          </div>
          <div className="customer-details w-1/2 bg-gray-50 border p-4 rounded-lg">
            <h4 className="text-lg font-semibold ">Détails du client</h4>
            <ul className="text-sm text-gray-600 ">
              <li><strong>Nom :</strong> RCJA</li>
              <li><strong>Adresse :</strong> 1 Rue Inconnue VIC</li>
              <li><strong>Téléphone :</strong> (+61)404123123</li>
              <li><strong>Email :</strong> admin@rcja.com</li>
              <li><strong>Contact :</strong> John Smith</li>
            </ul>
          </div>
        </div>

        {/* Tableau des articles */}
        <div className="items-card mt-8 bg-white p-4 rounded-lg shadow">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Article / Détails</th>
                <th className="px-4 py-2 text-center">Prix Unitaire</th>
                <th className="px-4 py-2 text-center">Coût Total</th>
                <th className="px-4 py-2 text-center">Réduction</th>
                <th className="px-4 py-2 text-center">Taxe</th>
                <th className="px-4 py-2 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Article 1 */}
              <tr>
                <td className="px-4 py-2">
                  Lorem Ipsum Dolor
                  <br />
                  <small className="text-gray-500">Le meilleur lorem, essayez-le maintenant ou regrettez à jamais</small>
                </td>
                <td className="px-4 py-2 text-right">1 000,00 € <small className="text-gray-500">HT</small></td>
                <td className="px-4 py-2 text-right">18 000,00 € <small className="text-gray-500">18 unités</small></td>
                <td className="px-4 py-2 text-right">- 1 800,00 € <small className="text-gray-500">Réduction -10%</small></td>
                <td className="px-4 py-2 text-right">+ 3 240,00 € <small className="text-gray-500">TVA 20%</small></td>
                <td className="px-4 py-2 text-right font-semibold">19 440,00 €</td>
              </tr>

              {/* Article 2 */}
              <tr>
                <td className="px-4 py-2">
                  Sit Amet Dolo
                  <br />
                  <small className="text-gray-500">Installez-vous confortablement</small>
                </td>
                <td className="px-4 py-2 text-right">120,00 € <small className="text-gray-500">HT</small></td>
                <td className="px-4 py-2 text-right">240,00 € <small className="text-gray-500">2 unités</small></td>
                <td className="px-4 py-2 text-right">- 0,00 €</td>
                <td className="px-4 py-2 text-right">+ 72,00 € <small className="text-gray-500">TVA 20%</small></td>
                <td className="px-4 py-2 text-right font-semibold">312,00 €</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th className="px-4 py-2 text-left">Total :</th>
                <th className="px-4 py-2 text-right" colSpan={2}></th>
                <th className="px-4 py-2 text-right">500,00 €</th>
                <th className="px-4 py-2 text-right">800,00 €</th>
                <th className="px-4 py-2 text-right">20 000,00 €</th>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Montant dû */}
        <div className="amount-due mt-8 text-center bg-gray-50 p-4 rounded-lg">
          <small className="text-lg text-gray-500">Montant dû (EUR) :</small>
          <p className="text-3xl font-semibold text-gray-800">5 000,25 €</p>
        </div>

        {/* Détails de paiement */}
        <div className="payment-details mt-8 bg-gray-50 p-4 rounded-lg">
          <h4 className="text-lg font-semibold">Détails de paiement</h4>
          <p><strong>Nom du compte :</strong> "RJCA"</p>
          <p><strong>BSB :</strong> 111-111</p>
          <p><strong>Numéro de compte :</strong> 1234101</p>
        </div>

        {/* Notes */}
        <div className="notes mt-8 bg-gray-50 p-4 rounded-lg">
          <h4 className="text-lg font-semibold">Notes</h4>
          <p>Le paiement est demandé dans un délai de 15 jours après réception de cette facture.</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
