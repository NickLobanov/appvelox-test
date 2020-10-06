import React, { useState } from 'react'
import PatientCardItem from './PatientCardItem';

function ECard() {

    const [isOnInfo, setOnInfo] = React.useState(false);
    const [isOnTest, setOnTest] = React.useState(false);
    const [isOnAdd, setOnAdd] = React.useState(false);
    const [isOnHistory, setOnHistory] = React.useState(false)

    function handleMouseEnterInfo() {
        setOnInfo(true)
    }

    function handleMouseEnterTest() {
        setOnTest(true)
    }

    function handleMouseEnterAdd() {
        setOnAdd(true)
    }

    function handleMouseEnterHistory() {
        setOnHistory(true)
    }

    function handleMouseLeave() {
        setOnInfo(false)
        setOnTest(false)
        setOnAdd(false)
        setOnHistory(false)
    }

    return(
        <div className="profile-card patient-card">
            <h2 className="profile-card__title">Запись на прием</h2>
            <div className="profile-card__wrap patient-card__wrap">
                <PatientCardItem title={"Информация о пациенте"}
                    name={"info"}
                    isOn={isOnInfo}
                    handleMouseEnter={handleMouseEnterInfo}
                    handleMouseLeave={handleMouseLeave}/>
                <PatientCardItem title={"Результаты анализов"}
                    text={"Вы можете узнать здесь результаты своих анализов"}
                    name={"test"}
                    isOn={isOnTest}
                    handleMouseEnter={handleMouseEnterTest}
                    handleMouseLeave={handleMouseLeave}/>
                <PatientCardItem title={"Добавить информацию"}
                    text={"Добавляйте в свою электронную медицинскую карту новые данные"}
                    name={"add"}
                    isOn={isOnAdd}
                    handleMouseEnter={handleMouseEnterAdd}
                    handleMouseLeave={handleMouseLeave}/>
                <PatientCardItem title={"История приемов"}
                    text={"Вся информация о полученных услугах за все время хранится здесь"}
                    name={"history"}
                    isOn={isOnHistory}
                    handleMouseEnter={handleMouseEnterHistory}
                    handleMouseLeave={handleMouseLeave}/>
            </div>
        </div>
    )
}

export default ECard;