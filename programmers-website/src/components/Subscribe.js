import React from "react";
import { Link, withRouter} from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label }  from 'reactstrap';


class Subscribe extends React.Component{

    subscribeEmpty={
        email:"",
        preferences:""
    };
constructor(props){
    super(props);
    this.state={
        item: this.subscribeEmpty
    }
    
    this.handleChange=this.handleChange.bind(this);
    this.submitButtonHandler=this.submitButtonHandler.bind(this);
    }

handleChange(event){
const target = event.target;
const value=target.value;
const name=target.name;
let item={...this.state.item};
item[name]=value;
this.setState({item});
}

async submitButtonHandler(event){
    event.preventDefault();
    const {item}=this.state;
    await fetch(`/my_recipes_book/v1/subscriptions`,{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item),
        });
    
    }
render(){
    const {item}=this.state
    return(
        <Container id="main-div-search-page">
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

export default withRouter(Subscribe);
