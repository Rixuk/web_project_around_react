import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { useState, useEffect } from "react";

import { api } from "./utils/api";

import { CurrentUserContext } from "./contexts/CurrentUserContext";

function App() {
  /*----------------- Variables de estado ----------------*/
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

/*----------------- Establece el usuario actual ----------------*/
useEffect(() => {
  api.getData()
  .then((userData) => {
    setCurrentUser(userData);
  })
  .catch((err) => console.log(err));
}, [])

/*----------------- Handlers ----------------*/

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

/*----------------- TAMBIÉN PREGUNTAR SOBRE ESTOS ASYNCRONOS -----------------*/
const handleUpdateUser = (data) => {
  (async () => {
    try{
      const newData = await api.patchUserInfo(data)
        setCurrentUser(newData);
        handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  })();
};

/*----------------- Render ----------------*/

  return (
<>
    <CurrentUserContext.Provider value={{currentUser, handleUpdateUser}}>
      <div className="page">
          <Header />
          <Main onOpenPopup={handleOpenPopup} onClosePopup={handleClosePopup} popup={popup} />
          <Footer />
      </div>
    </CurrentUserContext.Provider>
</>
  )
}

export default App
