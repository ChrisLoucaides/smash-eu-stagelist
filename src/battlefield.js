import React, {useState} from 'react'
import './App.css';

export default function Battlefield() {
    const [active, setActive] = useState(false);

    return (
        <div className={"container"}>
            <img className={'stage-button'} src={require('./img/battlefield.png')} alt={"fd"}
                 onClick={() => handleClick()}
                 style={{filter: active ? "brightness(15%)" : "brightness(100%)"}}

            />
        </div>
    )

    function handleClick(stage) {
        setActive(!active)
    }

}