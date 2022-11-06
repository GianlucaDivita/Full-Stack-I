import axios from "axios";
import React from "react";



class DeleteStudent extends React.Component {
    constructor(props) {
        super(props)
    }
    
    // target the state with this.state

    handleChange = event => {
        this.setState({id:event.target.value})
    };
    handleSumbit = event => {
        this.setState({id: this.state.id+1})
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`).then(res=>{
            console.log(res)
            console.log(res.data)
        })
    };

    state = { 
        id: this.props.id
     } 


    render() { 
        return (
            <div>
            
            <button type ='submit' onClick={this.handleSumbit}>Delete</button>
            
            </div>
        );
    }
}
 
export default DeleteStudent;