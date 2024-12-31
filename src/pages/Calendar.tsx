import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import { Button } from '@/components/ui/button';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Plus } from 'lucide-react';  // Icône pour le bouton Ajouter
  // Icône pour le bouton Ajouter

// Initialisation du localizer
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events] = useState<Event[]>([
    {
      title: 'Réunion',
      start: new Date(2024, 11, 25, 10, 0),
      end: new Date(2024, 11, 25, 12, 0),
    },
    {
      title: 'Anniversaire',
      start: new Date(2024, 11, 31, 9, 0),
      end: new Date(2024, 11, 31, 10, 0),
    },
  ]);

  // Vérifier la validité des événements
  const validEvents = events.filter(event => event.title && event.start && event.end);

  // Détection de l'écran mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768); // Mobile si largeur <= 768px
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fonction de gestion de la sélection de slot
  const handleSelectSlot = (slotInfo: { start: Date; end: Date }) => {
    alert(`Création d'un événement du ${moment(slotInfo.start).format('DD/MM/YYYY')} au ${moment(slotInfo.end).format('DD/MM/YYYY')}`);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar visible uniquement sur grand écran */}
      {!isMobile && (
        <div className="w-1/4 bg-gray-100 p-4 border-r">
          <h2 className="text-lg font-bold mb-4">Événements</h2>
          <ul>
            {validEvents.map((event, index) => (
              <li key={index} className="mb-2 cursor-pointer hover:text-blue-500">
                {event.title} - {moment(event.start).format('DD/MM/YYYY')}
              </li>
            ))}
          </ul>
          <Button onClick={() => alert('Ajouter un événement')} className="mt-4">
            Ajouter un événement
          </Button>
        </div>
      )}

      {/* Calendar et tableau stylisé visible sur mobile et desktop */}
      <div className="flex-1 p-4">
        {isMobile ? (
          <div>
            {/* Tableau stylisé pour mobile */}
            <h2 className="text-xl font-bold mb-4">Événements à venir</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="py-3 px-4 text-left">Événement</th>
                    <th className="py-3 px-4 text-left">Date</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {validEvents.map((event, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{event.title}</td>
                      <td className="py-3 px-4">
                        {moment(event.start).format('DD/MM/YYYY')} - {moment(event.end).format('DD/MM/YYYY')}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Button onClick={() => alert(`Événement: ${event.title}`)} className="bg-blue-500 text-white p-2 rounded-full">
                          Détails
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Bouton pour ajouter un événement */}
            <Button onClick={() => alert('Ajouter un événement')} className="mt-4 w-full bg-gray-300 flex items-center justify-center">
              <Plus className="mr-2" /> Ajouter un événement
            </Button>
          </div>
        ) : (
          <div>
            {/* Calendar classique pour desktop */}
            <Calendar
              localizer={localizer}
              events={validEvents}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 700 }}
              views={['month', 'week', 'day']} // Affichage mois, semaine, jour
              defaultView="month" // Vue par défaut: mois
              className="bg-background text-foreground"
              onSelectEvent={(event) => alert(`Événement: ${event.title}`)}
              onSelectSlot={handleSelectSlot}
              selectable
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCalendar;
