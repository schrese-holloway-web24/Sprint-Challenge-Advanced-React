import React, {Component} from 'react';
import axios from 'axios';

//components
import PlayerCard from './PlayerCard';

class Players extends Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(res => {
                console.log(res)
                this.setState({
                    players: res.data
                })
            })
            .catch(err => console.log('error in cDM axios call', err))
    }

    render() {
        return(
            <div>
                <h1>Players And Their Searches</h1>
                <PlayerCard players = {this.state.players} />
            </div>
        )
    }
}

export default Players;