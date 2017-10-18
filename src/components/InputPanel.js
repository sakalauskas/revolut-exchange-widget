import {connect} from "react-redux";
import {SELECTIONS, updateInput} from "../modules/currency";
import Panel from "./Panel";

const mapStateToProps = state => {
    return {
        value: state.currency.values.IN < 1 ? '' : "- " + state.currency.values.IN,
        selected: state.currency.selected === SELECTIONS.IN
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (value) => {
            dispatch(updateInput(value));
        }
    }
}
const InputPanel = connect(mapStateToProps, mapDispatchToProps)(Panel)

export default InputPanel;
