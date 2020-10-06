import React, { useState } from 'react';
import Card from './Card';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function AllSign({data}) {

    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date)
    }

    return(
        <div className="all-sign">
            <h2 className="all-sign__title">Мои записи</h2>
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
                <div className="all-sign__calendar"><Calendar onChange={onChange} value={date}/></div>
            </div>
        </div>
    )
}

export default AllSign;