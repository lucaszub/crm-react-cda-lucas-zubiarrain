import { useState } from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useMediaQuery } from 'react-responsive';

const localizer = momentLocalizer(moment);

const MyToolbar = ({ label, onNavigate, onView, view, handleAddEvent }: any) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="flex justify-between items-center p-2">
      {/* Boutons de navigation */}
      <div className="flex items-center space-x-2">
        <button onClick={() => onNavigate('PREV')} className="px-3 py-1 bg-gray-100 rounded">
          Précédent
        </button>
        <span className="font-bold text-lg">{label}</span>
        <button onClick={() => onNavigate('NEXT')} className="px-3 py-1 bg-gray-100 rounded">
          Suivant
        </button>
      </div>

      {/* Sélecteur de vue et bouton Nouvel événement */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onView('month')}
          className={`px-3 py-1 ${view === 'month' ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}
        >
          Mois
        </button>
        <button
          onClick={() => onView('week')}
          className={`px-3 py-1 ${view === 'week' ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}
        >
          Semaine
        </button>
        <button
          onClick={() => onView('day')}
          className={`px-3 py-1 ${view === 'day' ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}
        >
          Jour
        </button>
        <button
          onClick={() => onView('agenda')}
          className={`px-3 py-1 ${view === 'agenda' ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}
        >
          Agenda
        </button>

        {/* Bouton Nouvel événement (masqué sur mobile) */}
        {!isMobile && (
          <button
            onClick={handleAddEvent}
            className="px-3 py-1 bg-blue-400 text-white rounded"
          >
            Nouvel événement
          </button>
        )}
      </div>
    </div>
  );
};

const MyCalendar = () => {
  const [events, setEvents] = useState<Event[]>([
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

  const handleAddEvent = () => {
    const title = prompt('Entrez le titre de l’événement :');
    if (title) {
      const newEvent = {
        title,
        start: new Date(),
        end: new Date(new Date().getTime() + 60 * 60 * 1000),
      };
      setEvents([...events, newEvent]);
    }
  };

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div>
      {/* Affichage de la vue liste avec un style amélioré sur mobile */}
      {isMobile ? (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Liste des événements</h2>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow-md hover:bg-gray-50 transition duration-300"
              >
                <div className="flex justify-between items-center">
                  <strong className="text-lg">{event.title}</strong>
                  <span className="text-sm text-gray-500">
                    {moment(event.start).format('MMM Do YYYY, h:mm a')}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  {moment(event.start).format('h:mm a')} - {moment(event.end).format('h:mm a')}
                </div>
              </div>
            ))}
          </div>
          
          {/* Bouton Nouvel événement (en bas de la liste sur mobile) */}
          <button
            onClick={handleAddEvent}
            className="fixed bottom-4 right-4 px-4 py-2 bg-blue-400 text-white rounded-full shadow-lg"
          >
            + Nouvel événement
          </button>
        </div>
      ) : (
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
          views={['month', 'week', 'day', 'agenda']}  
          defaultView="week"
          components={{
            toolbar: (props) => <MyToolbar {...props} handleAddEvent={handleAddEvent} />,
          }}
        />
      )}
    </div>
  );
};

export default MyCalendar;
