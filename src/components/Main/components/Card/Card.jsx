import thrashIcon from "../../../../../images/Trash.png";

export default function Card(props){
    const {name, link, isLiked} = props.card;
    const {onCardClick} = props;
    const {onCardLike} = props;
    const {onCardDelete} = props;

    const cardLikeButtonClassName = `elements__like ${
isLiked ? 'elements__like-enabled' : ''
}`;

    return(
        <li className="elements__card">
            <img
                className="elements__image"
                src={link}
                alt={name}
                onClick={() => onCardClick(props.card)}
            />
            <img className="elements__trash" src={thrashIcon} alt="" onClick={() => onCardDelete(props.card)} />
            <div className="elements__info">
                <h2 className="elements__location">{name}</h2>
                <button className={cardLikeButtonClassName} aria-label="Like" type="button" onClick={() => onCardLike(props.card)}></button>
            </div>
        </li>
    )
}