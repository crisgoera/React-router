import Header from './Header'
import NavBar from './NavBar'
import Home from './Home';
import NewPost from './NewPost';
import About from './About';
import PostPage from './PostPage';
import Missing from './Missing';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './Footer';

function App() {
    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState([
        {
          id: 1,
          title: "My First Post",
          datetime: "July 01, 2021 11:17:36 AM",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
          id: 2,
          title: "My 2nd Post",
          datetime: "July 01, 2021 11:17:36 AM",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
          id: 3,
          title: "My 3rd Post",
          datetime: "July 01, 2021 11:17:36 AM",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
          id: 4,
          title: "My Fourth Post",
          datetime: "July 01, 2021 11:17:36 AM",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        }
      ]);

    const handleDelete = (id) => {
        setPosts(posts.filter((post) => post.id !== id))
    }

    return (
        <div className='App'>
            <Header title = "React JS Blog" />
            <NavBar
                search = {search}
                setSearch = {setSearch}
            />
            <Routes>
                <Route path = '/' element = {<Home posts = {posts}/>}/>
                <Route path = '/post' element = {<NewPost/>} />
                <Route path = '/post/:id' element = {<PostPage posts = {posts} handleDelete = {handleDelete}/>} />
                <Route path = '/about' element = {<About/>} />
                <Route path = '/*' element = {<Missing/>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
