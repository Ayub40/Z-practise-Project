import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    // console.log(countries);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setCountries(data));
    }, [])

    // eta button e click korle screen e show korbe
    const handleVisitedCountry = country => {
        console.log('add this to your visited country')
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
        // visitedCountries.push(country);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length} </h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;

// Countries.map(country => <Country country={country}></Country>)