import React, { PureComponent } from "react";
import FileResults from "./FileResults";
import Header from "./Header";
import CSVReader from 'react-csv-reader';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleForce = (data, fileInfo) => {
    console.log(data);
    console.log(fileInfo);
    this.setState({
      data: data,
      fileInfo: fileInfo,
    })
  }


  render() {
    return (
      <div>
        <Header />
        <CSVReader onFileLoaded={this.handleForce} />
        <FileResults data={this.state.data} />
      </div>
    );
  }
}
