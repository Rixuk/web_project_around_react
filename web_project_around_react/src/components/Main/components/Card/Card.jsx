import thrashIcon from "../../../../../images/Trash.png";

export default function Card(props){
    const {name, link} = props.card;
    const {onCardClick} = props;

    return(
        <li className="elements__card">
            <img
                className="elements__image"
                src={link}
                alt={name}
                onClick={() => onCardClick(props.card)}
            />
            <img className="elements__trash" src={thrashIcon} alt="" />
            <div className="elements__info">
                <h2 className="elements__location">{name}</h2>
                <button className="elements__like" aria-label="Like" type="button"></button>
            </div>
        </li>
    )
}