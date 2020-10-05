import React from 'react';
import Card from './Card';

function Appointments() {

    return(
        <div className="profile-card">
            <h2 className="profile-card__title">Запись на прием</h2>
            <div className="profile-card__wrap">
                <Card />
                <Card />
                <p className="appointment__count">Еще 3 записи <span className="appointment__link">Подробнее</span></p>
            </div>
        </div>
    )
}

export default Appointments;