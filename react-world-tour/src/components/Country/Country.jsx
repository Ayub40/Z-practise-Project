import { useState } from "react";
// import Countries from "../Countries/Countries";
import './Country.css'
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;
    // console.log(country)

    // ekhane false mane default vabe , se visit kore nai , but click korle boja jabe visit korse kina 
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // setVisited(true); 
        setVisited(!visited);
    }

    // console.log(handleVisitedCountry)
    // const passWithParams = () => {
    //     handleVisitedCountry(country);
    // }

    // const passWithParams = () => handleVisitedCountry(country);


    return (
        <div className={`country ${visited && 'visited'}`}>
            {/* ternary use kore o kora jai */}
            {/* <div className={`country ${visited ? 'visited': 'non-visited'}`}> */}
            <h3 style={{ color: visited ? "purple" : 'black' }}>Name: {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p><small>Code: {cca3} </small></p>
            {/* <button onClick={handleVisitedCountry()}>Mark Visited</button> */}
            {/* <button onClick={passWithParams}>Mark Visited</button> */}
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            {/* <button onClick={handleVisited}>Visited</button> */}
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {/* {visited && 'I have visited this country.'} */}
            {visited ? 'I have visited this country.' : 'I want to visit'}
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;