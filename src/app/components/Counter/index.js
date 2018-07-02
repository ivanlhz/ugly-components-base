import React, {Component} from 'react';
import './style.scss';

class Counter extends Component {
  state = {
    num: 0
  };

  render = () => (
      <div>
        <h2>Counter {this.state.num}</h2>
        <button
          onClick={() =>
            this.setState({
              num: this.state.num + 1
            })
          }
        >
          Increment
        </button>
      </div>
    );
  }

export default Counter;
