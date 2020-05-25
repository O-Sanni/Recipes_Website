import React from "react";
import axios from "axios";


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

    componentDidMount(){
        this.getFood();

    }       
        
the following function will check if this.state.jobList is not undefined .map will called to print out information for each job listing
    checkIfExist(){ 
         console.log(this.state.foodLists)
        if(this.state.foodList===undefined){}
        else{
            let recipes=this.state.foodList.map(res=> {
                let cations=res.recipe.map(res=>{return <p>{res.cautions}</p>})
                let dietLabels=res.recipe.map(res=>{return <p>{res.dietLabels}</p>})
                let digest=res.recipe.map(res=>{return <div><p>{res.digest.label}</p>
                <p>{res.digest.tag}</p>
                <p>{res.digest.total}</p>
                </div>})
                let healthLabels=res.recipe.map(res=>{return <p>{res.healthLabels}</p>})
                let ingredients=res.recipe.map(res=>{return <p>{res.ingredients.text}, weight: {res.ingredients.weight}</p>})
                
                return (
                    <div className="recipe-search-output-div-class">
                        <h2 className="recipe-search-output-class-h2">Name: {res.recipe.label}</h2> 
                        <p className="recipe-search-output-class-p"><span class="span-recipe-map">Calories: </span>{res.recipe.calories}</p>
                        <p className="recipe-search-output-class-p"><span class="span-recipe-map">Cautions: </span>{cations}</p>
                        <p className="recipe-search-output-class-p"><span class="span-recipe-map">Total time: </span>{res.recipe.totalTime}</p>
                        <p className="recipe-search-output-class-p"><span class="span-recipe-map">Total Weight: </span> {res.recipe.totalWeight}</p>
                        <img src={res.recipe.image} alt="dish image"/>
                        <div>
                            {digest}
                        </div>
                        <div>
                            {dietLabels}
                        </div>
                        <div>
                            {healthLabels}
                        </div>
                        <div>
                            {ingredients}
                        </div>
                    </div>)
            })
            console.log(recipes);
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
