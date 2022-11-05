import React, {useState} from 'react'
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FinalDestination from "./final-destination";
import Battlefield from "./battlefield";

export default function Information() {
    //TODO: Make these display inline
    return(
        <div>
            <Battlefield/>
            <FinalDestination/>
        </div>
    );
}