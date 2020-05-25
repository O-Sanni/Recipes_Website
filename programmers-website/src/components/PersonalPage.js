import React from "react";
import axios from 'axios';
import UpdateUserInfo from './UpdateUserInfo';

class PersonalPage extends React.Component{
constructor(props){
    super(props);
    this.state={
        userName: "",
        password: "",
        email:"",
        fullName:"",
        signup: false
    }
    this.changeUserName=this.changeUserName.bind(this);
    this.changePassword=this.changePassword.bind(this);
     this.changeFullName=this.changeFullName.bind(this);
    this.changeEmail=this.changeEmail.bind(this);
    this.submitButtonHandler=this.submitButtonHandler.bind(this);
}

changeUserName(event){
    event.preventDefault();
   <
}
changePassword(event){
    event.preventDefault();
    this.setState({password: event.tarchange.value});
}
changeFullName(event){
    event.preventDefault();
    this.setState({fullName: event.tarchange.value});
}
changeEmail(event){
    event.preventDefault();
    this.setState({email: event.tarchange.value});
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
                            <input className="input-class" id="job-title-input"  type="text" value={this.state.userName} onChange={this.changeUserName} placeholder="enter your user name"/>
                        </div>
                        <div className="form-mini-divs">
                            <p className="job-display-p">Password</p>
                            <input className="input-class" id="job-title-input"  type="text" value={this.state.password} onChange={this.changePassword} placeholder="enter your password"/>
                        </div>
                        <div className="form-mini-divs">
                            <p className="job-display-p">Full name</p>
                            <input className="input-class" id="job-title-input"  type="text" value={this.state.fullName} onChange={this.changeFullName} placeholder="enter your full name"/>
                        </div>
                        <div className="form-mini-divs">
                            <p className="job-display-p">Email</p>
                            <input className="input-class" id="job-title-input"  type="text" value={this.state.email} onChange={this.changeEmail} placeholder="enter email"/>
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

export default PersonalPage;





updateUser(){
    //     axios.put('/my_recipes_book/v1/users/3',
    //     {
    //     "userName": this.state.userName,
    // 	"fullName":this.state.fullName,
    // 	"email":this.state.email,
    //     "password":this.state.password,
    //     "pictureUrl":""
    //     }).then(function (response) {
    //     console.log(response);
    //   }).catch(function (error) {
    //     console.log(error);
    // }) 
    // }
    
    // componentDidMount(){
    //     axios.change('/my_recipes_book/v1/users/')
    //     .then(function (response) {
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //     }