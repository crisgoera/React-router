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
import { format } from 'date-fns'

function App() {
    const [postBody, setPostBody] = useState('')
    const [postTitle, setPostTitle] = useState('')
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

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length-1].id +1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = {
            id ,
            title: postTitle,
            body: postBody,
            datetime
        };
        const postsList = [...posts, newPost];
        setPosts(postsList);
        setPostTitle('');
        setPostBody('');
        navigate('/')
    }

    const handleDelete = (id) => {
        setPosts(posts.filter((post) => post.id !== id))
        navigate('/')
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
                <Route path = '/post' element = {<NewPost
                        postTitle = {postTitle}
                        setPostTitle = {setPostTitle}
                        postBody = {postBody}
                        setPostBody = {setPostBody}
                        handleSubmit = {handleSubmit}
                    />}
                />
                <Route path = '/post/:id' element = {<PostPage posts = {posts} handleDelete = {handleDelete}/>} />
                <Route path = '/about' element = {<About/>} />
                <Route path = '/*' element = {<Missing/>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
