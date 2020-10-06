import React, { useState } from 'react';
import Card from './Card';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

function AllSign({data}) {

    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date)
    }

    return(
        <div className="all-sign">
            <h2 className="all-sign__title"><Link to="/appvelox-test" className="all-sign__link">Мои записи</Link></h2>
            <div className="all-sign__wrap">
                <div className="all-sign__cards">
                    {data.map((data, index) => (
                        <Card key={index}
                            time={data.time}
                            name={data.name}
                            hospital={data.hospital}
                            spec={data.spec}
                            src={data.url} />
                    ))}
                </div>
                <div className="all-sign__calendar"><Calendar onChange={onChange}
                    prev2Label={''}
                    next2Label={''}
                    className={'react-calendar'}
                    value={date}/></div>
            </div>
        </div>
    )
}

export default AllSign;