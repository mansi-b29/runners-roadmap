import StandardButtons from "../components/StandardButtons"
import Dropdown from "../components/Dropdown";
import DropdownItem from "../components/DropdownItem";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { DataContext, useDataContext } from "../DataContext";
import "../App.css"
import { useNavigate } from "react-router-dom";


export function Page1() {
    
    const navigate = useNavigate();
    
    const { savedSelections, setSavedSelections } = useDataContext();

    const [error, setError] = useState("");

    const [raceType, setRaceType] = useState(false);



  

    


    /* State variables for each dropdown stats option */
    const [selectedPaceOption, setSelectedPaceOption] = useState("Select an option (training goal)");
    const [selectedDurationOption, setSelectedDurationOption] = useState("Select an option (availability)");
    const [selectedDifficultyOption, setSelectedDifficultyOption] = useState("Select an option (duration)");
    const [selectedTypeOption, setSelectedTypeOption] = useState("Select an option (fitness level)");
    const [selectedRaceOption, setSelectedRaceOption] = useState("Select an option (race distance)");


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
    const race_items = ["100m sprint", "200m sprint", "400m sprint", "1 mile", "5K (3.1 miles)", "10K (6.2 miles)", "Half marathon (13.1 miles)", "Marathon (26.2 miles)"];

    /* Storing the most current states in an array of objects */
    const handleSave = () => {
        setSavedSelections([ selectedPaceOption, selectedDurationOption, selectedDifficultyOption, selectedTypeOption, selectedRaceOption ]);
        if (
            selectedPaceOption === "Select an option (training goal)" ||
            selectedDurationOption === "Select an option (availability)" ||
            selectedDifficultyOption === "Select an option (duration)" ||
            selectedTypeOption === "Select an option (fitness level)" 
            
        ) {
            setError("Please make a selection for all dropdowns before continuing");
            return;
        } else if (raceType == true && selectedPaceOption === "Select an option (training goal)" ||
            selectedDurationOption === "Select an option (availability)" ||
            selectedDifficultyOption === "Select an option (duration)" ||
            selectedTypeOption === "Select an option (fitness level)" ) 
        {

            setError("Please make a selection for all dropdowns before continuing");
            return;
        }
        
        setError("");
        
        navigate("/page2");
    }

    useEffect(() => {
        if (selectedPaceOption === "Training for a race") {
            setRaceType(true);
        } else {
            setRaceType(false);
        }
    })



    

    return (
        <>
            <div className="TitleBar"> Runner's Roadmap </div>
            <h2> What are you looking for in your workout schedule? </h2>
            <div className="StandardButtons"> 
                <StandardButtons to="/">
                    Go Back
                </StandardButtons> 

                <button className="navigationButtons" onClick={() => handleSave()}>
                    Submit entries
                </button>
            </div>

            <div className="dropdownRow">

            <div className="dropdown"> 
                <Dropdown buttonText={selectedPaceOption} content={<>
                {
                    pace_items.map(item => <DropdownItem key={item} onClick={() => {
                        setSelectedPaceOption(item);
                    }}>{`${item}`}</DropdownItem>)

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

            
            </div>




             <div>
                {raceType && (
                <div className="raceDropdown"> 
                <Dropdown buttonText={selectedRaceOption} content={<>
                {
                    race_items.map(item => <DropdownItem key={item} onClick={() => setSelectedRaceOption(item)}>{`${item}`}</DropdownItem>)
                }
                </>}/>
             </div> )}

             </div>
             



             {error && <p className="error"> {error} </p>}

             
        </>
    )
}