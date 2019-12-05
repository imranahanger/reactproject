import React from 'react';

const Avatarlist = (props) => {
    return (
        <div className="avatarstyle ma4 bg-light-pink dib pa4  grow tc" >
            <img src={` https://joeschmoe.io/api/v1/jon ${props.name}`} alt="Avatar" />
            <h1>{props.name}</h1>
            <p>{props.profession}</p>
        </div>
    )
}
export default Avatarlist;  