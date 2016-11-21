import React, { Component } from 'react';
//import './OneAdd.css';

const inputStyle = {
  width: "6em",
};

class OneAdd extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
    };
    this.onChange = this.onChange.bind(this)
  }

  getValue = function() {
    return this.state.value;
  };

  onChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    return (
      <input style={inputStyle}
            name={this.props.name}
            type="number"
            onChange={this.onChange}
            value={this.state.value}
            placeholder="123456"
      />
    );
  }
}

export default OneAdd;
