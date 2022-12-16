import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import AddPostForm from './features/posts/AddPostForm';
import EditPostForm from './features/posts/EditPostForm';
import PostsList from './features/posts/PostsList';
import SinglePostPage from './features/posts/SinglePostPage';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import MainPage from './pages/mainPage/MainPage';
import MoviesPage from './pages/moviesPage/MoviesPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            
            <Route index element={<PostsList />} />

            <Route path='movie'>
              <Route index element={<AddPostForm />} />
              <Route path=':movieId' element={<SinglePostPage />} />
              <Route path="edit/:movieId" element={<EditPostForm />} />
            </Route>
          </Route>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
