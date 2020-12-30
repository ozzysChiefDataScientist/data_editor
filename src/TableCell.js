import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";

export default class TableCell extends PureComponent {
  static propTypes = {
    text: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
}

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render() {

    const isEmpty = (this.props.text == '') ? true : false;
    let div_component;
    if (isEmpty) {
      div_component = <div>Empty</div>;
    } else {
      div_component = <div>{this.props.text}</div>;
    }


    return (
      <div>
       {div_component}
      </div>
    );
  }
}