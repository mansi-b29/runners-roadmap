import { useState, createContext, useContext } from 'react';

export const DataContext = createContext([]);

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [savedSelections, setSavedSelections] = useState([" ", " ", " ", " "]);

    return (
        <DataContext.Provider value={{ savedSelections, setSavedSelections }}>
            {children}
        </DataContext.Provider>
    );
};
