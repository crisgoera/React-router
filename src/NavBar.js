import { Link} from 'react-router-dom'

const NavBar = ( {search, setSearch} ) => {
    return (
        <main className="NavBar">
            <form className="searchForm" onSubmit = {(e)=> e.preventDefault()}>
                <label className = "searchForm" htmlFor="searchForm">Search posts</label>
                <input
                    autoFocus
                    type="text"
                    onChange = {(e)=>setSearch(e.target.value)}
                    role = "searchbox"
                    placeholder = "Search posts"
                    required
                    value = {search}
                    id = "searchForm"
                />
            </form>

            <ul>
                <li><Link to = {'/'} >Home</Link> </li>
                <li><Link to = {'/post'} >Post</Link></li>
                <li><Link to = {'/about'} >About</Link></li>
            </ul>
        </main>
    )
  }

  export default NavBar
