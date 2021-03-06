import React from "react";
import FoodSearch from "./FoodSearch";
import TranslationComponent from "./TranslationComponent";
import '../styles/FoodSearchInfo.scss'

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
                            <p className="food-display-p">Enter ingredient name:</p>
                            <input className="input-class" id="food-title-input"  type="text" value={this.state.searchTitle} onChange={this.getSearchTitle} placeholder="&#128269; Search ingredient..."/>
                        </div>
                        </div>
                    <div id="form-buttons-divs">
                        <input id="submit-button-form" type="submit" />
                        {/* clear button will clear the state, put values to initial state in order to do a new search */}
                        <button id="clear-button-search-page" type="button" onClick={()=>{this.setState({searchTitle: "", searchCourse: false, searchBook: false, search: false})}}>Clear</button>
                    </div>
                    <p className="job-display-p">If you want to start a new search please press clear</p>
                </form>
                <TranslationComponent />
            </div>  
            {this.state.search? (<FoodSearch title={this.state.searchTitle} />) : ""}           
        </div>
        )
    }
}

export default FoodPageInformation;