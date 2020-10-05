import React from 'react';
import Header from './Header';
import Appointments from './Appointments';
import ECard from './ECard';
import data from '../data/data.js'

function Main() {
    return(
        <div className="wrap">
            <Header />
            <Appointments data={data}/>
            <ECard />
        </div>
        
    )
}

export default Main;