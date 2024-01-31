import Home from './Home';
import NewPost from './NewPost';
import About from './About';
import PostPage from './PostPage';
import Missing from './Missing';
import Layout from './Layout'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
    return (
        <div>
        <Layout />
        <Routes>
            <Route path = '/' element = {<Home />}/>
            <Route path = '/post' element = {<NewPost/>} />
            <Route path = '/post/:id' element = {<PostPage/>} />
            <Route path = '/about' element = {<About/>} />
            <Route path = '/*' element = {<Missing/>} />
        </Routes>
        </div>
    );
}

export default App;
