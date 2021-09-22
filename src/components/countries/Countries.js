import React, { useEffect, useState } from 'react';
import './Countries.css'
import SingleCountry from '../singleCountry/SingleCountry';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR2I0FWfckuDaEBVBPHOKRhh4E4BQUyU1pZ9xMvsXkCNXD8wvcI-mq7tPUg")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div id="total-data">
            <h1>We have data of total: {countries.length} countries!</h1>
            <h3 id="siteInfo">Data is loaded from: <a href="https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR2I0FWfckuDaEBVBPHOKRhh4E4BQUyU1pZ9xMvsXkCNXD8wvcI-mq7tPUg">https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR2I0FWfckuDaEBVBPHOKRhh4E4BQUyU1pZ9xMvsXkCNXD8wvcI-mq7tPUg</a></h3>
            <div className="countryCards">
                {
                    countries.map(country => <SingleCountry country={country} key={country.alpha3Code}></SingleCountry>)
                }
            </div>
        </div>
        
    );
};

export default Countries;