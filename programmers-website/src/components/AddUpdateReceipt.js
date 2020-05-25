import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';


class AddUpdateReceipt extends React.Component{

    epmtyReceipts={
        userName:"",
        recipesName:"",
        recipesIngredients:"",
        recipesPicture:"",
        recipesCooking: ""

    }
constructor(props){
    super(props);
    this.state={
       item:this.epmtyReceipts,
       put: false
    }
    this.handleChange=this.getUserName.bind(this);
    this.submitButtonHandler=this.submitButtonHandler.bind(this);
}

handleChange(event){
    event.preventDefault();
    this.setState({email: event.target.value});
}
async componentDidMount(){
if(this.props.match.params.id !== "new"){
    const groupItems=await (await fetch(`/my_recipes_book/v1/users_recipes/${this.props.match.params.id}`)).json());
    this.setState({item:groupItems})
    this.setState({put:true})
}
}
handleChange(event){
    const value=event.target.value;
    const name=event.target.name;
    let item={...this.state.item};
    item[name]=value;
    this.setState({item});
    
}
submitButtonHandler(event){
    event.preventDefault();
    this.setState({search:true});
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
    }
    else{
        await fetch(`/my_recipes_book/v1/users_recipes/`,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(item),
            });

    }
}


render(){
    const {item}=this.state
    const updateOrAdd=<h1>{item.id? "Edit Receipt":"Add new Receipt"}</h1>;
    return(
        <Container id="main-div-search-page">
        {updateOrAdd}
            <Container id="search-page-form-div">
                <Form onSubmit={this.submitButtonHandler}>
                    <FormGroup id="form-inputs-div">
                        <FormGroup className="form-mini-divs">
                            <p className="job-display-p">Enter Your Email</p>
                            <Input   type="text" name="email" id="email" value={item.email || ""} onChange={this.handleChange} autoComplete="email"/>
                        </FormGroup>
                        <FormGroup className="form-mini-divs">
                            <p className="job-display-p">Indicate your food Preferences</p>
                            <Input   type="text" name="preferences" value={item.preferences || ""} onChange={this.handleChange} autoComplete="preferences"/>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup id="form-buttons-divs">
                    <Button color="primary" class="btn btn-primary" type="submit">Save</Button>{' '}
                    <Button class="btn btn-secondary" tag={Link} to="/food_search_info">Exit</Button>
                        </FormGroup>
                </Form>
            </Container>  
            </Container>
        )
    }
}

export default withRouter(AddUpdateReceipt);
