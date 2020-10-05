import React from 'react'
import PatientCardItem from './PatientCardItem';

function ECard() {

    return(
        <div className="profile-card patient-card">
            <h2 className="profile-card__title">Запись на прием</h2>
            <div className="profile-card__wrap patient-card__wrap">
                <PatientCardItem title={"Информация о пациенте"}/>
                <PatientCardItem title={"Результаты анализов"} text={"Вы можете узнать здесь результаты своих анализов"}/>
                <PatientCardItem title={"Добавить информацию"} text={"Добавляйте в свою электронную медицинскую карту новые данные"}/>
                <PatientCardItem title={"История приемов"} text={"Вся информация о полученных услугах за все время хранится здесь"}/>
            </div>
        </div>
    )
}

export default ECard;