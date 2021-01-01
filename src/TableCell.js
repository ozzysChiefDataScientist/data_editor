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
                  categories: ['Groceries/Essentials', 'Rent', 'Utilities']};
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
      {
           this.state.categories.map(category =>(
              <option value={category}>{category}</option>
            ))
      }
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
