import React, {useState} from 'react'
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FinalDestination() {
    const [active, setActive] = useState(false);

    return (

        <div className={"container"}>
            <img className={'stage-button'} src={require('./img/final-destination.png')} alt={"fd"}
                 onClick={() => handleClick()}
                 style={{filter: active ? "brightness(15%)" : "brightness(100%)"}}

            />
        </div>
    )


    function handleClick(stage) {
        setActive(!active)
    }

}