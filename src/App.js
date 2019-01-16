import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './table.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = [
      { id: 1, name: 'Frozen yoghurt',calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
      { id: 1, name: 'Ice cream sandwich',calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
      { id: 1, name: 'Eclair',calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
      { id: 1, name: 'Cupcake',calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
      { id: 1, name: 'Gingerbread',calories: 356, fat: 16.0, carbs: 49, protein: 3.9 }
    ];
    this.state.divStyle = {padding: "20px", width: "75%"};
  }

  render() {
    return (
      <div style={this.state.divStyle}>
        <h2>HTML Table</h2>
        <table>
          <tr>
          <th>Dessert</th>
          <th>Calories</th>
          <th>Fat</th>
          <th>Carbs</th>
          <th>Protein</th>
          </tr>
      
        {this.state.map(row => (
          <tr>
            <td>{row.name}</td>
            <td>{row.calories}</td>
            <td>{row.fat}</td>
            <td>{row.carbs}</td>
            <td>{row.protein}</td>
          </tr>
        ))}
        </table>
      </div>
    );
  }
}

export default App;
