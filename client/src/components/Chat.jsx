import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';

export default function Chat() {
    const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    console.log('Hello, your app is running');
    socket.on('Welcome', data => console.log(data));
    
    return () => socket.disconnect(true);
  }, [])
  
    return (
        <div>
            <h1>Socket Test</h1>
        </div>
    )
}
