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
    this.setState({
      header: data[0],
      data: data.slice(1,data.length),
      fileInfo: fileInfo,
    })
  }

  handleButton = () => {

    let header = this.state.header.concat(['category']);

    // let data = this.state.data;
    // let index=0;
    // for (index = 0; index < data.length; index++) {
    //   data[index].push("");
    // }

    this.setState({
      data: this.state.data,
      fileInfo: this.state.fileInfo,
      header: header
    });

    // this.setState({
    //   data: data,
    //   fileInfo: undefined,
    //   header: header,
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
