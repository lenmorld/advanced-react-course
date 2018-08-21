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
    // return Promise.resolve(37);
    return new Promise(resolve => {

      // resolve function executed after delay, delay in ms, param passed through to the func
      setTimeout(resolve, 3000, 37);
    });
  };

  async componentDidMount() {
    // wrap this in try-catch to catch possible async errors
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  render() {
    return(
      <div>
        <h2>Hello Class Components {this.state.answer} </h2>
        <p>"42(init) ---> 37 (resolved promise)"</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
