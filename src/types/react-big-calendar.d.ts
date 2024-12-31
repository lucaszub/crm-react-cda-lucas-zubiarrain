declare module 'react-big-calendar' {
  import { ComponentType, ReactNode, CSSProperties } from 'react';
  import * as moment from 'moment';

  export interface Event {
    title: string;
    start: Date | string | moment.Moment;
    end: Date | string | moment.Moment;
    [key: string]: any; // Pour permettre des propriétés supplémentaires
  }

  export interface SlotInfo {
    start: Date;
    end: Date;
    action: 'select' | 'click'; // Action possible
  }

  export interface ToolbarProps {
    label: string;
    onNavigate: (action: 'PREV' | 'NEXT' | 'TODAY') => void;
    onView: (view: 'month' | 'week' | 'work_week' | 'day' | 'agenda') => void;
    view: 'month' | 'week' | 'work_week' | 'day' | 'agenda';
  }

  export interface CalendarProps {
    events: Event[];
    startAccessor: string;
    endAccessor: string;
    localizer: any;
    style?: CSSProperties;
    views: Array<'month' | 'week' | 'work_week' | 'day' | 'agenda'>;
    defaultView: 'month' | 'week' | 'work_week' | 'day' | 'agenda';
    className?: string;
    selectable?: boolean;
    popup?: boolean;
    tooltipAccessor?: string;
    min?: Date;
    max?: Date;
    step?: number;
    timeslots?: number;
    showMultiDayTimes?: boolean;
    onSelectEvent?: (event: Event) => void;
    onSelectSlot?: (slotInfo: SlotInfo) => void;

    /** Ajout du champ components pour la personnalisation */
    components?: {
      toolbar?: ComponentType<ToolbarProps>;
      [key: string]: ComponentType<any>; // Permet d'ajouter d'autres composants personnalisables
    };
  }

  export const Calendar: ComponentType<CalendarProps>;

  export function momentLocalizer(moment: typeof moment): any;
}
