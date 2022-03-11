import React, { Component } from 'react';

class Article extends Component {
    render(){
        return (
        <article className='App-article'>
            <h4>{this.props.title}</h4>
            <p>{this.props.desc}</p>
        </article>
        );
    };
};

export { Article };