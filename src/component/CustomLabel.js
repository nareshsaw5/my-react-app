import React from "react";
import  "./welcome.css"

export default class CustomLabel extends React.Component {

    render() {
        return(
        <div>{this.props.label}</div>
        )
    }

}