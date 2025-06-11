import { useState, createContext, useContext, useEffect } from "react";
import CalendarPage from "../components/CalendarPage";
import {useDataContext} from "../DataContext";
import axios from 'axios';
import { GoogleGenAI } from "@google/genai";

export function Page2() {

    const [array, setArray] = useState([]);

    const { savedSelections } = useDataContext();

    const parameters = `customized for a training goal to ` + savedSelections[0] + 
    `. The user is available around ` + savedSelections[1] + 
    `. They want this training plan for ` + savedSelections[2] +
    `. Their fitness level is measured as ` + savedSelections[3] + `.`;


    /* API Implementation */
    const ai = new GoogleGenAI({ apiKey: "AIzaSyBoTrJ40-2k0aZI3_6CXCJYA0HfygZawt4"});

    const prompt = `I will give you a user request, please return a structured schedule in JSON format that incorporates
    the user-defined inputs with no extra explanations or conversations, or any title to the JSON array. Please make sure 
    the year, month, and days correspond to current date, with the workout beginning tomorrow.
    An examples format is as follows:
    {
        [
            {"date": "2025-06-01", "time": "09:00", "task:" "Easy run" }, 
            {"date": "2025-07-19", "time": "06:00", "task:" "Threshold run" }
        ]
    }
    Here is the input: 
    "Please give me a running schedule that is` + parameters;   


    type calendarEntries = {
        date: string;
        time: string;
        task: string;
    };

    type Event = {
        title: string;
        start: Date;
        end: Date;
    }

    const [events, setEvents] = useState<Event[]>([]);



    //contents is the prompt that the api gets - should specify to have a return as a structured schedule in JSON format
    async function fetchAPI() {
        const result = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt, 
        });

        const cleanJSON = result.text?.replace(/^```json\s*/i, "").replace(/```$/,"").trim();
        //console.log(result.text?.replace(/^```json\s*/i, "").replace(/```$/,"").trim()); //get rid of the beginning and ending tags from API response

        let parsedData: calendarEntries[];
        
        try {
            parsedData = JSON.parse(cleanJSON);
        } catch (error) {
            console.error("Invalid JSON: ", error);
            parsedData = [];
        }

        const startDate = new Date();
        startDate.setDate(startDate.getDate() + 1);

        const newEvents: Event[] = parsedData.map((entry, index) => {

            const [hour, minute] = entry.time.split(":").map(Number);
            const eventDate = new Date(startDate.getTime());
            eventDate.setDate(startDate.getDate() + index);

            const start = new Date(
                eventDate.getFullYear(), 
                eventDate.getMonth(),
                eventDate.getDate(),
                hour, 
                minute,
            );

            const end = new Date(start.getTime() + 60*60*1000);

            return {
                title: entry.task,
                start,
                end
            };
        });

        setEvents(newEvents);

    }

    useEffect(() => {
        fetchAPI();
    }, []);


    


    /* Setup for calendar */
    // const [events, setEvents] = useState([
    //     {
    //         title: "Workout", 
    //         start: new Date(), 
    //         end: new Date(new Date().getTime() + 60*60*10000),
    //     },
    //     {
    //         title: "Rest Day",
    //         start: new Date(2025, 5, 10, 7, 0), //Jun 10, 2025, 7:00 AM
    //         end: new Date(2025, 5, 10, 9, 0),
    //     },
    // ]);




    return (
        <>
            <h1 className="Title"> Web App Title </h1>
            <h2> Generated workout schedule </h2>
            <CalendarPage events={events} />
        </>
    );
}