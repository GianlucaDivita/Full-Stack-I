import now from 'moment';
import React  from 'react';

export default class Timer extends React.Component {
    
    render() {
        return (
           
            <label>{now().format("hh:mm:ss").toString()}</label>
        );
    }
}

