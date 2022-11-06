import { redirect } from "react-router";
import React from "react";


const handleRedirectClick = (props) => {
    const {history} = props;
    if (history) history.push("/");
    else console.log(`history not found in props`);
};

const Redirecter = () => {
    return (
  
<button onClick={handleRedirectClick}>Redirect</button>

    );
  };

export default Redirecter;



