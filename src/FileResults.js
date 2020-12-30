import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import ReactTable from "react-table";

export default class FileResults extends PureComponent {
  static propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render() {
    console.log('props passed to FileResults');
    console.log(this.props);
    return (
      <div>
      <table class="table">
      <thead>
      <tr>
         {
              this.props.columns.map(headerTitle =>(
                 <td>
                  {
                    headerTitle['Header']
                  }
                 </td>
              ))
         }
         </tr>
      </thead>
      {
           this.props.data.map(dataRow =>(
             <tr>
             {
                  this.props.columns.map(column =>(
                    <td>
                    {
                      dataRow[column['accessor']]
                    }
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

// {
//   this.props.data.map(dataRow => (
//     <tr>
//     {
//       dataRow.map(dataElement=> (
//         <td>
//         {dataElement}
//         </td>
//       ))
//     }
//     </tr>
//   ))
// }
