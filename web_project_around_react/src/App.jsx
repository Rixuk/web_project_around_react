import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

import { useState } from 'react'
import vector from "../images/Vector.png"

function App() {
  const [count, setCount] = useState(0)

  return (
<>
  <body>
    <div class="page">
      <Header />
      <Main />
      <Footer />
    </div>

    <template id="elements__template">
      <div class="elements__card">
        <img class="elements__image" src="" alt="" />
        <img class="elements__trash" src="../images/Trash.png" alt="" />
        <div class="elements__info">
          <h2 class="elements__location"></h2>
          <button class="elements__like"></button>
        </div>
      </div>
    </template>

    <div class="popups" id="popup-image">
      <div class="popup__overlay"></div>
      <div id="popup-images__container">
        <img id="popup-images__image" src="" alt="" />
        <button class="popups__close"></button>
        <p id="popup-images__location"></p>
      </div>
    </div>

    <script src="../scripts/index.js" type="module"></script>
  </body>
</>
  )
}

export default App
