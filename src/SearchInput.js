import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    //props are a way of passing data from parent to child
    //props are properties
    //Pass event handlers and other functions as props to child components: - https://reactjs.org/docs/faq-functions.html
    //the actual work is defined in App.js
    console.log('event in handleChange of SearchInput: '+event);
    console.log(event);
    //this.props.textChange(event);
    this.props.textChange(event.target.value);
    //all this does is take the onClick event input and pass it to App.js's handleSearchChange function
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} /> {/*onChange captures change of an element*/}
        </div>
      </div>
    );
  }
}
