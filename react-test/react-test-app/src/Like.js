import React from "react";

class Like extends React.Component {
    state = { 
        count: 0
     } 

     likeCounter = () => {
        let likeCount = this.state.count + 1
        this.setState({
          count: likeCount
        })
      }


    render() { 
        return <>
        <button onClick={this.likeCounter} class='liker'> Like </button> 
        <label>{this.state.count}</label>
        </>;
    }
}
 
export default Like;