import React, {Component} from 'react';
import PropTypes from "prop-types";
import "./LiveRate.css";
import repeat from "./repeat.svg"
export default class LiveRate extends Component {
    render() {
        return (
            <div className="LiveRate">
                <div className="bubble">
                    <img src={repeat} className="icon" alt="icon"/>
                    {this.props.in} = {this.props.out}
                </div>
            </div>
        )
    }
}

LiveRate.propTypes = {
    in: PropTypes.string.isRequired,
    out: PropTypes.string.isRequired,
}