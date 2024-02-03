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
import api from './api/posts'

function App() {
    const [postBody, setPostBody] = useState('')
    const [postTitle, setPostTitle] = useState('')
    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('/posts')
                setPosts(response.data)
            } catch (err) {
                if (err.response) {
                // Not in the 200 response range:
                console.log(err.response.data);
                console.log(err.response.headers);
                console.log(err.response.status);
                } else {
                    console.log(`Error: ${err.message}`)
                }
            }
        }

        fetchPosts();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length-1].id +1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = {
            id ,
            title: postTitle,
            body: postBody,
            datetime
        };

        try {
            const response = await api.post('/posts', newPost)
            const postsList = [...posts, response.data];
            setPosts(postsList);
            setPostTitle('');
            setPostBody('');
            navigate('/');
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }

    const handleDelete = async (id) => {
        try{
            await api.delete(`/posts/${id}`)
            setPosts(posts.filter((post) => post.id !== id));
            navigate('/');
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }

    const handleSearch = (search) => {
        setSearch(search)

        if (search !== '') {
            setFilteredPosts(
                posts.filter(
                    (post) => (post.body.toLowerCase().includes(search.toLowerCase()) ||
                    post.title.toLowerCase().includes(search.toLowerCase()) === true)
                    )
            )
        } else {
            setFilteredPosts(null)
        }
    }

    return (
        <div className='App'>
            <Header title = "React JS Blog" />
            <NavBar
                search = {search}
                handleSearch = {handleSearch}
            />
            <Routes>
                <Route path = '/' element = {
                    (filteredPosts)
                    ? <Home posts = {filteredPosts}/>
                    :  <Home posts = {posts} />
                }/>

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
