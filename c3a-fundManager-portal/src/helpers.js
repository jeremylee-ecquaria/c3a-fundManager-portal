import {isNumber} from "@mui/x-data-grid/internals";

export function debounce(func, timeout = 300) {
    // debounce
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

export function formatPrice(number) {
    let priceText = ' S$ 0.00';
    if (number) {
        if (isNumber(number)) {
            if ((number % 1) != 0) priceText = `S$ ${number}`;
            else priceText = `S$ ${number}.00`;
        } else priceText = number;
    }
    return priceText;
}