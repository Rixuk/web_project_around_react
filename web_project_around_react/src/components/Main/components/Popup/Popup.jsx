export default function Popup(props) {

  const { onClose, title, children } = props;

  return (
    <div className="popups">
      <div className="popup__overlay"></div>
      <div className="popup__window">
        <button
          aria-label="Close modal"
          className="popups__close"
          type="button"
          onClick={onClose}
        />
        <h3 className="popup__title popup__style">{title}</h3>
        {children}
      </div>
    </div>
  );
}