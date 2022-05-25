import Home from "./Home";
import Explore from './Explore'
import Item from './Item'
import ItemDetails from './ItemDetails'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import Authors from './Authors'
import ConnectWallet from './ConnectWallet'
import CreateItem from './CreateItem'
import Login from './Login'
import Register from './Register'
import Contact from './Contact'

const routes = [
    { path: '/', component: <Home />},
    { path: '/nft', component: <Explore />},
    { path: '/creator', component: <Explore />},
    { path: '/item', component: <Item />},
    { path: '/item-details', component: <ItemDetails />},
    { path: '/blog', component: <Blog />},
    { path: '/blog-details', component: <BlogDetails />},
    { path: '/authors', component: <Authors />},
    { path: '/connect-wallet', component: <ConnectWallet />},
    { path: '/create-item', component: <CreateItem />},
    { path: '/login', component: <Login />},
    { path: '/register', component: <Register />},
    { path: '/contact', component: <Contact />}
]

localStorage.setItem("theme", "light");


export default routes;