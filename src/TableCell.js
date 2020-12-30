import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";

export default class TableCell extends PureComponent {
  static propTypes = {
    text: PropTypes.string
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render() {
    return (
      <div>
      {
        this.props.text
      }
      </div>
    );
  }
}
