import React from 'react';
import Header from './Header';
import Card from './Card';

function Main() {
    return(
        <div className="wrap">
            <Header />
            <h2>Записи на прием</h2>
            <Card />
        </div>
        
    )
}

export default Main;