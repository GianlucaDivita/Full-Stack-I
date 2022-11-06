import axios from "axios";
import React from "react";



class AddStudent extends React.Component {
    
    // target the state with this.state

    handleChange = event => {
        this.setState({name:event.target.value})
    };
    handleSumbit = event => {
        this.setState({id: this.state.id+1})
        axios.post(`https://jsonplaceholder.typicode.com/users`).then(console.log(this.state))
    };

    state = { 
        name: "",
        id: 10
     } 


    render() { 
        return (
            <div>
            
            <label>
            Person Name: 
            <input type="text" name='name' onChange={this.handleChange}  />
            </label>
            <button type ='submit' onClick={this.handleSumbit}> Add</button>
            
            </div>
        );
    }
}
 
export default AddStudent;