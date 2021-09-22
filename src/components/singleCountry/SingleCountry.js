import React from 'react';
import "./SingleCountry.css"

const SingleCountry = (props) => {
    return (
        <div className="singleCountry">
            <img src={props.country?.flag} alt={props.country?.name} />
            <h1>Country Name: {props.country?.name}</h1>
            <h3>Capital: {props.country?.capital}</h3>
            <p>Short Name: {props.country?.alpha3Code}</p>
            <p>Calling Code: +{props.country?.callingCodes}</p>
            {/* <p>Denonym: {props.country?.demonym}</p> */}
            <p>Domain: {props.country?.topLevelDomain}</p>
            {/* <p>Sub Region: {props.country?.subregion}</p> */}
        </div>
    );
};

export default SingleCountry;