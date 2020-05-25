import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';

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
.then(res=>{this.setState({recipes:res})}).catch(error=>{console.log(error)})
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


render(){
    const receList = employees.map(employee => {
        return <tr key={employee.id}>
          <td style={{whiteSpace: 'nowrap'}}>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.email}</td>
          <td>
            <ButtonGroup>
              <Button size="sm" color="primary" tag={Link} to={"/employee/" + employee.id}>Edit</Button>
              <Button size="sm" color="danger" onClick={() => this.remove(employee.id)}>Delete</Button>
            </ButtonGroup>
          </td>
        </tr>
      });
  
      return (
        <div>
          <AppNavbar/>
          <Container fluid>
            <div className="float-right">
              <Button color="success" tag={Link} to="/employee/new">Add Group</Button>
            </div>
            <h3>My Employees List</h3>
            <Table className="mt-4">
              <thead>
              <tr>
                <th width="20%">First Name</th>
                <th width="20%">Last Name</th>
                <th>Email</th>
                <th width="10%">Actions</th>
              </tr>
              </thead>
              <tbody>
              {employeeList}
              </tbody>
            </Table>
          </Container>
        </div>
      );
    }
  }
}

export default PersonalPage;


