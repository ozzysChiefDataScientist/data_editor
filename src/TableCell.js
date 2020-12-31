import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";

export default class TableCell extends PureComponent {
  static propTypes = {
    text: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {isLoggedIn: false,
                  car: 'volvo'};
}

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleChange(e) {
    this.props.onDropdownChange(e.target.value);
  }


  render() {

    const isEmpty = (this.props.text == '') ? true : false;
    let div_component;
    if (isEmpty) {
      div_component = (
      <div>
      <select name='car' onChange={this.handleChange} value={this.state.value}>
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
