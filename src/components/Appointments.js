import React from 'react';
import Card from './Card';

function Appointments() {

    return(
        <div className="appointment">
            <h2 className="appointment__title">Запись на прием</h2>
            <div className="appointment__card-wrap">
                <Card />
                <Card />
                <p className="appointment__count">Еще 3 записи <span className="appointment__link">Подробнее</span></p>
            </div>
        </div>
    )
}

export default Appointments;