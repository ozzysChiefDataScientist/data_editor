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

  handleMenuChange(car, id) {
    let data = this.props.data;
    let row_index =0;
    for (row_index = 0; row_index < data.length; row_index++) {
      if (data[row_index]['index'] == id) {
        data[row_index]['category'] = car;
      }
    }

    console.log('updated data in handleMenuChange');
    console.log(data);

    this.setState({...this.state, 'car': car});
  }


  render() {

    console.log('props in fileResults');
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
                    <TableCell id={dataRow['index']} text={dataRow[column['accessor']]} colName={column['Header']}
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
