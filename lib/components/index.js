import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // class properties: part of stage-2
  state = {
    answer: 42,
  };

  // function class props part of stage-2
  someFunc = () => {

  };

  // new feature
  asyncFunc = () => {
    return Promise.resolve(37);
  };

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  render() {
    return(
      <h2>Hello Class Components {this.state.answer} </h2>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
