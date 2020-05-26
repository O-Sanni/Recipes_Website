import React from "react";
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
// import AboutPage from './components/AboutPage';
import FoodPageInformation from './FoodPageInformation';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import Subscribe from './Subscribe';
import AddUpdateReceipt from "./AddUpdateReceipt"
import PersonalPage from "./PersonalPage";
import '../styles/Navigation.scss'


//navigation component will have 4 links and 4 route each route will call exact path for specific component
function Navigation(){
    return (
        <Router>
            <nav id="navigation">
                <ul id="nav-ul">
                    <li className="nav-lists">
                        <Link className="class-link" to="/">Home</Link>
                    </li>
                    <li className="nav-lists">
                        <Link className="class-link" to="/food_search_info">Food Search</Link>
                    </li>
                    <li className="nav-lists">
                        <Link className="class-link" to="/signin">Sign In</Link>
                    </li>
                    <li className="nav-lists">
                        <Link className="class-link" to="/signup">Sign Up</Link>
                    </li>
                    <li className="nav-lists">
                        <Link className="class-link" to="/personal">Personal Page</Link>
                    </li>
                    <li className="nav-lists">
                        <Link className="class-link" to="/subscribe">Subscribe</Link>
                    </li>
                    <li className="nav-lists">
                        <Link className="class-link" to="/users_recipes">Add/Update Receipt</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Subscribe}></Route> 
                <Route exact path="/food_search_info" component={FoodPageInformation}></Route>
                <Route exact path="/signin" component={SignInPage} ></Route>
                <Route exact path="/signup" component={SignUpPage}></Route>
                <Route exact path="/users_recipes" component={AddUpdateReceipt} ></Route>
                <Route exact path="/personal" component={PersonalPage} ></Route>
            </Switch>
        </Router>
    )
}

export default Navigation;