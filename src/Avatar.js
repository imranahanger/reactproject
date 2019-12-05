import React, { Component } from 'react';
import './Avatar.css'
import Avatarlist from './Avatarlist'
import 'tachyons'
class Avatar extends Component {
    constructor() {
        super();
        this.state = {
            name: "Welocme to the Avatar world"
        }
    }
    nameChange() {
        this.setState({
            name: "Subuscribed"
        })
    }
    render() {

        const avatarlistarray = [
            {
                id: 1,
                name: "Imran",
                profession: "Software developer"
            },
            {
                id: 2,
                name: "Aamer",
                profession: "Andriod developer"
            }, {
                id: 3,
                name: "Suhail",
                profession: "Software developer"
            }, {
                id: 4,
                name: "Aasif",
                profession: "Software developer"
            }
        ]
        const resultArray = avatarlistarray.map((avatar, i) => {
            return <Avatarlist key={i}
                id={avatarlistarray[i]['id']}
                name={avatarlistarray[i]['name']}
                profession={avatarlistarray[i]['profession']}
            />
        })
        return (
            <div className="mainpage">
                <h1>{this.state.name} </h1>
                {resultArray}
                <button onClick={() => this.nameChange()}>Subscribe</button>
            </div>
        )
    }
}

export default Avatar;  