import React from "react";
import axios from 'axios';

class SignUpPage extends React.Component{
constructor(props){
    super(props);
    this.state={
        userName: "",
        password: "",
        email:"",
        fullName:"",
        signup: false
    }
    this.getUserName=this.getUserName.bind(this);
    this.getPassword=this.getPassword.bind(this);
     this.getFullName=this.getFullName.bind(this);
    this.getEmail=this.getEmail.bind(this);
    this.submitButtonHandler=this.submitButtonHandler.bind(this);
}

getUserName(event){
    event.preventDefault();
    this.setState({userName: event.target.value});
}
getPassword(event){
    event.preventDefault();
    this.setState({password: event.target.value});
}
getFullName(event){
    event.preventDefault();
    this.setState({fullName: event.target.value});
}
getEmail(event){
    event.preventDefault();
    this.setState({email: event.target.value});
}

submitButtonHandler(event){
    event.preventDefault();
    this.setState({search:true});
}

addUser(){
    axios.post('/my_recipes_book/v1/users/',
    {
    "userName": this.state.userName,
	"fullName":this.state.fullName,
	"email":this.state.email,
    "password":this.state.password,
    "pictureUrl":""
    }).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
})}


render(){
    return(
        <div id="main-div-search-page">
            <div id="search-page-form-div">
                <form id="search-form" onSubmit={this.submitButtonHandler}>
                    <div id="form-inputs-div">
                        <div className="form-mini-divs">
                            <p className="job-display-p">User name</p>
                            <input className="input-class" id="job-title-input"  type="text" value={this.state.userName} onChange={this.getUserName} placeholder="enter your user name"/>
                        </div>
                        <div className="form-mini-divs">
                            <p className="job-display-p">Password</p>
                            <input className="input-class" id="job-title-input"  type="text" value={this.state.password} onChange={this.getPassword} placeholder="enter your password"/>
                        </div>
                        <div className="form-mini-divs">
                            <p className="job-display-p">Full name</p>
                            <input className="input-class" id="job-title-input"  type="text" value={this.state.fullName} onChange={this.getFullName} placeholder="enter your full name"/>
                        </div>
                        <div className="form-mini-divs">
                            <p className="job-display-p">Email</p>
                            <input className="input-class" id="job-title-input"  type="text" value={this.state.email} onChange={this.getEmail} placeholder="enter email"/>
                        </div>
                    </div>
                    <div id="form-buttons-divs">
                        <input id="submit-button-form" type="submit" />
                        {/* clear button will clear the state, put values to initial state in order to do a new search */}
                        <button id="clear-button-search-page" type="button" onClick={()=>{this.setState({userName: "",
        password: "",
        email:"",
        fullName:"",
        signup: false})}}>Clear</button>
                    </div>
                    <p className="job-display-p">If you want to start a new search please press clear</p>
                </form>
            </div>  
            {this.state.search? this.updateUser() : ""}           
            {/* {this.state.search ? (<SearchJobs results_per_page={this.state.numberToDisplay} page={this.state.page} what={this.state.searchTitle} where={this.state.searchLocation} distance={Math.round(this.state.searchDistanceMl/0.62137)}/>) : ""}  */}
        </div>
        )
    }
}

export default SignUpPage;