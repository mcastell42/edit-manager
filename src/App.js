import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './table.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = [
      { id: 1, name: 'BaseTerminalYesNotTruckingState', description: 'Base terminal question is answered yes and the terminal state isnt part 1 state.' , active: 1 },
      { id: 2, name: 'BaseTerminalNoMajorityDrivingYes', description: 'Base terminal question is answered no and the majority driving question is answered yes.' , active: 1 },
      { id: 3, name: 'BaseTerminalNoMajorityDrivingNo', description: 'Base terminal question is answered no and the majority driving question is answered no.' , active: 1 },
      { id: 4, name: 'EmployeeTruckDriverCountNotEqual', description: 'The number of officers and employees with a truck class code doesnt equal the number of drivers.' , active: 1 },
      { id: 5, name: 'OfficersIncludedWrittenNoticeSoleProprietorPartnership', description: 'Officers that are included are required to provide a written notice' , active: 1 },
      { id: 6, name: 'NewHampshireOfficersExcludedWrittenNotice', description: 'Officers that are included are required to provide a written notice' , active: 1 },
      { id: 7, name: 'ExcludedCoverageLetter', description: 'Owners/Officers that are excluded are required to provide a signed exclusion form and exclusion of coverage letter' , active: 1 },
      { id: 8, name: 'OfficersExcludedApplicableFormsCorporationLLC', description: 'Owners/Officers that are included or excluded are required to provide the applicable form(s)' , active: 0 },
    ];
    this.state.divStyle = {padding: "20px", width: "75%"};
  }

  translateActiveFlag(active) {
    return active ? 'Yes' : 'No';
  }

  render() {
    return (
      <div style={this.state.divStyle}>
        <h2>HTML Table</h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Active</th>
          </tr>
      
        {this.state.map(row => (
          <tr>
            <td>{row.name}</td>
            <td>{row.description}</td>
            <td>{this.translateActiveFlag(row.active)}</td>
          </tr>
        ))}
        </table>
      </div>
    );
  }
}

export default App;
