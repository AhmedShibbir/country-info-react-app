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
        <div>
            <h1>We have data of : {countries.length} countries!</h1>
            {
            countries.map(country => <SingleCountry country={country} key={country.alpha3Code}></SingleCountry>)
            }
        </div>
        
    );
};

export default Countries;