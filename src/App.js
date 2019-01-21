import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './table.css';
import DataTable from './common/dataTable';
import FilterInput from './common/filterInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edits: [],
      filteredEdits: [],
      headings: []
    };
  
    this.state.edits = [
      { id: 1, name: 'BaseTerminalYesNotTruckingState', description: 'Base terminal question is answered yes and the terminal state isnt part 1 state.' , active: 1 },
      { id: 2, name: 'BaseTerminalNoMajorityDrivingYes', description: 'Base terminal question is answered no and the majority driving question is answered yes.' , active: 1 },
      { id: 3, name: 'BaseTerminalNoMajorityDrivingNo', description: 'Base terminal question is answered no and the majority driving question is answered no.' , active: 1 },
      { id: 4, name: 'EmployeeTruckDriverCountNotEqual', description: 'The number of officers and employees with a truck class code doesnt equal the number of drivers.' , active: 1 },
      { id: 5, name: 'OfficersIncludedWrittenNoticeSoleProprietorPartnership', description: 'Officers that are included are required to provide a written notice' , active: 1 },
      { id: 6, name: 'NewHampshireOfficersExcludedWrittenNotice', description: 'Officers that are included are required to provide a written notice' , active: 1 },
      { id: 7, name: 'ExcludedCoverageLetter', description: 'Owners/Officers that are excluded are required to provide a signed exclusion form and exclusion of coverage letter' , active: 1 },
      { id: 8, name: 'OfficersExcludedApplicableFormsCorporationLLC', description: 'Owners/Officers that are included or excluded are required to provide the applicable form(s)' , active: 0 },
    ];
    this.state.headings = [
      'Name',
      'Description',
      'Active'
    ];
    this.state.filteredEdits = this.state.edits;
    this.state.divStyle = {padding: "20px", width: "75%"};
  }

  sortEdits = () => {
    console.log('sort edits');
  }

  modifyEdit = () => {
    console.log('modify edit');
  }

  filterEdits = (editFilter) => {
    let filteredEdits = this.state.edits
    filteredEdits = filteredEdits.filter((edit) => {
      let editName = edit.name.toLowerCase()
      return editName.indexOf(
        editFilter.toLowerCase()) !== -1
    })
    this.setState({
      filteredEdits
    })
  }

  render() {
    return (
      <div style={this.state.divStyle}>
        <FilterInput onChange={this.filterEdits} filterBy={'Name'}/>
        <DataTable
           headings={this.state.headings}   
           rows={this.state.filteredEdits} 
           onSortClick={() => this.sortEdits()}
           onEditClick={() => this.modifyEdit()}
        />
      </div>
    );
  }
}

export default App;
