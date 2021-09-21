import React, { useEffect, useState } from 'react';
import './Countries.css'
import SingleCountry from '../singleCountry/SingleCountry';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div id="total-data">
            <h1>We have data of total: {countries.length} countries!</h1>
            <h3 id="siteInfo">Data is loaded from: <a href="https://restcountries.com/">https://restcountries.com/</a></h3>
            <div className="countryCards">
                {
                    countries.map(country => <SingleCountry country={country} key={country.alpha3Code}></SingleCountry>)
                }
            </div>
        </div>
        
    );
};

export default Countries;