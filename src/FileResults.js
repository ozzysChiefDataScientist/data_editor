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
      <table class="table">
        <thead>
        <tr>
           {
                this.props.data[0].map(headerTitle =>(
                   <td>
                    {
                      headerTitle
                    }
                   </td>
                ))
           }
           </tr>
        </thead>
        {
          this.props.data.slice(1, this.props.data.length).map(dataRow => (
            <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            </tr>
          ))
        }
      </table>
      </div>
    );
  }
}
