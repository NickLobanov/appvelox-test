import React from 'react';
import Button from './Button';
import Footer from './Footer';

function Aside() {
    return(
        <aside className="aside">
            <h2 className="aside__logo">Логотип</h2>
            <ul className="aside__list">
                <li className="aside__item">Профиль</li>
                <li className="aside__item">Врачи и клиники</li>
                <li className="aside__item">Сообщения</li>
                <li className="aside__item">Тестирование</li>
                <li className="aside__item">Полезно знать</li>
            </ul>
            <Button text={"Подать заявку"}/>
            <Footer />
        </aside>
    )
}

export default Aside;