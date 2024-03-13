import CountryData from "../CountryData/CountryData";

// koik vabe kora jai
// 1. nicer comment kora line er moto
// const CountryDetail = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
const CountryDetail = (props) => {
    // const { country, handleVisitedCountry, handleVisitedFlags } = props

    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}
            <CountryData {...props} ></CountryData>
        </div>
    );
};



export default CountryDetail;