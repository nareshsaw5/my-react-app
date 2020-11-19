import React from "react";
import  "./welcome.css"
import CustomLabel from "./CustomLabel"
import CustomInput from "./CustomInput"
import CustomButton from "./CustomButton";

export default class Welcome extends React.Component {
  state = {
    counter: 0,
    label: "default",
    textValue:""
  };

  render() {

    const { counter } = this.state;

    const increment = () => {
      if(counter < 100){
        this.setState({
          counter: counter + 1,
        });
      }
    };

    const decrement = () => {
      if(counter > 0){
        this.setState( {
          counter: counter - 1
        })
      }
    }

    const onChange = (v) => {
          console.log(v.target.value);
          this.setState({
            textValue: v.target.value
          })
    }

    const onClickButton = (v) => {
      this.setState({
        label: this.state.textValue
      })
}

    return( 
      <div>
         <div>{this.props.name}</div>
        <div className="parent">
          <CustomLabel label ={this.state.label} />
          <CustomInput onchange ={ (v) => onChange(v)} />
          <CustomButton onclick = { () => onClickButton()} />
          <br/>
            <div><button onClick  ={ () => increment() }>+</button></div>
            <div> {counter} </div>
            <div><button onClick={ () => decrement() }>-</button></div>
          
        </div>
      </div>
   );
  }
}
