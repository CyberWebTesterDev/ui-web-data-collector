import * as React from "react";
import Spinner from "./spinner";
import { connect } from "react-redux";
import { showSpinner, hideSpinner } from "../../actions/actions";

class SpinnerController extends React.Component {
  render() {
    const { loaders, isVisible } = this.props;
    return <Spinner loaders={loaders} />;
  }
}

const mapStateToProps = ({ loaders }) => {
  console.log(`Spinner loaders: `);
  console.log(loaders);
  return {
    loaders: loaders,
  };
};

const mapDispatchToProps = {
  showSpinner,
  hideSpinner,
};

export const SpinnerMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpinnerController);
