import React, {Component} from 'react';
import PropTypes from "prop-types";
import "./Panel.css";

export default class Panel extends Component {

    onChange = (event) => {
        // sent out just the numbers
        this.props.onChange(event.target.value.replace(/\D/g,''));
    }

    render() {
        return (
            <div className={`panel ${this.props.selected ? 'active-panel' : 'inactive-panel'}`}>
                <input onChange={this.onChange} placeholder="0" value={this.props.value} type="text" className="input" />
            </div>
        )
    }
}

Panel.propTypes = {
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    value: PropTypes.any.isRequired,
}