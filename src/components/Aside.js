import React from 'react';
import Button from './Button';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Aside() {

    const [isProfile, setProfile] = React.useState(true);
    const [isDoc, setDoc] = React.useState(false)
    const [isMessage, setMessage] = React.useState(false)
    const [isTest, setTest] = React.useState(false)
    const [isInfo, setInfo] = React.useState(false)

    return(
        <aside className="aside">
            <h2 className="aside__logo">Логотип</h2>
            <ul className="aside__list">
                <li className={`aside__item aside__item_type_profile ${isProfile && 'aside__item_type_active'}`}>
                    <Link to='/all-sign' className="aside__link">Профиль</Link>
                </li>
                <li className={`aside__item aside__item_type_doc ${isDoc && 'aside__item_active'}`}>
                    Врачи и клиники
                </li>
                <li className={`aside__item aside__item_type_message ${isMessage && 'aside__item_active'}`}>
                    Сообщения
                </li>
                <li className={`aside__item aside__item_type_test ${isTest && 'aside__item_active'}`}>
                    Тестирование
                </li>
                <li className={`aside__item aside__item_type_info ${isInfo && 'aside__item_active'}`}>
                    Полезно знать
                </li>
            </ul>
            <Button text={"Подать заявку"}/>
            <Footer />
        </aside>
    )
}

export default Aside;