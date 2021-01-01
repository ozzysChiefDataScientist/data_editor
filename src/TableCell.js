import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";

export default class TableCell extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    id: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false,
                  car: 'volvo'};
}

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render() {
    const isEmpty = (this.props.text == '') ? true : false;
    let div_component;
    if (isEmpty) {
      div_component = (
      <div>
      <select row_id={this.props.id} colname={this.props.colname} onChange={this.props.updateData} value={this.state.value}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      </div>);
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
