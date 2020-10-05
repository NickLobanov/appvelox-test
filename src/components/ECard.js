import React from 'react'
import PatientCardItem from './PatientCardItem';

function ECard() {

    return(
        <div className="profile-card patient-card">
            <h2 className="profile-card__title">Запись на прием</h2>
            <div className="profile-card__wrap patient-card__wrap">
                <PatientCardItem />
                <PatientCardItem />
                <PatientCardItem />
                <PatientCardItem />
            </div>
        </div>
    )
}

export default ECard;