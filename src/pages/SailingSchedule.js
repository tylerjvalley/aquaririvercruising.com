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
        title: "Holland Festival Oude Muziek",
        allDay: true,
        start: new Date(2023, 8, 25),
        end: new Date(2023, 9, 2)
    },
    {
        title: "Open Monument Day",
        allDay: true,
        start: new Date(2023, 9, 9),
        end: new Date(2023, 9, 11)
    },
    {
        title: "Europort RotterDam",
        allDay: true,
        start: new Date(2023, 11, 7),
        end: new Date(2023, 11, 11)
    },
    {
        title: "Leiden / Valkenburg Christmas Town",
        allDay: true,
        start: new Date(2023, 11, 7),
        end: new Date(2023, 11, 11)
    },

]

const allViews = Object.keys(Calendar, )


const SailingSchedule = () => {
    return (
        <>
            <SEO title="About Us" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small" />
                <div style={{height: 700, margin: "70px"}}>
                    <Calendar 
                        localizer={localizer}
                        events={myEventsList}
                        startAccessor="start"
                        endAccessor="end"
                        step={60}
                        defaultDate={new Date(2023, 9, 1)}
                    />
                </div>
                
            </main>
        </>
    )
}

export default SailingSchedule;
