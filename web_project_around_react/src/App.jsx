import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

function App() {
  return (
<>
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>

    <template id="elements__template">
      <div className="elements__card">
        <img className="elements__image" src=" " alt="" />
        <img className="elements__trash" src="../images/Trash.png" alt="" />
        <div className="elements__info">
          <h2 className="elements__location"></h2>
          <button className="elements__like"></button>
        </div>
      </div>
    </template>

    <div className="popups" id="popup-image">
      <div className="popup__overlay"></div>
      <div id="popup-images__container">
        <img id="popup-images__image" src=" " alt="" />
        <button className="popups__close"></button>
        <p id="popup-images__location"></p>
      </div>
    </div>
</>
  )
}

export default App
