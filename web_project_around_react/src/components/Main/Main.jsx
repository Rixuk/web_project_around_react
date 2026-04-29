export default function Main () {
    return (
        <main class="content">
        <section class="profile">
          <div class="profile__picture">
            <img src="" alt="avatar image" class="profile__avatar"/>
            <div class="profile__edit-icon-container">
              <img src={vector} alt="edit icon" class="profile__edit-icon"/>
            </div>
          </div>
          <div class="profile__info">
            <div class="profile__name-and-button">
              <h2 class="profile__name" id="profile__name"></h2>
              <button class="profile__button"></button>
            </div>
            <p class="profile__profession" id="profile__profession"></p>
          </div>
          <div class="profile__add">
            <button class="profile__add-button">+</button>
          </div>
          <div class="popups" id="popup-profile">
            <div class="popup__overlay"></div>
            <div class="popup__window">
              <h2 class="popup__title popup__style">Editar perfil</h2>
              <form class="popup__form" novalidate>
                <fieldset class="popup__fieldset">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    class="popup__name popup__style form__inputs"
                    id="popup__name"
                    required
                    minlength="2"
                    maxlength="40"
                  />
                  <span
                    class="form__inputs-error_active"
                    id="popup__name-error"
                  ></span>
                  <input
                    type="text"
                    name="about"
                    placeholder="Acerca de mí"
                    class="popup__aboutme popup__style form__inputs"
                    id="popup__job"
                    required
                    minlength="2"
                    maxlength="200"
                  />
                  <span
                    class="form__inputs-error_active"
                    id="popup__job-error"
                  ></span>
                  <button type="submit" class="popup__save popup__style">
                    Guardar
                  </button>
                </fieldset>
              </form>
              <button class="popups__close"></button>
            </div>
          </div>
          <div class="popups" id="popup-cards">
            <div class="popup__overlay"></div>
            <div class="popup__window">
              <h2 class="popup__title popup__style">Nuevo lugar</h2>
              <form class="popup__form" novalidate>
                <fieldset class="popup__fieldset">
                  <input
                    type="text"
                    name="name"
                    placeholder="Título"
                    class="popup__name popup__style form__inputs"
                    id="new-cards__name"
                    required
                    minlength="2"
                    maxlength="30"
                  />
                  <span
                    class="form__inputs-error_active"
                    id="new-cards__name-error"
                  ></span>
                  <input
                    type="url"
                    name="link"
                    placeholder="Enlace a la imagen"
                    class="popup__aboutme popup__style form__inputs"
                    id="new-cards__link"
                    required
                  />
                  <span
                    class="form__inputs-error_active"
                    id="new-cards__link-error"
                  ></span>
                  <button type="submit" class="popup__save popup__style">
                    Crear
                  </button>
                </fieldset>
              </form>
              <button class="popups__close"></button>
            </div>
          </div>
          <div class="popups" id="popup-confirmation">
            <div class="popup__overlay"></div>
            <div class="popup__window">
              <h2 class="popup__title popup__style">¿Estás seguro?</h2>
              <form class="popup__form" novalidate>
                <fieldset class="popup__fieldset">
                  <button type="submit" class="popup__save popup__style">
                    Sí
                  </button>
                </fieldset>
              </form>
              <button class="popups__close"></button>
            </div>
          </div>
          <div class="popups" id="popup-edit-profile">
            <div class="popup__overlay"></div>
            <div class="popup__window">
              <h2 class="popup__title popup__style">Cambiar foto de perfil</h2>
              <form class="popup__form" novalidate>
                <fieldset class="popup__fieldset">
                  <input type="text" name="avatar" placeholder="Enlace a la imagen" class="popup__avatar popup__style form__inputs" id="edit-avatar__link" required />
                  <span
                    class="form__inputs-error_active"
                    id="edit-avatar__link-error"
                  ></span>
                  <button type="submit" class="popup__save popup__style">Guardar</button>
                </fieldset>
              </form>
              <button class="popups__close"></button>
            </div>
          </div>
        </section>
        <section class="elements"></section>
      </main>
    );
}