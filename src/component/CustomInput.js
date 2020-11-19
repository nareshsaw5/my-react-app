import React from "react";
import  "./welcome.css"

export default class CustomInput extends React.Component {

    render() {
        return(
        <div><input onChange={ (v) => this.props.onchange(v)}/></div>
        )
    }

}