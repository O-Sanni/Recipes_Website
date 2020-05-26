//Some of the code ideas was taking from morning exercise dated Friday May 23rd,2020
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import axios from "axios";

class AddUpdateReceipt extends React.Component{

    epmtyRecipes={
        userName:"",
        recipesName:"",
        recipesIngredients:"",
        recipesPicture:"",
        recipesCooking: ""
    }

constructor(props){
    super(props);
    this.state={
       item:this.epmtyRecipes,
       put: false
    }
    this.handleChange=this.handleChange.bind(this);
    this.submitButtonHandler=this.submitButtonHandler.bind(this);
}

async componentDidMount(){
if(this.props.match.params.id !== ""){
    try{
    const groupItems=await axios.get(`/my_recipes_book/v1/users_recipes/${this.props.match.params.id}`);
    this.setState({item:groupItems})
    this.setState({put:true})
}catch (error){
    console.log(error)
}
}
}
handleChange(event){
    const value=event.target.value;
    const name=event.target.name;
    let item={...this.state.item};
    item[name]=value;
    this.setState({item});
    
}

async submitButtonHandler(event){
    event.preventDefault();
    const {item}=this.state;
    if(this.state.put===true){ 
    await fetch(`/my_recipes_book/v1/users_recipes/${item.id}`,{
        method:'PUT',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item),
        });
        this.props.history.push('/users_recipes/');
    }
    else{
        await fetch(`/my_recipes_book/v1/users_recipes/`,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(item)
            });
            this.props.history.push('/users_recipes');

    }
}


render(){
    const {item}=this.state
    const updateOrAdd=<h1>{item.id? "Edit recipe":"Add new recipe"}</h1>;
    return(
        <Container id="main-div-search-page">
        {updateOrAdd}
            <Container id="search-page-form-div">
                <Form onSubmit={this.submitButtonHandler}>
                    <FormGroup id="form-inputs-div">
                    <FormGroup className="form-mini-divs">
                            <p className="update-recipe-display-p">Enter your user name</p>
                            <Input   type="text" name="userName" id="userName" value={item.userName || ""} onChange={this.handleChange} autoComplete="userName"/>
                        </FormGroup>
                        <FormGroup className="form-mini-divs">
                            <p className="update-recipe-display-p">Enter recipe name</p>
                            <Input   type="text" name="recipesName" id="recipesName" value={item.recipesName || ""} onChange={this.handleChange} autoComplete="recipesName"/>
                        </FormGroup>
                        <FormGroup className="form-mini-divs">
                            <p className="update-recipe-display-p">Enter receipt ingredients</p>
                            <textarea  name="recipesIngredients" value={item.recipesIngredients} onChange={this.handleChange} autoComplete="recipesIngredients" ></textarea>
                        </FormGroup>
                        <FormGroup className="form-mini-divs">
                        <p className="update-recipe-display-p">Enter receipt cooking process</p>
                            <textarea  name="recipesCooking" value={item.recipesCooking} onChange={this.handleChange} autoComplete="recipesCooking" ></textarea>
                            </FormGroup>
                        <FormGroup className="form-mini-divs">
                            <p className="update-recipe-display-p">Add dish picture url</p>
                            <Input   type="text" name="recipesPicture" value={item.recipesPicture || ""} onChange={this.handleChange} autoComplete="recipesPicture"/>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup id="form-buttons-divs">
                    <Button color="primary" class="btn btn-primary" type="submit">Save</Button>{' '}
                    <Button id="clear-button-search-page" type="button" onClick={()=>{this.setState({item: this.epmtyReceipts})}}>Clear</Button>
                    
                    <Button class="btn btn-secondary" tag={Link} to="/food_search_info">Exit</Button>
                        </FormGroup>
                </Form>
            </Container>  
            </Container>
        )
    }
}

export default withRouter(AddUpdateReceipt);
