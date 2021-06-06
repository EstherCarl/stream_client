import React from 'react'
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './chat.css'
const Viewers = () => {
    let numViewers = 9846
    return (
        <div>
            {/* <Card border="light" className="chatCard">
                <Card.Header></Card.Header> 
                <Card.Body>
                    <Card.Text>
                      Viewers
      </Card.Text>
                </Card.Body>
            </Card> */}


            {/* <div >
                <Card border="light" style={{ width: '19rem' }}>

                    <Card.Body
                        style={{ color: '#D10010' }}> Viewers <span style={{ color: '#333333', marginLeft: "30px" }}>{numViewers}</span>
                        <div className="linear" > </div>
                        <img src=' mand-holding-cup@2x'></img>
                    </Card.Body>
                </Card >

            </div> */}
        </div>
    )
}

export default Viewers;