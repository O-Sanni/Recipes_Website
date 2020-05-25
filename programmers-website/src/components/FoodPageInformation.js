import React from "react";
import FoodSearch from "./FoodSearch";
import TranslationComponent from "./TranslationComponent"


class FoodPageInformation extends React.Component{
constructor(props){
    super(props);
    this.state={
        searchTitle: "",
        diet: "balanced",
        cuisineType:"",
        mealType:"breakfast", 
        dishType:"",
        search: false
    }
    this.getSearchTitle=this.getSearchTitle.bind(this);
    this.getSearchDiet=this.getSearchDiet.bind(this);
    this.getSearchCuisineType=this.getSearchCuisineType.bind(this);
    this.getSearchMealType=this.getSearchMealType.bind(this);
    this.getSearchDishType=this.getSearchDishType.bind(this);
    this.submitButtonHandler=this.submitButtonHandler.bind(this);
}

getSearchTitle(event){
    event.preventDefault();
    this.setState({searchTitle: event.target.value});
}
getSearchDiet(event){
    event.preventDefault();
    this.setState({diet: event.target.value});
}

getSearchCuisineType(event){
    event.preventDefault();
    this.setState({cuisineType: event.target.value});
}

getSearchMealType(event){
    event.preventDefault();
    this.setState({mealType: event.target.value});
}

getSearchDishType(event){
    event.preventDefault();
    this.setState({dishType: event.target.value});
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
                            <p className="job-display-p">Enter ingredient name:</p>
                            <input className="input-class" id="job-title-input"  type="text" value={this.state.searchTitle} onChange={this.getSearchTitle} placeholder="&#128269; Search ingredient..."/>
                        </div>
                    </div>
                    <div id="form-inputs-div">
                            <p className="job-display-p">Enter cusine type, if you want to search for specific cusine</p>
                            <input className="input-class" id="job-title-input"  type="text" value={this.state.cuisineType} onChange={this.getSearchTitle} placeholder="&#128269; Search cusine..."/>
                        </div> 
                    <div id="form-inputs-div">
                        <div className="form-mini-divs">
                        <h3> Enter dish type, if you want to search for specific dish type </h3>
                            <p className="job-display-p">Name:</p>
                            <input className="input-class" id="job-title-input"  type="text" value={this.state.dishType} onChange={this.getSearchDishType} placeholder="&#128269; Search dish type..."/>
                        </div>
                    </div>
                    
                    <div className="form-mini-divs">
                            <p className="job-display-p">Choose diet</p>
                            <select className="select-to-display" value={this.state.value} onChange={this.getSearchDiet}>
                                <option className="options-to-display-class" value="balanced">Balanced</option>
                                <option className="options-to-display-class" value="high-protein">High-protein</option>
                                <option className="options-to-display-class" value="high-fiber">High-fiber</option>
                                <option className="options-to-display-class" value="low-fat">Low-fat</option>
                                <option className="options-to-display-class" value="low-carb">Low-carb</option> 
                                <option className="options-to-display-class" value="low-sodium">Low-sodium</option>
                            </select>
                        </div>
                        <div className="form-mini-divs">
                            <p className="job-display-p">Choose meal type:</p>
                            <select className="select-to-display" value={this.state.value} onChange={this.getSearchMealType}>
                                <option className="options-to-display-class" value="breakfast">Breakfast</option>
                                <option className="options-to-display-class" value="lunch">Lunch</option>
                                <option className="options-to-display-class" value="snack">Snack</option>
                                <option className="options-to-display-class" value="dinner">Dinner</option>
                            </select>
                        </div>
                    <div id="form-buttons-divs">
                        <input id="submit-button-form" type="submit" />
                        {/* clear button will clear the state, put values to initial state in order to do a new search */}
                        <button id="clear-button-search-page" type="button" onClick={()=>{this.setState({searchTitle: "", searchCourse: false, searchBook: false, search: false})}}>Clear</button>
                    </div>
                    <p className="job-display-p">If you want to start a new search please press clear</p>
                </form>
                <TanslationComponent />
            </div>  
            {this.state.search? (<FoodSearch title={this.state.searchTitle} searchTitle={this.state.searchTitle} diet={this.state.diet} cuisineType={this.state.cuisineType} mealType={this.state.mealType} dishType={this.state.dishType}/>) : ""}           
        </div>
        )
    }
}

export default FoodPageInformation;