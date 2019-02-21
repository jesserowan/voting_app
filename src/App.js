import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            votes: 0
        }
    }
    vote = () => {
        this.setState({votes: this.state.votes + 1});
        alert(`You voted for ${this.props.name}`);
    }
    render () {
        return (
            <div className="item">
                <div className="item-content">
                    <h2 className="count">{this.state.votes}</h2>
                    <h2 className="name">{this.props.name}</h2>
                    <a className="vote-button" onClick={this.vote}>Vote!</a>
                </div>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>Vote for your favorite JS Library!</h1>
                </div>
                <div className="item-list">
                    <Item name="React"/>
                    <Item name="Vue"/>
                    <Item name="Angular"/>
                    <Item name="Ember"/>
                </div>
            </div>
        )
    }
}


export default App;
