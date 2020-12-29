import React, { PureComponent } from "react";
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
    console.log(data);
    console.log(fileInfo);
    console.log('header');
    console.log(data[0]);
    this.setState({
      header: data[0],
      data: data.slice(1,data.length),
      fileInfo: fileInfo,
    })
  }


  render() {
    return (
      <div>
        <Header />
        <CSVReader onFileLoaded={this.handleForce} />
        <FileResults data={this.state.data} header={this.state.header}/> {/*Props are passed to components via HTML attributes.*/}
      </div>
    );
  }
}
