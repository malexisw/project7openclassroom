import React from 'react';
import { Link } from "react-router-dom";

export const Card = ({housing}) => {
    return (
        <Link to={'/housing'} state={{from: housing}} className='card-container bgMain'>
            <h3 className='card-title'>{housing.title}</h3>
        </Link>
    );
};
