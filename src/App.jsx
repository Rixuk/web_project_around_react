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
  const [cards, setCards] = useState([]);

/*----------------- Establece las tarjetas y el usuario actual ----------------*/
useEffect(() => {
  api.getInitialCards()
  .then((cardsData) => {
    setCards(cardsData);
  })
  .catch((err) => console.log(err));
}, []);

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

  async function handleCardLike(card) {

    const isLiked = card.isLiked;
    
    try {
    const newCard = await api.toggleLike(card._id, !isLiked)
    setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    } catch(error) {
      console.error(error);
    }
  }

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);
      setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
    } catch(error) {
      console.error(error);
    }
  }

  async function handleAddPlaceSubmit(data) {

    try {
      const newCard = await api.newCard(data);
      setCards((cards) => [newCard, ...cards]);
      handleClosePopup();
    } catch(error) {
      console.error(error);
    }

  }

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

const handleUpdateAvatar = (data) => {
  (async () => {
    try{
      const newAvatar = await api.patchUserAvatar(data)
      setCurrentUser(newAvatar);
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  })();
};

/*----------------- Render ----------------*/

  return (
<>
    <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar}}>
      <div className="page">
          <Header />
          <Main onOpenPopup={handleOpenPopup} onClosePopup={handleClosePopup} popup={popup} cards = {cards} onDeleteCards = {handleCardDelete} onCardLike = {handleCardLike} onAddPlaceSubmit = {handleAddPlaceSubmit} />
          <Footer />
      </div>
    </CurrentUserContext.Provider>
</>
  )
}

export default App
