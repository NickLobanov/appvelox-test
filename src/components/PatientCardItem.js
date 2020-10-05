import React from 'react'

function PatientCardItem({title, text, image}) {

    return(
        <div className="e-card">
            <div className={`e-card__image e-card__image_type_${image} `}></div>
            <div className="e-card__info">
                <h2 className="e-card__title">{title}</h2>
                {title === 'Информация о пациенте' ? 
                <ul className="e-card__list">
                    <li className="e-card__list-item e-card__text">Ваши личные данные</li>
                    <li className="e-card__list-item e-card__text">Рекомендации врачей</li>
                    <li className="e-card__list-item e-card__text">История болезней</li>
                </ul> :
                <p className="e-card__text">{text}</p>
                }
                
            </div>
        </div>
    )
}

export default PatientCardItem;