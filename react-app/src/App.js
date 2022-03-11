import React, { Component } from 'react';
import './App.css';
import { List } from './components/list.js';
import { Subject } from './components/subject.js';
import { Article } from './components/article.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: {
        isMain: true,
        isContent : false
      },
      subject:{
        title: 'WEB',
        sub: 'world wide web!!'
      },
      list:[
        { id : 1, title : 'HTML', desc: 'HTML is ...' },
        { id : 2, title : 'CSS', desc: 'CSS is ...' },
        { id : 3, title : 'REACT', desc: 'React.js is ...' }
      ],
    };
  };

  render(){
    var _title, _desc = null;
    if(this.state.mode.isMain){
      _title = 'Welcome!';
      _desc = 'welcome to my react';
    } else if(this.state.mode.isContent){
      _title = this.state.list[0].title;
      _desc = this.state.list[0].desc;
    };
    return (
      <div className='App'>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <List data={this.state.list}></List>
        <Article title={_title} desc={_desc}></Article>
      </div>
    );
  };
};

export default App;