import React, {useState} from 'react'
import { render } from "react-dom"
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from "date-fns/format";
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css"



const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const myEventsList = [
    {
        title: "Düsseldorf",
        allDay: true,
        start: new Date(2023, 3, 1),
        end: new Date(2023, 3, 4),
    },
    {
        title: "Helene Fischer Concert Cologne",
        allDay: true,
        start: new Date(2023, 3, 1),
        end: new Date(2023, 3, 3)
    },
    {
        title: "Beauty Düsseldorf",
        allDay: true,
        start: new Date(2023, 3, 1),
        end: new Date(2023, 3, 3)
    },
    {
        title: "Top Hair Düsseldorf",
        allDay: true,
        start: new Date(2023, 3, 1),
        end: new Date(2023, 3, 3)
    },
    {
        title: "Post Marathon Bonn",
        allDay: true,
        start: new Date(2023, 3, 1),
        end: new Date(2023, 3, 1)
    },
    {
        title: "Rotterdam",
        allDay: true,
        start: new Date(2023, 3, 4),
        end: new Date(2023, 3, 6)
    },
    {
        title: "Keukenhof / Leiden",
        allDay: true,
        start: new Date(2023, 3, 4),
        end: new Date(2023, 3, 6)
    },
    {
        title: "The Hague",
        allDay: true,
        start: new Date(2023, 3, 4),
        end: new Date(2023, 3, 4)
    },
    {
        title: "Scheveningen",
        allDay: true,
        start: new Date(2023, 3, 4),
        end: new Date(2023, 3, 4)
    },
    {
        title: "Delft",
        allDay: true,
        start: new Date(2023, 3, 4),
        end: new Date(2023, 3, 4)
    },
    {
        title: "Haarlem",
        allDay: true,
        start: new Date(2023, 3, 5),
        end: new Date(2023, 3, 5)
    },
    {
        title: "Zaanse Schans",
        allDay: true,
        start: new Date(2023, 3, 5),
        end: new Date(2023, 3, 5)
    },
    {
        title: "Amsterdam",
        allDay: true,
        start: new Date(2023, 3, 5),
        end: new Date(2023, 3, 7)
    },
    {
        title: "Enkhuizen",
        allDay: true,
        start: new Date(2023, 3, 6),
        end: new Date(2023, 3, 8)
    },
    {
        title: "Harlingen",
        allDay: true,
        start: new Date(2023, 3, 8),
        end: new Date(2023, 3, 8)
    },
    {
        title: "Franeker",
        allDay: true,
        start: new Date(2023, 3, 8),
        end: new Date(2023, 3, 8)
    },
    {
        title: "Leeuwarden",
        allDay: true,
        start: new Date(2023, 3, 8),
        end: new Date(2023, 3, 8)
    },

]




const SailingSchedule = () => {
    return (
        <>
            <SEO title="About Us" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" />
                <div style={{height: 1000, margin: "70px"}}>
                    <Calendar 
                        localizer={localizer}
                        events={myEventsList}
                        startAccessor="start"
                        endAccessor="end"
                        step={60}
                        defaultDate={new Date(2023, 3, 1)}
                    />
                </div>
                
            </main>
        </>
    )
}

export default SailingSchedule;
