import React, { Component } from 'react';
import './style.css';

export const PlayerCardA = (props) => 
        <div className="playerCard">
            <h3>{props.player.name}</h3>
            <p>from: {props.player.club}</p>
            <p>age: {props.player.age} </p>
            <p>value: {props.player.value} </p>
        </div>;


export class PlayerCardB extends Component {
    constructor(){
        super();
    }

    render(){
        return (
        <div className="playerCard">
            <h3>{this.props.player.name}</h3>
            <p>from: {this.props.player.club}</p>
            <p>age: {this.props.player.age} </p>
            <p>value: €{this.props.player.value}M </p>
        </div>);
    }
}
