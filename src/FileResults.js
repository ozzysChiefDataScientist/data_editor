import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class FileResults extends PureComponent {
  static propTypes = {
    data: PropTypes.array
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        {this.props.data}
      </div>
    );
  }
}
