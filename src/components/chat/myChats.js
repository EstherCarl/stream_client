import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './chat.css'

const myChats = () => {
    return (
        <div className="chatBox">
            <Card border="light" style={{ width: '19rem' }}>

                <Card.Body style={{ color: '#D10010' }}> My Chats
                 <div className="linear" > </div>


        </Card.Body>
            </Card >
        </div>

    )
}

export default myChats;
