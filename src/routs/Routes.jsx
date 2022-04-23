import React, {useContext} from 'react'
import { BrowserRouter, Routes, Route, Switch, Navigate } from 'react-router-dom'
import { Header } from '../components/Header/Header';
import { FetchedPostsPage } from '../pages/FechedPostsPage/FetchedPostsPage';
import { Error } from '../pages/Error';
import { FetchedPost } from '../components/FechedPosts/FetchedPost';
import App from '../App';
import { Login } from '../pages/Login/Login';
import { AuthContext } from '../context';

export const ReactRouters = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    
    return (
        <BrowserRouter>
          <Header />
          {
            isAuth ? 
            <Routes>
              <Route path="/" element={ <App /> }/>
              <Route exact="true" path="/fetch/:postId" element={<FetchedPost /> } />
              <Route exact="true" path="/fetch" element={ <FetchedPostsPage />} />
              <Route path="*" element={<Error to="/" replace />}/>
            </Routes> :
            <Routes>
              <Route path="/login" element={ <Login /> }/>
              <Route path="*" element={<Login path="/login" replace /> } />
            </Routes>
          }
        </BrowserRouter>
    )
}