import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Container, ButtonGroup} from 'reactstrap';

class PersonalPage extends React.Component{

constructor(props){
    super(props);
    this.state={
        recipes:[],
        personalInfo:[]
    }
    this.removeRecipe=this.removeRecipe.bind(this);
}

componentDidMount(){
axios.get(`/my_recipes_book/v1/users_recipes/`)
.then(res=>{this.setState({recipes:res.data})}).catch(error=>{console.log(error)})
axios.get(`/my_recipes_book/v1/users/${this.props.match.params.id}`)
.then(res=>{this.setState({personalInfo:res})}).catch(error=>{console.log(error)})
console.log(this.state.recipes)
}

async removeRecipe(id){
    await fetch(`/my_recipes_book/v1/users_recipes/${id}`,{
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(() => {
    let updatedRecipes = [...this.state.recipes].filter(i => i.id !== id);
    this.setState({recipes: updatedRecipes});
  });
}

recipesList(){
   
    if(this.state.recipes===undefined){}
    else{
    const recipesList = this.state.recipes.map(recipe=> {
        return <div>
            <h2>{recipe.recipeName}</h2>
                <p>Ingredients: {recipe.recipesIngredients} </p>
            <p>Cooking steps: {recipe.recipesCooking}</p>
            <img src={recipe.recipesPicture}/>
            <ButtonGroup>
               <Button size="sm" color="primary" tag={Link} to={"/users_recipes/" + recipe.id}>Edit</Button>
               <Button size="sm" color="danger" onClick={() => this.removeRecipe(recipe.id)}>Delete</Button>
             </ButtonGroup>
        </div>
        
      });
    return recipesList;
    }
}
render(){
    
      return (
        <div>
          <Container fluid>
            <div className="float-right">
              <Button color="success" tag={Link} to="/users_recipes/">Add new recipe</Button>
            </div>
            <h3>My recipes</h3>
              {this.recipesList()}
          </Container>
        </div>
      );
    }
  }


export default PersonalPage;


