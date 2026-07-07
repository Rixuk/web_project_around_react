import {useState} from "react";

export default function RemoveCard(){
    return(
        <form className="popup__form" noValidate>
            <fieldset className="popup__fieldset">
                <button className="popup__submit popup__style" type="submit">Si</button>
            </fieldset>
        </form>
    )
}