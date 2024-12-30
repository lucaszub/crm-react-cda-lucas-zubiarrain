// src/types/react-big-calendar.d.ts
declare module 'react-big-calendar' {
    import { ComponentType } from 'react';
    import * as moment from 'moment';
  
    export interface Event {
      title: string;
      start: Date | string | moment.Moment;
      end: Date | string | moment.Moment;
      [key: string]: any;
    }
  
    export interface CalendarProps {
      events: Event[];
      startAccessor: string;
      endAccessor: string;
      localizer: any;
      style: React.CSSProperties;
      views: string[];
      defaultView: string;
      className?: string;
      onSelectEvent: (event: Event) => void;
    }
  
    export const Calendar: ComponentType<CalendarProps>;
  
    export function momentLocalizer(moment: typeof moment): any;
  }
  