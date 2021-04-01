import React from "react";
import Basic from '../Component/Basic'

const withGeneratedCode = (props) => (WrappedComponent) => {
  class WithGeneratedCode extends React.Component {
    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
          <Basic code ={props.code}/>
        </div>
      );
    }
  }
  return WithGeneratedCode;
};

export default withGeneratedCode;
