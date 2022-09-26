import branding from '../css/branding.module.scss';
import {useState} from "react";
import {isNumber} from "@mui/x-data-grid/internals";

function PriceTextbox(props) {
    let priceText = '0.00';
    if (props.value) {
        if (isNumber(props.value)) {
            if ((props.value % 1) != 0) priceText = `${props.value}`;
            else priceText = `${props.value}.00`;
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