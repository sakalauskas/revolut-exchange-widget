import {fetchCurrencies} from "../helpers/currency-api";

export const CHANGE_SELECTED = 'currency/CHAANGE_SELECTED';
export const CHANGE_INPUT = 'currency/CHANGE_INPUT';
export const CHANGE_INPUT_CURRENCY = 'currency/CHANGE_INPUT_CURRENCY';
export const CHANGE_OUTPUT = 'currency/CHANGE_OUTPUT';
export const CHANGE_OUTPUT_CURRENCY = 'currency/CHANGE_OUTPUT_CURRENCY';
export const UPDATE_RATES = 'currency/UPDATE_RATES';
export const RECALCULATE_IO = 'currency/RECALCULATE_IO';

export const SELECTIONS = {
    IN: "IN",
    OUT: "OUT"
}

const initialState = {
    values: {
        IN: 0,
        OUT: 0,
    },
    currency: {
        IN: 'EUR',
        OUT: 'GBP',
    },
    selected: SELECTIONS.IN,
    rates: [],
}

const convert = ({rates, values, currency, selected}) => {
    const writeTo = selected === SELECTIONS.IN ?  SELECTIONS.OUT : SELECTIONS.IN,
        resultRate = rates[currency[writeTo]],
        selectedRate = rates[currency[selected]] !== undefined ? rates[currency[selected]] : 0,
        selectedValue = values[selected];

    const converted = (resultRate / selectedRate * selectedValue).toFixed(2);
    console.log(writeTo, converted);
    // Convert if input value is set
    let ob = {};
    ob[writeTo] = converted !== "NaN" ? converted : 0.00;
    return ob;
};


export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SELECTED:
            return {
                ...state,
                selected: action.selected
            }

        case CHANGE_INPUT:
            return {
                ...state,
                values: {...state.values, IN: action.input},
            }

        case CHANGE_OUTPUT:
            return {
                ...state,
                values: {...state.values, OUT: action.output},
            }

        case CHANGE_INPUT_CURRENCY:
            return {
                ...state,
                currency: {...state.currency, IN: action.value},
            }

        case CHANGE_OUTPUT_CURRENCY:
            return {
                ...state,
                currency: {...state.currency, OUT: action.value},
            }

        case RECALCULATE_IO:
            return {
                ...state,
                values: {...state.values, ...convert(state)}
            }

        case UPDATE_RATES:
            return {
                ...state,
                rates: action.rates
            }

        default:
            return state
    }
}


export const updateRates = () => {
    return dispatch => {
        fetchCurrencies().then(rates => dispatch({
            type: UPDATE_RATES,
            rates: rates
        }))

        dispatch({
            type: RECALCULATE_IO
        })
    }
}


export const updateInput = (input) => {
    return dispatch => {
        dispatch({
            type: CHANGE_SELECTED,
            selected: SELECTIONS.IN
        })
        dispatch({
            type: CHANGE_INPUT,
            input
        })

        dispatch({
            type: RECALCULATE_IO
        })
    }
}

export const updateOutput = (output) => {
    return dispatch => {
        dispatch({
            type: CHANGE_SELECTED,
            selected: SELECTIONS.OUT
        })

        dispatch({
            type: CHANGE_OUTPUT,
            output
        })

        dispatch({
            type: RECALCULATE_IO
        })
    }
}

export const changeInputCurrency = (newCurrency) => {
    return dispatch => {
        dispatch({
            type: CHANGE_INPUT_CURRENCY,
            value: newCurrency
        })

        dispatch({
            type: RECALCULATE_IO
        })
    }
}
export const changeOutputCurrency = (newCurrency) => {
    return dispatch => {
        dispatch({
            type: CHANGE_OUTPUT_CURRENCY,
            value: newCurrency
        })

        dispatch({
            type: RECALCULATE_IO
        })
    }
}