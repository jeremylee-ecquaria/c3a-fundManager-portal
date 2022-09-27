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
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    if (number) {
        if (isNumber(number)) {
            if ((number % 1) != 0) priceText = `S$ ${numberWithCommas(number)}`;
            else priceText = `S$ ${numberWithCommas(number)}.00`;
        } else priceText = number;
    }
    return priceText;
}