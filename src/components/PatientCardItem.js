import React from 'react'

function PatientCardItem() {

    return(
        <div className="e-card">
            <div className="e-card__image"></div>
            <div className="e-card__info">
                <h2 className="e-card__title">Информация о пациенте</h2>
                <ul className="e-card__list">
                    <li className="e-card__list-item">Ваши личные данные</li>
                    <li className="e-card__list-item">Рекомендации врачей</li>
                    <li className="e-card__list-item">История болезней</li>
                </ul>
            </div>
        </div>
    )
}

export default PatientCardItem;