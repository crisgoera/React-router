import { useParams, Link } from 'react-router-dom'

const PostPage = ( { posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find( (post) => (post.id).toString() === id)

    return (
      <main className='PostPage'>
          <article className='post'>
                { post &&
                    <>
                        <h2>{ post.title }</h2>
                        <p className = 'date'>{post.datetime}</p>
                        <p className = 'postBody'>{post.body}</p>

                        <button onClick={()=>handleDelete(post.id)}>
                            Delete post
                        </button>
                    </>
                 }

                 { !post &&
                    <>
                        <p className='postBody'> The post doesn't exist</p>
                        <Link to = '/'>Visit the homepage</Link>
                    </>
                 }
            </article>
      </main>
    )
  }

  export default PostPage
