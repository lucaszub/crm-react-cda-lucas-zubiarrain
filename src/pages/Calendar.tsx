import { useState } from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import { Card } from '@/components/ui/card';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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

  return (
    <Card className=" max-w-4xl mx-auto bg-card">
      <div className="p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          views={['month', 'week', 'day']}
          defaultView="month"
          className="bg-background text-foreground"
          onSelectEvent={(event: Event) => alert(`Événement: ${event.title}`)}
        />
      </div>
    </Card>
  );
};

export default MyCalendar;
