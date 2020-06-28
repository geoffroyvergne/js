import React, { Component }  from 'react';
import DebugService from '../service/DebugService';

const debugService = new DebugService();

class DebugComponent extends Component {

  state = {
    index: {}
  }

  getIndex() {
    debugService.getIndex().then((data) => {
      console.log(data);
      this.setState({ index: data });
    });
  }

  componentDidMount() {
    this.getIndex();
  }
  
  render() {
    const { index } = this.state;

    return (
      <div>
        <h1>Debug Component</h1>
        <pre>{JSON.stringify(index)}</pre>
      </div>
    )
  }
}

export default DebugComponent; 