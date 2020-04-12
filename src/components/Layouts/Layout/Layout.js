import React,{useState} from 'react'
import classes from './Layout.module.css'
import Footer from '../../Footer/Footer'
import HackerNewsLogo from '../../../assets/y18.gif'
import {Route,Link} from 'react-router-dom'
import StoriesContainer from '../../../containers/StoriesContainer/StoriesContainer'
import AuthContext from '../../../context/app-context';
import Login from '../../Login/Login'

const Layout = (props) => {

    const [loginState,setloginState] = useState({username:'',authenticated:false});


    return (
        <AuthContext.Provider value={ {username:loginState.username, authenticated : loginState.authenticated }}>
            {
                <React.Fragment>
                <a href="#header" style={{display:'NONE'}}></a>
                <a href="#main" style={{display:'NONE'}}></a>
                <header className={classes.Header} id="header">
                    <nav>
                        <ul>
                            <li className={classes.Logo}><Link to="/"><img src={HackerNewsLogo} alt="HN"></img></Link></li>
                            <li className={classes.HackerNews}><Link to="/news"><strong>Hacker News </strong></Link></li>
                            <li ><Link to="/newest">new |</Link></li>
                            <li><Link to="/front">past |</Link></li>
                            <li><Link to="/newcomments">comment |</Link></li>
                            <li><Link to="/ask">ask |</Link></li>
                            <li><Link to="/show">show |</Link></li>
                            <li><Link to="/jobs">jobs |</Link></li>
                            <li><Link to="/submit">submit</Link></li>
                            <li className={classes.Login}><a  href="/login"><strong>login</strong></a></li>
                        </ul>
                    </nav>
                </header>
                <Route exact path="/" render={()=><StoriesContainer url="https://hn.algolia.com/api/v1/search_by_date?tags=story&page="/>} ></Route>
                <Route exact path="/news" render={()=><StoriesContainer url="https://hn.algolia.com/api/v1/search_by_date?tags=story&page="/>} ></Route>
                <Route exact path="/newest" render={()=><StoriesContainer url="https://hn.algolia.com/api/v1/search_by_date?tags=story&page="/>} ></Route>
                <Route exact path="/front" render={()=><StoriesContainer url="https://hn.algolia.com/api/v1/search_by_date?tags=story&page="/>} ></Route>
                <Route exact path="/newcomments" render={()=><div>Need to Implement Comment Section</div>} ></Route>
                <Route exact path="/ask" render={()=><div>Need to Implement ask Section</div>} ></Route>
                <Route exact path="/show" render={()=><div>Need to Implement Show Section</div>} ></Route>
                <Route exact path="/jobs" render={()=><div>Need to Implement Jobs Section</div>} ></Route>
                <Route exact path="/submit" render={()=><div>Need to Implement Sumit Section</div>} ></Route>
                <Route exact path="/login" render={()=><Login></Login>} ></Route>
            </React.Fragment>
            }
        </AuthContext.Provider>
        
    );
}

export default Layout;