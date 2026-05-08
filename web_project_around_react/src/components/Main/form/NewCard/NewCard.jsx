export default function NewCard(){
    return(
        <form className="popup__form" noValidate>
            <fieldset className="popup__fieldset">
                <input type="text" name="name" placeholder="Título" className="popup__name popup__style form__inputs" id="new-cards__name" required minLength="2" maxLength="30"/>
                <span></span>
            </fieldset>
        </form>
    )
}