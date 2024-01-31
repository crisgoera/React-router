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
            <Route path = '/newpost' element = {<NewPost/>} />
            <Route path = '/about' element = {<About/>} />
            <Route path = '/postpage' element = {<PostPage/>} />
            <Route path = '/nmissing' element = {<Missing/>} />
        </Routes>
        </div>
    );
}

export default App;
