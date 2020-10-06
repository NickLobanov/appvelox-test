import React from 'react';
import Card from './Card';

function AllSign({data}) {

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
                <div className="all-sign__calendar"></div>
            </div>
        </div>
    )
}

export default AllSign;