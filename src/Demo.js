import React, { Component } from 'react';
import ReactDOM from 'react';
import './Demo.css';
const Demo =(props)=>{
        return <div className="mainDiv_style">
            <h1>Hello {props.name}</h1>
            <p>test</p>
        </div>
}
// class Demo extends Component {
//     render() {
//         return <div className="mainDiv_style">
//             <h1>Hello {this.props.name}</h1>
//             <p>test</p>
//         </div>
//     }
// }

export default Demo