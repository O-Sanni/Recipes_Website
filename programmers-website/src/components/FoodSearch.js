import React from "react";
import axios from "axios";
import '../styles/FoodSearchInfo.scss'


class FoodSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            foodLists:[]
        }
    }


    async getFood(){
        const app_key=process.env.REACT_APP_API_KEY_RECIPES;
        const app_id=process.env.REACT_APP_RECIPES_API_ID;
        try{
           let food=await axios.get(`https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q=${this.props.title}`)
           this.setState({foodLists: food.data.hits});
        }

        catch(error){
           console.log(error);
        }
    }
    // async getFood(){
    //     const app_key=process.env.REACT_APP_API_KEY_RECIPES;
    //     const app_id=process.env.REACT_APP_RECIPES_API_ID;
    //     try{
    //        let food=await axios.get(`https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q=${this.props.title}`)
    //        this.setState({foodLists: food.data.hits});
    //     }

    //     catch(error){
    //        console.log(error);
    //     }
    // }

    componentDidMount(){
        this.getFood();

    }       
        
// the following function will check if this.state.jobList is not undefined .map will called to print out information for each job listing
    checkIfExist(){ 
        if(this.state.foodList!=undefined){console.log(this.state.foodLists)}
        else{
            let recipes=this.state.foodLists.map(res=> {
                let cations=res.recipe.cautions.map(res=>{return <p>{res}</p>})
                let dietLabels=res.recipe.dietLabels.map(res=>{return <p>{res}</p>})
                let digest=res.recipe.digest.map(res=>{return <div><p className="p-search-result">Label: {res.label} Total: {Math.round(res.total)}</p>
                </div>})
                let healthLabels=res.recipe.healthLabels.map(res=>{return <p className="p-search-result">{res}</p>})
                let ingredients=res.recipe.ingredients.map(res=>{return <p className="p-search-result">{res.text}, weight: {Math.round(res.weight)}</p>})
                
                return (
                    <div className="recipe-search-output-div-class">
                         <h2 className="recipe-search-output-class-h2">Name: {res.recipe.label}</h2> 
                         <p className="recipe-search-output-class-p"><span class="span-recipe">Calories: </span>{Math.round(res.recipe.calories)}</p>
                        <p className="recipe-search-output-class-p"><span class="span-recipe">Cautions: </span>{cations}</p>
                         <p className="recipe-search-output-class-p"><span class="span-recipe">Total time: </span>{res.recipe.totalTime}</p>
                        <p className="recipe-search-output-class-p"><span class="span-recipe">Total Weight: </span> {res.recipe.totalWeight}</p>
                        <img className="dish-img-search" src={res.recipe.image} alt="dish image"/>
                        <div>
                        <div>
                        <p className="p-search-result">Diet Labels: </p>
                            {dietLabels}
                        </div>
                         <div>
                         <p className="p-search-result">Health Labels: </p>
                             {healthLabels}
                        </div>
                        <div>
                        <p className="p-search-result">List  of Ingredients: </p>
                            {ingredients}
                         </div>
                        <p className="p-search-result">Total Nutrients: </p>
                              {digest}
                         </div>
                        
                      
                     </div>)
            })
            return recipes;
            }
    }

    render(){  
         
        return(
            <div id="main-div-job-search-results">
                { this.checkIfExist()}
                <img src={require("../assets/transparent.png")} alt="powered by Edamam"/>
            </div>
        )
    }
}

export default FoodSearch;
