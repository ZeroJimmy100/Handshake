import React, {useState, useEffect, useContext} from 'react';
import io from 'socket.io-client';
import './Chat2Styles.css'
import {UserContext} from './UserContext';


export default function Chat2() {
    const [socket] = useState(() => io(':8000'));
    const [messages, setMessages] = useState([]);
    // const [myMess, setMyMess] = useState([]);
    const [input, setInput] = useState('');
    const getName = useContext(UserContext);
    
    
  useEffect(() => {
        socket.emit('user_login', getName.value);
        
        socket.on("send_data_to_all_other_clients", msg => {
            console.log("Client recieve ", messages)
            console.log("This is the current msg", msg)
            console.log("This is the value of input", input)     
            // messages.push(msg);
            // setMessages(messages);
            setMessages(prevMessages => {     
        //     //     console.log("This is the previous msg", prevMessages)    
        //         // prevMessage.push(msg); 
        //         // return prevMessage;    
        //         ////////////////////////////
        //         // messages.push(msg);
        //         // setMessages({
        //         //     ...messages,
        //         // })
                return [...prevMessages, msg];

        //         //messages.push(msg);
        //         // var a = [...msg, prevMessage]
        //         // console.log("This is a ", a);
            
        })
       
   });
}, [])


const onSubmitHandler = e => {
    e.preventDefault();
    //
    // myMess.push(input);
    // setMyMess(...myMess);
    // console.log(myMess);
    console.log(getName.value)
    socket.emit("event_from_client", {msg:input, user:getName.value});
    console.log("This is my message", messages)
    console.log("This is my input", input);
}
  
const onChangeHandler = e => {
    var val = e.target.value;
    console.log("this is the target", val)
    setInput(prevInput => {
        console.log("prevInput = ", prevInput);
        return val;
    });
    console.log("input = ", input);
}

    return (
        <div>
            {messages.map((msg, idx) => {
                return <p key={idx}>{msg.user} said: {msg.msg}</p>
            })}
            {/* <p>{messages}</p> */}
            {/* {JSON.stringify(messages)} */}
           <form onSubmit={onSubmitHandler}> 
                <textarea type="text" id="messages" rows="5" cols="80" onChange={onChangeHandler}/> 
                <button type="submit">Send</button> 
           </form>
        </div>
    )
}
