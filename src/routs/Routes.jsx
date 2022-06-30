import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { FetchedPostsPage } from '../pages/FechedPostsPage/FetchedPostsPage';
import { Error } from '../pages/Error';
import { FetchedPost } from '../components/FechedPosts/FetchedPost';
import { Login } from '../pages/Login/Login';
import { AuthContext } from '../context';
import { Calendar } from '../pages/Calendar/Calendar';
import { NCalendar } from '../pages/NewCalendar/NewCalendar';
import App from '../App';
import Calculator from '../pages/Calculator/Calculator';
import Notes from '../pages/Notes/Notes';
import Weather from '../pages/Weather/Weather';

export const ReactRouters = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Header />
      {isAuth ? (
        <Routes>
          <Route path="/" element={<App />} />
          <Route exact="true" path="/fetch/:postId" element={<FetchedPost />} />
          <Route exact="true" path="/fetch" element={<FetchedPostsPage />} />
          <Route exact="true" path="/notes" element={<Notes />} />
          {/* <Route exact="true" path="/calendar" element={<NCalendar />} /> */}
          <Route exact="true" path="/calculator" element={<Calculator />} />
          {/* <Route exact="true" path="/weather" element={<Weather />} /> */}
          <Route path="*" element={<Error to="/" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login path="/login" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};
