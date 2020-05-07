import React, {useState, useContext} from 'react'
import { navigate } from '@reach/router';
import {UserContext} from './UserContext';

export default function User() {
const getName = useContext(UserContext);

const addUser = (e) => {
    
    e.preventDefault();
    console.log(getName.setValue);
    navigate('/chatroom');

}
    return (
        <div>
            <h1>Hello, type your username</h1>
            <form onSubmit={addUser}>
            <input type="text" onChange={e=> getName.setValue(e.target.value)}/>
            <button type="submit">submit</button> 
            </form>
        </div>
    )
}
