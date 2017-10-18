import {connect} from "react-redux";
import {changeOutputCurrency} from "../modules/currency";
import CurrencySelector from "./CurrencySelector";

const mapStateToProps = state => {
    return {
        value: state.currency.currency.OUT,
        currencies: Object.keys(state.currency.rates),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (value) => {
            dispatch(changeOutputCurrency(value));
        }
    }
}
const OutputCurrencySelector = connect(mapStateToProps, mapDispatchToProps)(CurrencySelector)

export default OutputCurrencySelector;
