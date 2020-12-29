import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";

export default class FileResults extends PureComponent {
  static propTypes = {
    header: PropTypes.array,
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
              this.props.header.map(headerTitle =>(
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
            {
              dataRow.map(dataElement=> (
                <td>
                {dataElement}
                </td>
              ))
            }
            </tr>
          ))
        }
      </table>
      </div>
    );
  }
}
