import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import {Scatter } from 'react-chartjs-2';
const App = () => {
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        const eventHandler = response => {
            setGraphData(response.data)
        };
        const promise = axios.get('http://localhost:3001/');
        promise.then(eventHandler)
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <Scatter data={{
                        datasets: [{
                            label: 'Algorithmic Complexity',
                            borderColor: "#6610f2",
                            data: graphData
                        }]
                    }}/>
                </div>
            </header>
        </div>
    );
};

export default App;
