import React from "react";
import { Link} from "react-router-dom";
import {Button}  from 'reactstrap';


class SignInPage extends React.Component{
constructor(props){
    super(props);
    this.state={
        userName: "",
        password: "",
        userId:"",
        search: false
    }
    this.getUserName=this.getUserName.bind(this);
    this.getUserId=this.getUserId.bind(this);
    this.getPassword=this.getPassword.bind(this);
    this.submitButtonHandler=this.submitButtonHandler.bind(this);
}

getUserName(event){
    event.preventDefault();
    this.setState({userName: event.target.value});
}
getUserId(event){
    event.preventDefault();
    this.setState({userId: event.target.value});
}
getPassword(event){
    event.preventDefault();
    this.setState({password: event.target.value});
}

submitButtonHandler(event){
    event.preventDefault();
}

render(){
    return(
        <div id="main-div-signin-page">
            <div id="signin-page-form-div">
                <form id="search-form" onSubmit={this.submitButtonHandler}>
                    <div id="form-inputs-div">
                        <div className="form-mini-divs">
                            <p className="signin-display-p">User id</p>
                            <input className="input-class" id="job-title-input"  type="text" value={this.state.userId} onChange={this.getUserId} placeholder="enter your user id"/>
                        </div>
                        <div className="form-mini-divs">
                            <p className="signin-display-p">User name</p>
                            <input className="input-class" id="signin-title-input"  type="text" value={this.state.userName} onChange={this.getUserName} placeholder="enter your user name"/>
                        </div>
                        <div className="form-mini-divs">
                            <p className="signin-display-p">Password</p>
                            <input className="input-class" id="job-title-input"  type="text" value={this.state.password} onChange={this.getPassword} placeholder="enter your password"/>
                        </div>
                    </div>
                    <div id="form-buttons-divs">
                        {/* <input id="submit-button-form" type="submit" /> */}
                         {/* clear button will clear the state, put values to initial state in order to do a new search */}
                         <button id="clear-button-search-page" type="button" onClick={()=>{this.setState({userName: "",password: "",userId:"", search: false})}}>Clear</button>
                         <Button size="sm" color="primary" tag={Link} to={"/personal/"} >LogIn</Button>
                    </div>
                </form>
            </div>  
            </div>
        )
    }
}

export default SignInPage;


