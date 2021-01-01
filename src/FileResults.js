import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import ReactTable from "react-table";
import TableCell from "./TableCell";

export default class FileResults extends PureComponent {
  static propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

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
                    <TableCell id={dataRow['index']}
                    text={dataRow[column['accessor']]}
                    colname={column['Header']}
                    updateData ={this.props.updateData}/>
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
