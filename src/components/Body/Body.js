import React, { Component } from 'react';
import './Body.css';
import OneAdd from '../OneAdd/OneAdd';
//import AddB from '../OneAdd/OneAdd';

var addA = new OneAdd();
var addB = new OneAdd();

class Body extends Component {
  constructor() {
    super();
    //this.addA = new OneAdd();
    //this.addB = new OneAdd();
    //this.state = {
    //  addA: 1,
    //  addB: 1,
    //  addRes: '',
    //};
    this.onSubmit = this.onSubmit.bind(this);
    //this.onChangeA = this.onChangeA.bind(this);
    //this.onChangeB = this.onChangeB.bind(this);
    //this.onChangeRes = this.onChangeRes.bind(this);
    //value={this.state.addRes}
  };

  onSubmit(event) {
    event.preventDefault();
    //this.state.addRes = (+AddA.value || 0) + (+AddB.value || 0);
    document.getElementById('addRes').value = (+addA.getValue() || 0) + (+addB.getValue() || 0);
    //alert(`${this.props.title}: ${this.state.addA} + ${this.state.addB} = ${this.state.addRes}`);
  };


  render() {
    return (
      <div className="Body">
        <form className="Forma" onSubmit={this.onSubmit}>
            <div>
              Введите слагаемые и нажмите кнопку = для получения результата
            </div>
          <addA />
          <span> + </span>
          <addB />
            {/*<input type="text" name="addA" value={this.state.addA} size="5" onChange={this.onChangeA}/>
            <input name="addA" type="number" onChange={this.onChangeB} value={this.state.addB} />*/}

            &nbsp;
            <input type='submit' value="="/>

            &nbsp;
            <input readOnly id="addRes" />
          </form>

        </div>
    );
  }
}

export default Body;
