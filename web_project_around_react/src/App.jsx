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
      <li className="elements__card">
        <img className="elements__image" src=" " alt="" />
        <img className="elements__trash" src="../images/Trash.png" alt="" />
        <div className="elements__info">
          <h2 className="elements__location"></h2>
          <button className="elements__like"></button>
        </div>
      </li>
    </template>
</>
  )
}

export default App
