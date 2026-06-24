import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { useState, useEffect } from "react";

import { api } from "./utils/api";

import { CurrentUserContext } from "./contexts/CurrentUserContext";

function App() {
  /*----------------- Variables de estado ----------------*/
const [currentUser, setCurrentUser] = useState(null);

/*----------------- Efectos ----------------*/
useEffect(() => {
  api.getData()
  .then((userData) => {
    setCurrentUser(userData);
  })
  .catch((err) => console.log(err));
}, [])


  return (
<>
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
          <Header />
          <Main />
          <Footer />
      </div>
    </CurrentUserContext.Provider>
</>
  )
}

export default App
