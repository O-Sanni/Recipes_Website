import React from "react";
import FoodSearch from "./FoodSearch";


class FoodPageInformation extends React.Component{
constructor(props){
    super(props);
    this.state={
        searchTitle: "",
        search: false
    }
    this.getSearchTitle=this.getSearchTitle.bind(this);
    this.submitButtonHandler=this.submitButtonHandler.bind(this);
}

getSearchTitle(event){
    event.preventDefault();
    this.setState({searchTitle: event.target.value});
}

submitButtonHandler(event){
    event.preventDefault();
    this.setState({search:true});
}

render(){
    return(
        <div id="main-div-search-page">
            <div id="search-page-form-div">
                <form id="search-form" onSubmit={this.submitButtonHandler}>
                    <div id="form-inputs-div">
                        <div className="form-mini-divs">
                        <h3> Enter product name </h3>
                            <p className="job-display-p">Name:</p>
                            <input className="input-class" id="job-title-input"  type="text" value={this.state.searchTitle} onChange={this.getSearchTitle} placeholder="&#128269; Search name..."/>
                        </div>
                    </div>
                    <div id="form-buttons-divs">
                        <input id="submit-button-form" type="submit" />
                        {/* clear button will clear the state, put values to initial state in order to do a new search */}
                        <button id="clear-button-search-page" type="button" onClick={()=>{this.setState({searchTitle: "", searchCourse: false, searchBook: false, search: false})}}>Clear</button>
                    </div>
                    <p className="job-display-p">If you want to start a new search please press clear</p>
                </form>
            </div>  
            {this.state.search? (<FoodSearch title={this.state.searchTitle}/>) : ""}           
            {/* {this.state.search ? (<SearchJobs results_per_page={this.state.numberToDisplay} page={this.state.page} what={this.state.searchTitle} where={this.state.searchLocation} distance={Math.round(this.state.searchDistanceMl/0.62137)}/>) : ""}  */}
        </div>
        )
    }
}

export default FoodPageInformation;