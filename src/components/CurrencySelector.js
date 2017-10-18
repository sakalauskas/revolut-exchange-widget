import React, {Component} from 'react';
import PropTypes from "prop-types";
import angle from "./fa-angle-down.svg";
import "./CurrencySelector.css";

export default class CurrencySelector extends Component {

    onChange = (event) => {
        // sent out just the numbers
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div className="CurrencySelector">
                <select value={this.props.value} onChange={this.onChange}>
                    {this.props.currencies.map(c => {
                        return (
                            <option key={c} value={c}>{c}</option>
                        )
                    })}
                </select>
                <div className="arrow">
                    <img src={angle} />
                </div>
            </div>
        )
    }
}

CurrencySelector.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired,
    currencies: PropTypes.array.isRequired,
}