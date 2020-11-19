import React from "react";
import  "./welcome.css"

export default class CustomButton extends React.Component {

    render() {
        return(
        <div><button onClick={ (v) => this.props.onclick(v)}>Submit</button></div>
        )
    }

}