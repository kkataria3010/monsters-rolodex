import React from 'react';
import './card.css';
export const Card= (props)=>(
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id+10}`} alt="monster" />
        <h1>{props.monster.name}</h1>
    </div>
);