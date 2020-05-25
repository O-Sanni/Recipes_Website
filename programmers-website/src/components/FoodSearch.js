import React from "react";
import axios from "axios";


class FoodSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            foodLists:[],
        }
    }


    async getFood(){
        try{
           let food=await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=hhpzNh59Ux9s4nYCk6f5cdjX9fB7tqjgm2nqzgDL&query=${this.props.title}&commonNames=${this.props.title}`)
           this.setState({foodLists: food.data});
           console.log(this.state.foodLists)
        }

        catch(error){
           console.log(error);
        }
    }


    // async getFood(){
    //     try{
    //        let food=await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=hhpzNh59Ux9s4nYCk6f5cdjX9fB7tqjgm2nqzgDL&query=${this.props.title}&commonNames=${this.props.title}`)
    //        this.setState({foodLists: food.data});
    //        console.log(this.state.foodLists)
    //     }

    //     catch(error){
    //        console.log(error);
    //     }
    // }

    componentDidMount(){
        this.getFood();

    }       
        
// the following function will check if this.state.jobList is not undefined .map will called to print out information for each job listing
//     checkIfExist(){
//         if(this.state.jobsList===undefined){}
//         else{
//             let jobs=this.state.jobsList.map((res,index)=> {
//             let create=new Date(res.created)
//             let dateCreated=create.getUTCMonth() + "/" +create.getUTCDay() + "/" +create.getUTCFullYear() + " at " + create.getUTCHours() + ":" + create.getUTCMinutes();//output date and time for each job listing
//             return (
//                     <div className="job-search-output-div-class">
//                         <h2 className="job-search-output-class-h2">Title: {removemd(res.title)}</h2> 
//                         <p className="job-search-output-class-p"><span class="span-job-map">Category: </span>{res.category.label}</p>
//                         <p className="job-search-output-class-p"><span class="span-job-map">Company Name: </span>{res.company.display_name}</p>
//                         <p className="job-search-output-class-p"><span class="span-job-map">Contract time: </span>{res.contract_time}</p>
//                         <p className="job-search-output-class-p"><span class="span-job-map">Description: </span>{removemd(res.description)}</p>
//                         <a className="job-search-output-class-a" href={res.redirect_url}>&#x1F517;Aditional information </a>
//                         <p className="job-search-output-class-p"><span class="span-job-map">Created on: </span>{dateCreated}</p>
//                         <MapSearch lat={res.latitude} lng={res.longitude}/>
//                     </div>)
//             })
//             return jobs;
//             }
//     }

    render(){   
        return(
            <div id="main-div-job-search-results">
                {/* { this.checkIfExist()} */}
            </div>
        )
    }
}

export default FoodSearch;
