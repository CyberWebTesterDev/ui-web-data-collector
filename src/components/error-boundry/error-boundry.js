import React from "react";

class ErrorBoundry extends React.PureComponent {
  state = {
    hasError: false,
    error: "",
    errorInfo: "",
  };
  componentDidCatch(error, errorInfo) {
      console.log(`componentDidCatch: error has been caught`);
      console.log(error);
      console.log(errorInfo)
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
      const { error, errorInfo, hasError } = this.state
    return hasError ?
        (<div><br/><br/>
           <span style={{fontSize: '25px'}}>Произошла ошибка: </span><h2 style={{color: 'red'}}>{error.message}</h2>
            <br/>
            <h3 style={{color: 'red'}}>{error.stack}</h3>
           <h5 style={{color: 'red'}}>{errorInfo.componentStack}</h5>
        </div>)
 : (
      this.props.children
    );
  }
}

export { ErrorBoundry };
