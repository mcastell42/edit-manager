
import React, { Component } from 'react'

class FilterInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      propertyFilter: ""
    }
  }
  
  handleChange = (e) => {
    this.setState({
      propertyFilter: e.target.value
    })
    this.props.onChange(e.target.value)
  }
  
  render() {
    return (
      <div>
        <label htmlFor="filter">{'Filter by ' + this.props.filterBy + ': '}</label>
        <input type="text" id="filter" 
          value={this.state.propertyFilter} 
          onChange={this.handleChange}/>
      </div>
      )
  }
}

export default FilterInput