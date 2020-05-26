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
async getUser(){
    try{
  let user=await axios.get(`/my_recipes_book/v1/users/${this.props.id}`)
this.setState({personalInfo:user.data})
console.log(this.state.personalInfo)
}
catch(error){
   console.log(error);
}
}
async getRecipe(){
    try{
  let recipeInfo=await axios.get(`/my_recipes_book/v1/users_recipes/`)
this.setState({recipes:recipeInfo.data})
}
catch(error){
   console.log(error);
}
}
componentDidMount(){
this.getRecipe();
this.getUser();
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
personalInfo(){
    if(this.state.personalInfo===undefined){}
    else{
    return <div>
    <p>User Id: {this.state.personalInfo.userId}</p>
    <p>User Name: {this.state.personalInfo.userName}</p>
    <p>Full Name: {this.state.personalInfo.fullName}</p>
    <img src={this.state.personalInfo.pictureUrl} alt="picture"></img>
    </div>
    }
}
render(){
    
      return (
        <div>
          <Container fluid>
            <div className="float-right">
            {this.personalInfo()}
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


