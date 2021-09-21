import React from 'react';
import "./SingleCountry.css"

const SingleCountry = (props) => {
    // console.log(props);
    return (
        <div>
            <h1>Country Name: {props.country.name}</h1>
            <h3>Capital: {props.country.capital}</h3>
        </div>
    );
};

export default SingleCountry;