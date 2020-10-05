import React from 'react';
import Header from './Header';
import Appointments from './Appointments';
import ECard from './ECard';


function Main() {
    return(
        <div className="wrap">
            <Header />
            <Appointments />
            <ECard />
        </div>
        
    )
}

export default Main;