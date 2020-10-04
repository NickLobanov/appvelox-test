import React from 'react'

function Header() {
    return(
        <header className="header">
            <h1 className="header__title">Мой профиль</h1>
            <nav className="header__navbar">
                <ul className="header__list">
                    <li className="header__item"><a className="header__link header__link_type_search"></a></li>
                    <li className="header__item"><a className="header__link header__link_type_bell"></a></li>
                    <li className="header__item"><a className="header__link header__link_type_eye"></a></li>
                    <li className="header__item"><a className="header__link header__link_type_profile"></a></li>
                    <li className="header__item"><a className="header__link header__link_type_arrow"></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;