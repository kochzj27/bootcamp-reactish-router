import React, { Component } from 'react';
import Page from '../Page/Page';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        pathname: '/',
      },
      text: [
        'A high-level, dynamic, untyped, and interpreted programming language.',
        'A standardized, general-purpose, purely functional programming language, with non-strict semantics and strong static typing.',
        'Coffeescript is a programming language that transcompiles into JavaScript so we will be redirecting back to Javascript in'
      ]
    }
  }

  componentDidMount() {
    let path = window.location.pathname;
    this.setState({
      location: {
        pathname: path,
      }
    });
  }

  render() {
    return (
      <div className="container">
        <ul>
          <li><a href='/javascript'>Javascript</a></li>
          <li><a href='/haskell'>Haskell</a></li>
          <li><a href='/coffeescript'>CoffeeScript</a></li>
        </ul>
        <hr />
        {this.state.location.pathname === '/javascript' ? <Page text={this.state.text[0]} /> : null}
        {this.state.location.pathname === '/haskell' ? <Page text={this.state.text[1]} /> : null}
        {this.state.location.pathname === '/coffeescript' ? <Page text={this.state.text[2]} /> : null}
      </div>
    );
  }
}

export default Container;
