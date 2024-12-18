export const exchangeRates = {
    "USD": 1,
    "EUR": 0.91,
    "BDT": 109.5,
    "KRW": 0.00070,
    "JPY": 140
};

// Helper function to validate currency
export function isValidCurrency(currency) {
    return Object.keys(exchangeRates).includes(currency);
}

// Helper function to handle currency decimal constraints
export function formatAmount(amount, currency) {
    if (currency === 'JPY' || currency === 'KRW') {
        return Math.round(amount);
    }
    return parseFloat(amount.toFixed(2));
}