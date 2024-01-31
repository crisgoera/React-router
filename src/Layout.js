import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="App">
        <Header />
        <NavBar />
        <Footer />
    </div>
  )
}

export default Layout
