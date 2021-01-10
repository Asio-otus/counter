import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Counter} from "./components/Counter/Counter";
import {CounterSet} from "./components/CounterSet/CounterSet";

function App() {
    return (
        <div className={'app'}>
            <Counter/>
            <CounterSet/>
        </div>
    );
}

export default App;
