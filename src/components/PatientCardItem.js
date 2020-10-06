import React from 'react'

function PatientCardItem({title, text, name, isOn, handleMouseEnter, handleMouseLeave}) {

    return(
        <div className="e-card" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={`e-card__image e-card__image_type_${name} ${isOn && 'e-card__image_type_active'}`}></div>
            <div className={`e-card__info ${isOn && 'e-card__info_type_active'}`}>
                <h2 className={`e-card__title ${isOn && 'e-card__title_type_active'}`}>{title}</h2>
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