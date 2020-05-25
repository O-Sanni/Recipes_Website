import React from "react";
import axios from 'axios';
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
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/food_search_info">Receipts Page</Button>
                        </FormGroup>
                </Form>
            </Container>  
            </Container>
        )
    }
}

export default withRouter(Subscribe);


// class EmployeeList extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {employees: [], isLoading: true};
//     this.remove = this.remove.bind(this);
//   }

//   componentDidMount() {
//     this.setState({isLoading: true});

//     fetch('niecey_api/v1/employees/')
//       .then(response => response.json())
//       .then(data => this.setState({employees: data, isLoading: false}));
//   }

//   async remove(id) {
//     await fetch(`/niecey_api/v1/employees/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }).then(() => {
//       let updatedEmployees = [...this.state.employees].filter(i => i.id !== id);
//       this.setState({employees: updatedEmployees});
//     });
//   }

//   render() {
//     const {employees, isLoading} = this.state;

//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     const employeeList = employees.map(employee => {
//       return <tr key={employee.id}>
//         <td style={{whiteSpace: 'nowrap'}}>{employee.firstName}</td>
//         <td>{employee.lastName}</td>
//         <td>{employee.email}</td>
//         <td>
//           <ButtonGroup>
//             <Button size="sm" color="primary" tag={Link} to={"/employee/" + employee.id}>Edit</Button>
//             <Button size="sm" color="danger" onClick={() => this.remove(employee.id)}>Delete</Button>
//           </ButtonGroup>
//         </td>
//       </tr>
//     });

//     return (
//       <div>
//         <AppNavbar/>
//         <Container fluid>
//           <div className="float-right">
//             <Button color="success" tag={Link} to="/employee/new">Add Group</Button>
//           </div>
//           <h3>My Employees List</h3>
//           <Table className="mt-4">
//             <thead>
//             <tr>
//               <th width="20%">First Name</th>
//               <th width="20%">Last Name</th>
//               <th>Email</th>
//               <th width="10%">Actions</th>
//             </tr>
//             </thead>
//             <tbody>
//             {employeeList}
//             </tbody>
//           </Table>
//         </Container>
//       </div>
//     );
//   }
// }

// export default EmployeeList;