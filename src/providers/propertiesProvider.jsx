import React, { createContext, useContext, useEffect, useState } from "react";

export const PropertiesContext = createContext({
    properties: []
});

export const PropertiesProvider = ({ children }) => {
    const [properties, setProperties] = useState([]) 

    useEffect(() => {
        const getProperties = async() => {
            const response = await fetch("http://localhost:3000/api/properties")
            const properties = await response.json()

            setProperties(properties)
        }
        getProperties()
    }, [])

    
    return (
        <PropertiesContext.Provider value={{properties}}>
            {children}
        </PropertiesContext.Provider>
    )
} 

export const useProperties = () => 
    useContext(PropertiesContext)
