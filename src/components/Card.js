import React from 'react';
import Button from './Button';

function Card({ time, name, hospital, spec, src}) {
    return (
        <div className="card">
            <div className="card__info">
            <h2 className="card__title">{time}</h2>
            <p className="card__text">{hospital}</p>
                <div className="card__wrap">
                    <img className="card__image" src="malushko.png"/>
                    <div className="card__doc-info">
                        <h3 className="card__name">{name}</h3>
                        <p className="card__speciality">{spec}</p>
                    </div>
                </div>
            </div>
            <Button text={"Отменить"}/>
        </div>
    )
}

export default Card;