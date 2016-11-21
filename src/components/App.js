import React, { Component } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import './App.css';



class App extends Component {
  render() {
    return (
      <div  className="App">
        <Header />
        <Body />
      </div>
    );
  }
}


/*class App extends React.PureComponent {

  static propTypes = {
    context: Component.shape(ContextType).isRequired,
    children: Component.element.isRequired,
  };

  static childContextTypes = ContextType;

  getChildContext() {
    return this.props.context;
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return React.Children.only(this.props.children);
  }

}
*/
export default App;
