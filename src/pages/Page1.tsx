import StandardButtons from "../components/StandardButtons"
import Dropdown from "../components/Dropdown";
import DropdownItem from "../components/DropdownItem";
import { createContext, useContext, useState } from "react";
import { DataContext, useDataContext } from "../DataContext";
import "../App.css"
import { useNavigate } from "react-router-dom";


export function Page1() {
    
    const navigate = useNavigate();
    
    const { savedSelections, setSavedSelections } = useDataContext();


    /* State variables for each dropdown stats option */
    const [selectedPaceOption, setSelectedPaceOption] = useState("Select an option (training goal)");
    const [selectedDurationOption, setSelectedDurationOption] = useState("Select an option (availability)");
    const [selectedDifficultyOption, setSelectedDifficultyOption] = useState("Select an option (duration)");
    const [selectedTypeOption, setSelectedTypeOption] = useState("Select an option (fitness level)");


    /* Populating the dropdown options */
    const pace_items = ["Improve endurace", "Training for a race", "Get fit", "Increase speed", "Maintain general fitness"]; //the goal of their workout schedule 
    const duration_items = ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
        "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
    ]; //when are they available for workouts
    const difficulty_items = ["Couple days", "1 week", "2-3 weeks", "1 month", "2-4 months", "6+ months", "1 year", "1+ year"]; //how long do they want this schedule for
    const type_items = [
        "Beginner - completely new to running/rarely runs", 
        "Intermediate - runs multiple times a week", 
        "Advanced - runs regularly and/or has experience racing/running competitively"]; //what is their current fitness level
    

    /* Storing the most current states in an array of objects */
    const handleSave = () => {
        setSavedSelections([ selectedPaceOption, selectedDurationOption, selectedDifficultyOption, selectedTypeOption ]);
        navigate("/page2");
    }

    

    return (
        <>
            <h1 className="Title"> Web App Title </h1>
            <h2> What are you looking for in your workout schedule? </h2>
            <div className="StandardButtons"> 
                <StandardButtons to="/">
                    Go Back
                </StandardButtons> 

                <button onClick={() => handleSave()}>
                    Submit entries
                </button>
            </div>

            <div className="dropdown"> 
                <Dropdown buttonText={selectedPaceOption} content={<>
                {
                    pace_items.map(item => <DropdownItem key={item} onClick={() => setSelectedPaceOption(item)}>{`${item}`}</DropdownItem>)
                }
                </>}/>
             </div> 

             <div className="dropdown">
                <Dropdown buttonText={selectedDurationOption} content={<>
                {
                    duration_items.map(item => <DropdownItem key={item} onClick={() => setSelectedDurationOption(item)}>{`${item}`}</DropdownItem>)
                }
                </>}/>
             </div> 

             <div className="dropdown"> 
                <Dropdown buttonText={selectedDifficultyOption} content={<>
                {
                    difficulty_items.map(item => <DropdownItem key={item} onClick={() => setSelectedDifficultyOption(item)}>{`${item}`}</DropdownItem>)
                }
                </>}/>
             </div> 

             <div className="dropdown"> 
                <Dropdown buttonText={selectedTypeOption} content={<>
                {
                    type_items.map(item => <DropdownItem key={item} onClick={() => setSelectedTypeOption(item)}>{`${item}`}</DropdownItem>)
                }
                </>}/>
             </div> 

             
        </>
    )
}