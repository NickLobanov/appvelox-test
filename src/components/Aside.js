import React from 'react';
import Button from './Button';
import Footer from './Footer';

function Aside() {
    return(
        <aside className="aside">
            <h2 className="aside__logo">Логотип</h2>
            <ul className="aside__list">
                <li className="aside__item aside__item_type_profile">Профиль</li>
                <li className="aside__item aside__item_type_doc">Врачи и клиники</li>
                <li className="aside__item aside__item_type_message">Сообщения</li>
                <li className="aside__item aside__item_type_test">Тестирование</li>
                <li className="aside__item aside__item_type_info">Полезно знать</li>
            </ul>
            <Button text={"Подать заявку"}/>
            <Footer />
        </aside>
    )
}

export default Aside;