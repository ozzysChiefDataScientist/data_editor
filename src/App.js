import React, { PureComponent, useState} from "react";
import FileResults from "./FileResults";
import Header from "./Header";
import CSVReader from 'react-csv-reader';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [[]],
      fileInfo: undefined,
      header: [],
    };
  }

  handleForce = (data, fileInfo) => {
    this.setState({
      header: data[0],
      data: data.slice(1,data.length),
      fileInfo: fileInfo,
    })
  }

  handleButton = () => {

    this.setState({
      data: [[]],
      fileInfo: undefined,
      header: [],
    })

    // let original_header = this.state.header;
    // let original_data = this.state.data;
    //
    // let index=0;
    // for (index = 0; index < original_data.length; index++) {
    //   original_data[index].push("");
    // }
    // original_header.push('Category');
    //
    // //not erroring out but not re-rendering table
    // this.setState({
    //   header: original_header,
    //   data: original_data,
    //   fileInfo: this.state.fileInfo,
    // })

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
