import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return (
            <div className="header">
                <ul className="header__list">
                    <li className="list__item"><Link to="/">ToDo</Link></li>
                    <li className="list__item"><Link to="/fetch">LifeSearch</Link></li>
                    <li className="list__item">About</li>
                    <li className="list__item">About</li>
                </ul>
            </div>
    )
}