import React, { Component } from 'react';
import './Body.css';
import FormCalc from '../FormCalc/FormCalc';
import History from '../History/History';
//import AddB from '../OneAdd/OneAdd';


class Body extends Component {
  constructor() {
    super();
  };


  render() {
    return (
      <div className="Body">
        <FormCalc />
        <History />
      </div>
    );
  }
}

export default Body;
