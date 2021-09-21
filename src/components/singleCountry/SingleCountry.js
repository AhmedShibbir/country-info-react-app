import React from 'react';
import "./SingleCountry.css"

const SingleCountry = (props) => {
    return (
        <div className="singleCountry">
            <img src={props.country.flag} alt="" />
            <h1>Country Name: {props.country.name}</h1>
            <h3>Capital: {props.country.capital}</h3>
            <p>Short Name: {props.country.alpha3Code}</p>
            <p>Native Name: {props.country.nativeName}</p>
            <p>Denonym: {props.country.demonym}</p>
            <p>Region: {props.country.region}</p>
            <p>Sub Region: {props.country.subregion}</p>
        </div>
    );
};

export default SingleCountry;