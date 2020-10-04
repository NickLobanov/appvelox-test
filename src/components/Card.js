import React from 'react';
import Button from './Button';

function Card() {
    return (
        <div className="card">
            <div className="card__info">
                <h2 className="card__title">Понедельник 15.06.20 | 15:30</h2>
                <p className="card__text">СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А</p>
                <div className="card__wrap">
                    <img className="card__image" src="malushko.png"/>
                    <div className="card__doc-info">
                        <h3 className="card__name">Малушко Т. Н.</h3>
                        <p className="card__speciality">Хирургия</p>
                    </div>
                </div>
            </div>
            <Button text={"Отменить"}/>
        </div>
    )
}

export default Card;