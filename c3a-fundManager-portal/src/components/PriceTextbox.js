import branding from '../css/branding.module.scss';
import {useState} from "react";
import {isNumber} from "@mui/x-data-grid/internals";
import {formatPrice} from "../helpers";

function PriceTextbox(props) {
    let priceText = '0.00';
    if (props.value) {
        if (isNumber(props.value)) {
            priceText = formatPrice(props.value);
        } else priceText = props.value;
    }

    return (
        <>
            {/* changeableValue => meaning that the 'value' is a state that can be updated from time to time */}
            {props.changeableValue ?
                <div className={branding.textboxGroup}>
                    <div className={branding.textboxAppend}>S$</div>
                    <input type='text'
                           value={priceText}
                           style={{width: `${props.width || '100%'}`}}
                           disabled={props.disabled || false}/>
                </div>
                :
                <div className={branding.textboxGroup}>
                    <div className={branding.textboxAppend}>S$</div>
                    <input type='text'
                           defaultValue={priceText}
                           style={{width: `${props.width || '100%'}`}}
                           disabled={props.disabled || false}/>
                </div>
            }
        </>

        )
}

export default PriceTextbox;