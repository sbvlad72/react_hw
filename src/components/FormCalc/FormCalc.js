import React, { Component } from 'react';
import './FormCalc.css';
import OneAdd from '../OneAdd/OneAdd';
//import AddB from '../OneAdd/OneAdd';


class FormCalc extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  };

  onSubmit(event) {
    event.preventDefault();
    document.getElementById('addRes').value = (+document.getElementById('addA').value || 0) + (+document.getElementById('addB').value || 0);
    //добавить строку в элемент History
    this.props.updateHistory(document.getElementById('addA').value + ' + ' + document.getElementById('addB').value + ' = ' + document.getElementById('addRes').value);
  };


  render() {
    return (
        <form className="FormCalc" onSubmit={this.onSubmit}>
            <div>
              Введите слагаемые и нажмите кнопку [=] для получения результата
            </div>
          <OneAdd name="addA" />
          <span> + </span>
          <OneAdd name="addB" />
            {/*<input type="text" name="addA" value={this.state.addA} size="5" onChange={this.onChangeA}/>
            <input name="addA" type="number" onChange={this.onChangeB} value={this.state.addB} />*/}

            &nbsp;
            <input type='submit' value="="/>

            &nbsp;
            <input readOnly id="addRes" />
          </form>

    );
  }
}

export default FormCalc;
