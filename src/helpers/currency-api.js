
export const fetchCurrencies = () => {
    return fetch('http://api.fixer.io/latest')
        .then(r => r.json())
        .then(({rates}) => {
            rates.EUR = 1;

            // add some randomness by adding
            // from 0.00 to 0.05 each time
            // as if it would be a live FX rate
            Object.keys(rates).map(currency => rates[currency] += Math.random() / 20);

            return rates;
        });
}