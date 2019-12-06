import React from 'react';

const PlayerCard = (props) => {
    console.log(props)
    return(
        <div>
            {props.players.map(player => (
                <div key = {player.id}>
                    <h2>{player.name}</h2>
                    <h4>{player.country}</h4>
                    <h4>Searches: {player.searches}</h4>
                </div>
            ))}
        </div>
    )
}

export default PlayerCard;

//props players structure: 
//country: a;sdfijea
//id: num
//name: ";asijdf fj;aoije;"
//searches: num