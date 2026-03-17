function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__brand">
          <img
            className="header__logo"
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Logo Equimape"
          />

          <div>
            <h1 className="header__title">Equimape Promoções</h1>
            <p className="header__text">Móveis selecionados para estudantes</p>
          </div>
        </div>
      </div>

      <div className="header__arch"></div>
    </header>
  );
}

export default Header;