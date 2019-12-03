import React from 'react';
import './Avatar.css'
import Avatarlist from './Avatarlist'
import 'tachyons'
const Avatar = (props) => {
    const avatarlistarray = [
        {
            id: 1,
            name: "Imran",
            profession: "Software developer"
        },
        {
            id: 2,
            name: "Aamer",
            profession: "Software developer"
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
        return <Avatarlist
            id={avatarlistarray[i]['id']}
            name={avatarlistarray[i]['name']}
            profession={avatarlistarray[i]['profession']}
        />
    })
    return (
        <div className="mainpage">
            <h1>Welcome to Avatar world </h1>
            {resultArray}
            <button>Subscribe</button>
        </div>
    )
}
export default Avatar;  