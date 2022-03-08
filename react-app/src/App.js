import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render(){
    return (
      <header className='App-header'>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  };
};

class List extends Component {
  render(){
    return(
      <nav className='App-nav'>
        <ul>
          <li><a className='App-link' href='1.html'>HTML</a></li>
          <li><a className='App-link' href='2.html'>CSS</a></li>
          <li><a className='App-link' href='3.html'>REACT</a></li>
        </ul>
      </nav>
    );
  };
};

class Article extends Component {
  render(){
    return (
      <footer className='App-footer'>

      </footer>
    )
  }
}

class App extends Component {
  render(){
    return (
      <div className='App'>
        <Subject title='WEB' sub='world wide web!!'></Subject>
        <List></List>
        <Article></Article>
      </div>
    );
  };
};

export default App;