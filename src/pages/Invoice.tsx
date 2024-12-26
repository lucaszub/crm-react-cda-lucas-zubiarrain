import { useState, ChangeEvent } from "react";
import jsPDF from "jspdf";

type InvoiceData = {
  senderName: string;
  senderAddress: string;
  senderSIRET: string;
  clientName: string;
  clientAddress: string;
  description: string;
  price: string;
  taxRate: number;
};

const InvoiceGenerator: React.FC = () => {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    senderName: "Lucas Zubiarrain",
    senderAddress: "123 Rue des Développeurs, Paris",
    senderSIRET: "123 456 789 00012",
    clientName: "",
    clientAddress: "",
    description: "",
    price: "",
    taxRate: 20,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInvoiceData((prevState) => ({
      ...prevState,
      [name]: name === "taxRate" || name === "price" ? value : value.trim(),
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Titre de la facture
    doc.setFontSize(20);
    doc.text("Facture", 10, 10);

    // Informations de l'émetteur
    doc.setFontSize(12);
    doc.text(`Prestataire : ${invoiceData.senderName}`, 10, 30);
    doc.text(`Adresse : ${invoiceData.senderAddress}`, 10, 40);
    doc.text(`SIRET : ${invoiceData.senderSIRET}`, 10, 50);

    // Informations du client
    doc.text(`Client : ${invoiceData.clientName}`, 10, 70);
    doc.text(`Adresse : ${invoiceData.clientAddress}`, 10, 80);

    // Tableau des produits/services
    doc.text("Description", 10, 100);
    doc.text("Prix HT", 150, 100);

    doc.text(invoiceData.description, 10, 110);
    doc.text(`${invoiceData.price} €`, 150, 110);

    const totalHT = parseFloat(invoiceData.price || "0");
    const tax = totalHT * (invoiceData.taxRate / 100);
    const totalTTC = totalHT + tax;

    doc.text(`Total HT : ${totalHT.toFixed(2)} €`, 10, 130);
    doc.text(`TVA : ${invoiceData.taxRate}% (${tax.toFixed(2)} €)`, 10, 140);
    doc.text(`Total TTC : ${totalTTC.toFixed(2)} €`, 10, 150);

    // Télécharger le fichier
    doc.save("facture.pdf");
  };

  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Générateur de Facture</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Informations de l'émetteur */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Informations de l'émetteur</h2>
          <input
            type="text"
            name="senderName"
            placeholder="Nom du prestataire"
            value={invoiceData.senderName}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="senderAddress"
            placeholder="Adresse"
            value={invoiceData.senderAddress}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="senderSIRET"
            placeholder="SIRET"
            value={invoiceData.senderSIRET}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
          />
        </div>

        {/* Informations du client */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Informations du client</h2>
          <input
            type="text"
            name="clientName"
            placeholder="Nom du client"
            value={invoiceData.clientName}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="clientAddress"
            placeholder="Adresse"
            value={invoiceData.clientAddress}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
          />
        </div>
      </div>

      {/* Détails de la facture */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Détails de la facture</h2>
        <input
          type="text"
          name="description"
          placeholder="Description du service"
          value={invoiceData.description}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Prix HT (€)"
          value={invoiceData.price}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="number"
          name="taxRate"
          placeholder="Taux de TVA (%)"
          value={invoiceData.taxRate}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />
      </div>

      {/* Bouton de génération */}
      <button
        onClick={generatePDF}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Générer la facture
      </button>
    </div>
  );
};

export default InvoiceGenerator;
