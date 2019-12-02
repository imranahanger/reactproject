import React, { Component } from 'react';
import ReactDOM from 'react';
import './Demo.css';
class Demo extends Component {
    render() {
        return <div class="mainDiv_style">
            <h1>Hello {this.props.name}</h1>
            <p>test</p>
        </div>
    }
}

export default Demo