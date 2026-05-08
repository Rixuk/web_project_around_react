export default function Popup(props) {

  const { title, children } = props;

  return (
    <div className="popups">
    <div className="popup__overlay"></div>
      <div className="popup__window">
        <button
          aria-label="Close modal"
          className="popups__close"
          type="button"
        />
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}