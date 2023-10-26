function Home() {
  return (
    <div>
      <div className="logoDiv">
        <img className="logoMood" src="./src/assets/moodBook.png" alt="logo" />
      </div>
      <h1 className="text_Home">Bienvenue </h1>
      <h3 className="text_Home">Quel est ton mood du jour ? </h3>
      <div className="moodContainer">
        <button type="button" className="mood">
          Ambitieux
        </button>
        <button type="button" className="mood">
          Amoureux
        </button>
        <button type="button" className="mood">
          Anxieux
        </button>
        <button type="button" className="mood">
          Aventurier
        </button>
        <button type="button" className="mood">
          Curieux
        </button>
        <button type="button" className="mood">
          Drôle
        </button>
        <button type="button" className="mood">
          Gourmand
        </button>
        <button type="button" className="mood">
          Entreprenant
        </button>
        <button type="button" className="mood">
          Scientifique
        </button>
        <button type="button" className="mood">
          Sportif
        </button>
        <button type="button" className="mood">
          Relax
        </button>
        <button type="button" className="mood">
          Triste
        </button>
      </div>
      <h4 className="text_Home">Sélectionne en trois maximum ! </h4>
    </div>
  );
}

export default Home;
