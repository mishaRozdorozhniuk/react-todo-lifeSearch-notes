import React, { useState } from 'react';
import { ReactRouters } from './routs/Routes';
import ReactDOM from 'react-dom';
import { AuthContext } from '../src/context/index';

const Main = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [nickName, setNickName] = useState('');

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        nickName,
        setNickName,
      }}
    >
      <ReactRouters />
    </AuthContext.Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
