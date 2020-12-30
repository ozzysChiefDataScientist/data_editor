import React, { PureComponent, useState} from "react";
import FileResults from "./FileResults";
import Header from "./Header";
import CSVReader from 'react-csv-reader';

const initial_state = {
  data: [[]],
  fileInfo: undefined,
  header: [],
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = initial_state;
  }

  handleForce = (data, fileInfo) => {

    let header = data[0];
    let data_body = data.slice(1,data.length);

    // convert data to json array
    let data_json = [];
    let row_index =0;
    for (row_index = 0; row_index < data_body.length; row_index++) {
      let col_index = 0;
      let row_json = {};
      for (col_index = 0; col_index < data_body[row_index].length; col_index++) {
        row_json[header[col_index]] = data_body[row_index][col_index];
      }
      data_json.push(row_json);
    }


    this.setState({
      header: header,
      data: data_json,
      fileInfo: fileInfo,
    })
  }

  handleButton = () => {

    let header = this.state.header.concat(['category']);

    let data = this.state.data;
    let index=0;
    for (index = 0; index < data.length; index++) {
      data[index] = data[index].concat([""]);
    }

    this.setState({
      data: data,
      fileInfo: this.state.fileInfo,
      header: header
    });
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <div><button onClick={this.handleButton}>Add Column</button></div>
        <CSVReader onFileLoaded={this.handleForce} />
        <FileResults data={this.state.data} header={this.state.header}/> {/*Props are passed to components via HTML attributes.*/}
      </div>
    );
  }
}
