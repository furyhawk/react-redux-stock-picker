import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import BootstrapTable from 'reactjs-bootstrap-table';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row show-border">
          <div className="col">
            <BootstrapTable columns={0} data={0} headers={true}>
              <div className="well">There are no items to show</div>
            </BootstrapTable>
          </div>
          <div className="col">
            <div className="row show-border">
              <div className="col">
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={50}
                  orientation={"horizontal"}
                />        
              </div>
            </div>
            <div className="row show-border">
              <div className="col">
                <BootstrapTable columns={0} data={0} headers={true}>
                  <div className="well">There are no items to show</div>
                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
