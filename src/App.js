import React, {Component} from 'react';
import './App.css';
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";
import ConnectedLiveRate from "./components/ConnectedLiveRate";
import Button from "./components/Button";
import InputCurrencySelector from "./components/InputCurrencySelector";
import OutputCurrencySelector from "./components/OutputCurrencySelector";

class App extends Component {
    render() {
        return (
            <div className="App">
                <InputCurrencySelector />
                <InputPanel />

                <ConnectedLiveRate />

                <OutputCurrencySelector />
                <OutputPanel />

                <div className="text-center sticky-button">
                    <Button onClick={() => alert('You got the money!')}>Exchange</Button>
                </div>
            </div>
        );
    }
}

export default App;
