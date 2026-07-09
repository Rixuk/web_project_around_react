import thrashIcon from "../../../../../images/Trash.png";
import { useContext } from "react";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext";

export default function Card(props){
    const {name, link, isLiked} = props.card;
    const {onCardClick} = props;
    const {onCardLike} = props;
    const {onDeletePopup} = props;
    const { currentUser } = useContext(CurrentUserContext);

    const cardLikeButtonClassName = "elements__like" + (isLiked ? " elements__like-enabled" : "");

    return(
        <li className="elements__card">
            <img
                className="elements__image"
                src={link}
                alt={name}
                onClick={() => onCardClick(props.card)}
            />

            {/*ME PARECE QUE EN ESTE PUNTO DEL PROYECTO AÚN NO SE PUEDE CAMBIAR EL ID DEL USUARIO ACTUAL, PERO DEJO CONFIGURADA LA LÓGICA PARA CUANDO SE PUEDA*/}
            { currentUser._id === props.card.owner && (
                <img className="elements__trash" src={thrashIcon} alt="" onClick={() => onDeletePopup(props.card)} />
            )}
            <div className="elements__info">
                <h2 className="elements__location">{name}</h2>
                <button className={cardLikeButtonClassName} aria-label="Like" type="button" onClick={() => onCardLike(props.card)}></button>
            </div>
        </li>
    )
}