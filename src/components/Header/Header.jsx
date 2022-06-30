import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/index';
import './Header.css';

export const Header = () => {
  const { isAuth, setIsAuth, nickName } = useContext(AuthContext);

  const handleLogout = () => {
    setIsAuth(false);
  };

  return (
    <div className="header">
      <ul className="header__list">
        <li className="list__item">
          <Link to="/">ToDo</Link>
        </li>
        <li className="list__item">
          <Link to="/fetch">LifeSearch</Link>
        </li>
        {/* <li className="list__item">
          <Link to="/calendar">Calendar</Link>
        </li> */}
        <li className="list__item">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="list__item">
          <Link to="/notes">Notes</Link>
        </li>
        {/* <li className="list__item">
          <Link to="/weather">Weather</Link>
        </li> */}
        <li className="list__item">About</li>
        {isAuth && (
          <>
            <li className="list__item logout">{nickName}</li>
            <li className="list__item">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
