import React, {Component} from 'react';
import axios from 'axios';

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
                <h1>Hello There</h1>
            </div>
        )
    }
}

export default Players;