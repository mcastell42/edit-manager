import React, { Component } from 'react';
import './table.css';

export default class DataTable extends React.Component {

  renderHeading = (headings) => {
    const headingHtml = headings.map((heading) =>
        <div className='cell' key={heading} onClick={this.props.onSortClick}>{heading}</div>
    );
    return (
        <div className='heading'>{headingHtml}</div>
    )
  };

  renderRow = (row) => {
    const rowHtml = Object.keys(row).filter(key => key !== 'id').map((key) =>
        <div className='cell' key={row.id} onClick={this.props.onEditClick}>{row[key]}</div>
    );
    return (
    <div className='row' key={'row-' + row.id}>
        {rowHtml}
    </div>
    )
  };

  render() {
    const {headings, rows} = this.props;

    this.renderHeading = this.renderHeading.bind(this);
    this.renderRow = this.renderRow.bind(this);

    const rowHtml = rows.map(row => this.renderRow(row));

    return (
        <div className='table'>
            {this.renderHeading(headings)}
            {rowHtml}
        </div>
    )
  }
}