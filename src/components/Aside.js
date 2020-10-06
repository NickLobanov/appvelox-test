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

    function handleClickProfile() {
        setProfile(true)
        setDoc(false)
        setMessage(false)
        setTest(false)
        setInfo(false)
    }

    function handleClickDoc() {
        setDoc(true)
        setProfile(false)
        setMessage(false)
        setTest(false)
        setInfo(false)
    }

    function handleClickMessage() {
        setMessage(true)
        setDoc(false)
        setProfile(false)
        setTest(false)
        setInfo(false)
    }

    function handleClickTest() {
        setTest(true)
        setMessage(false)
        setDoc(false)
        setProfile(false)
        setInfo(false)
    }

    function handleClickInfo() {
        setInfo(true)
        setMessage(false)
        setDoc(false)
        setProfile(false)
        setTest(false)
    }

    return(
        <aside className="aside">
            <h2 className="aside__logo">Логотип</h2>
            <ul className="aside__list">
                <li className={`aside__item aside__item_type_profile ${isProfile && 'aside__item_type_active'}`}>
                    <Link to='/' className={`aside__link ${isProfile && 'aside__link_type_active'}`} 
                        onClick={handleClickProfile}>Профиль</Link>
                </li>
                <li className={`aside__item aside__item_type_doc ${isDoc && 'aside__item_type_active'}`}>
                    <Link to='/doc' className={`aside__link ${isDoc && 'aside__link_type_active'}`}
                        onClick={handleClickDoc}>Врачи и клиники</Link>
                </li>
                <li className={`aside__item aside__item_type_message ${isMessage && 'aside__item_type_active'}`}>
                    <Link to='/message' className={`aside__link ${isMessage && 'aside__link_type_active'}`}
                        onClick={handleClickMessage}>Сообщения</Link>
                </li>
                <li className={`aside__item aside__item_type_test ${isTest && 'aside__item_type_active'}`}>
                    <Link to='/test' className={`aside__link ${isTest && 'aside__link_type_active'}`}
                        onClick={handleClickTest}>Тестирование</Link>
                </li>
                <li className={`aside__item aside__item_type_info ${isInfo && 'aside__item_type_active'}`}>
                    <Link to='/info' className={`aside__link ${isInfo && 'aside__link_type_active'}`} 
                        onClick={handleClickInfo}>Полезно знать</Link>
                </li>
            </ul>
            <Button text={"Подать заявку"}/>
            <Footer />
        </aside>
    )
}

export default Aside;