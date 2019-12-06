import React, {Component} from 'react';
import axios from 'axios';

//components
import PlayerCard from './PlayerCard';
import Chart from './Chart';

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
                // console.log(res)
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
                <Chart players = {this.state.players} />
                <PlayerCard players = {this.state.players} className = 'players'/>
            </div>
        )
    }
}

export default Players;