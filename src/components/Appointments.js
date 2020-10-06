import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

function Appointments({data}) {
    return(
        <div className="profile-card">
            <h2 className="profile-card__title">Запись на прием</h2>
            <div className="profile-card__wrap">
                <Card time={data[0].time} name={data[0].name} hospital={data[0].hospital} spec={data[0].speciality} src={data[0].url}/>
                <Card time={data[1].time} name={data[1].name} hospital={data[1].hospital} spec={data[1].speciality} src={data[1].url}/>
                <p className="appointment__count">
                    Еще {data.length - 2} записи <Link to="/all-sign" className="appointment__link">Подробнее</Link>
                </p>
            </div>
        </div>
    )
}

export default Appointments;