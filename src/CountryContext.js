import React, { createContext, useState, useEffect } from 'react';

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
    const [selectedCountry, setSelectedCountry] = useState(() => {
        // Try to get from localStorage, default to 'Pakistan'
        return localStorage.getItem('selectedCountry') || 'Pakistan';
    });

    const updateCountry = (country) => {
        setSelectedCountry(country);
        localStorage.setItem('selectedCountry', country);
    };

    return (
        <CountryContext.Provider value={{ selectedCountry, updateCountry }}>
            {children}
        </CountryContext.Provider>
    );
};

export default CountryContext;
