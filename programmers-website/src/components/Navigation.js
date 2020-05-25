import React from "react";
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
// import AboutPage from './components/AboutPage';
import FoodPageInformation from './FoodPageInformation';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';


//navigation component will have 4 links and 4 route each route will call exact path for specific component
function Navigation(){
    return (
        <Router>
            <nav id="navigation">
                <ul id="nav-ul">
                    <li className="nav-lists">
                        <Link className="class-link" to="/">About</Link>
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
                        <Link className="class-link" to="/add_update_receipt">Add/Update Receipt</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
            {/* Route should have exact path in order to show correct page */}
                {/* <Route exact path="/" component={AboutPage}></Route>  */}
                <Route exact path="/food_search_info" component={FoodPageInformation}></Route>
                <Route exact path="/signin" component={SignInPage} ></Route>
                <Route exact path="/signup" component={SignUpPage}></Route>
                {/* <Route exact path="/account" component={AccountPage}></Route>
                <Route exact path="/questions" component={QuestionsPage} ></Route> */}
            </Switch>
        </Router>
    )
}

export default Navigation;