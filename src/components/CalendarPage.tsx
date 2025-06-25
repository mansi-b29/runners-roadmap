import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import enUS from "date-fns/locale/en-US"
import "./CalendarPage.css";

const locales = {
    "en-US": enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse, 
    startOfWeek,
    getDay,
    locales,
});

interface Event {
    title: string;
    start: Date;
    end: Date;
}

interface Props {
    events: Event[];
}

const CalendarPage = ({events}: Props) => {
    return (
        <div className="calendar">
            <h2> Your generated workout schedule </h2>
            <Calendar className="calendarParts"
                localizer={localizer} 
                events={events}
                startAccessor="start"
                endAccessor="end"
            />
        </div>
    );
};

export default CalendarPage;