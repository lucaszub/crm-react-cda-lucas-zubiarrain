import { useState } from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useMediaQuery } from 'react-responsive';

// ShadCN UI imports
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import des icônes

const localizer = momentLocalizer(moment);

const MyToolbar = ({ label, onNavigate, onView, view, handleAddEvent }: any) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="flex justify-between items-center p-2 mb-5">
      {/* Boutons de navigation */}
      <div className="flex items-center space-x-2">
        <Button onClick={() => onNavigate('PREV')} variant="outline" size="sm"><ChevronLeft/></Button>
        <span className="font-bold text-lg">{label}</span>
        <Button onClick={() => onNavigate('NEXT')} variant="outline" size="sm"><ChevronRight /></Button>
      </div>

      {/* Sélecteur de vue et bouton Nouvel événement */}
      <div className="flex items-center space-x-2">
        <Button onClick={() => onView('month')} variant={view === 'month' ? 'default' : 'outline'} size="sm">Mois</Button>
        <Button onClick={() => onView('week')} variant={view === 'week' ? 'default' : 'outline'} size="sm">Semaine</Button>
        <Button onClick={() => onView('day')} variant={view === 'day' ? 'default' : 'outline'} size="sm">Jour</Button>
        <Button onClick={() => onView('agenda')} variant={view === 'agenda' ? 'default' : 'outline'} size="sm">Agenda</Button>
          
        {/* Bouton Nouvel événement (masqué sur mobile) */}
        {!isMobile && (
          <Dialog>
            <DialogTrigger asChild>
              <Button onClick={handleAddEvent} size="sm">Nouvel événement</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>Créer un événement</DialogHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddEvent();
                }}
              >
                <Input className="mb-4" placeholder="Titre de l'événement" />
                <DialogFooter>
                  <Button>Ajouter</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
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
              <div key={index} className="bg-white p-4 rounded shadow-md hover:bg-gray-50 transition duration-300">
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
          <Dialog>
            <DialogTrigger asChild>
              <Button className="fixed bottom-4 right-4 p-3 rounded-full shadow-lg">+ Nouvel événement</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>Créer un événement</DialogHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddEvent();
                }}
              >
                <Input className="mb-4" placeholder="Titre de l'événement" />
                <DialogFooter>
                  <Button>Ajouter</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
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
          min={new Date(2024, 0, 1, 7, 0)}  // 8h du matin
          max={new Date(2024, 0, 1, 20, 0)}  // 19h du soir
          
        />
      )}
    </div>
  );
};

export default MyCalendar;
