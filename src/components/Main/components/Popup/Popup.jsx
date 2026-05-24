export default function Popup(props) {

  const { onClose, title, children } = props;

  return (
    <div className="popup__overlay">
      <div className={`popup__window ${ !title ? "popup-images__container" : "" }`}>
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        />
        {title && <h3 className="popup__title popup__style">{title}</h3>}
        {children}
      </div>
    </div>
  );
}