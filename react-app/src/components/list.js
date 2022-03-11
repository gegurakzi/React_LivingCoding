import React, { Component } from 'react';


class List extends Component {

  render(){
    var lists = [];
    var data = this.props.data;
    for(var i = 0; i < data.length; i++){
      lists.push(<li key={data[i].id}><a className='App-link' href={data[i].id + '.html'}>{data[i].title}</a></li>);
    };
    return(
      <nav className='App-nav'>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  };
};

export { List };