export const currency = (amount: number, minDigit = 0, maxDigit = 0) => {
    if (!amount && amount !== 0) return ''
    return amount.toLocaleString('en-US', { minimumFractionDigits: minDigit, maximumFractionDigits: maxDigit });
};