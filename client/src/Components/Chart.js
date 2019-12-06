import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

const Chart = ({players}) => {
    const data = players;

    return (
        <LineChart width = {1920} height = {300} data = {data} margin = {{top: 5, right: 30, left: 20, bottom: 5}}>
            <Line type = "monotone" dataKey = "searches" activeDot = {{r: 4}}/>
            <CartesianGrid strokeDasharray = "3 3"/>
            <XAxis dataKey = "name" className = "rotate" tick = {{angle: 45}}/>
            <YAxis dataKey = "searches" />
            <Tooltip />
        </LineChart>
    )
}

export default Chart;