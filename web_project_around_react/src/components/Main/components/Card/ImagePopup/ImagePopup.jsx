export default function ImagePopup(props) {

    const { onClose, card } = props;
    
    return (
        <div className="popup__overlay">
            <div className="popup-images__container">
                <button
                    aria-label="Close modal"
                    className="popup__close"
                    type="button"
                    onClick={onClose}
                />
                <img
                    className="popup-images__image"
                    src={card.link}
                    alt={card.name}
                />
                <p className="popup-images__location">{card.name}</p>
            </div>
        </div>
    );
}