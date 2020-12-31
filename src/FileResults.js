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
    this.handleMenuChange = this.handleMenuChange.bind(this);
    this.state = {car: "volvo"};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleMenuChange(car) {
    this.setState({...this.state, 'car': car});
  }


  render() {
    console.log('state change in FileResults');
    console.log(this.state);

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
                    <TableCell text={dataRow[column['accessor']]} colName={column['Header']}
                    onDropdownChange={this.handleMenuChange} />
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
