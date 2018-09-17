import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }
  body {
    font: 20px sans-serif;
    background: #333;
    color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Widget = styled.div`
  text-align: center;
`;

const StyledCounter = styled.div`
  background: blueviolet;
  text-align: center;
  padding: 0.1em;
`;

const Button = styled.button`
  margin: 0.2em;
  padding: 1em;
  font-size: 120%;
  min-width: 3em;
  cursor: pointer;
`;

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };

  render() {
    return (
      <Widget>
        <h2>Counter</h2>
        <StyledCounter>
          <h1>{this.props.count}</h1>
          <Button onClick={this.decrement}>-</Button>
          <Button onClick={this.increment}>+</Button>
        </StyledCounter>
        <GlobalStyle />
      </Widget>
    );
  }
}

const mapStateToProps = state => ({ count: state.count });

export default connect(mapStateToProps)(Counter);
