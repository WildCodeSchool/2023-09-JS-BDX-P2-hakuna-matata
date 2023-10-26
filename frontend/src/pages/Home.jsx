function Home() {
  return (
    <div>
      <div className="logoDiv">
        <img className="logoMood" src="./src/assets/moodBook.png" alt="logo" />
      </div>
      <h1 className="text_Home">Bienvenue </h1>
      <h3 className="text_Home">Quel est ton mood du jour ? </h3>
      <div className="moodContainer">
        <button type="button" className="mood ambitieux">
          Ambitieux
        </button>
        <button type="button" className="mood amoureux">
          Amoureux
        </button>
        <button type="button" className="mood anxieux">
          Anxieux
        </button>
        <button type="button" className="mood aventurier">
          Aventurier
        </button>
        <button type="button" className="mood curieux">
          Curieux
        </button>
        <button type="button" className="mood drole">
          Drôle
        </button>
        <button type="button" className="mood gourmand">
          Gourmand
        </button>
        <button type="button" className="mood entreprenant">
          Entreprenant
        </button>
        <button type="button" className="mood scientifique">
          Scientifique
        </button>
        <button type="button" className="mood sportif">
          Sportif
        </button>
        <button type="button" className="mood relax">
          Relax
        </button>
        <button type="button" className="mood triste">
          Triste
        </button>
      </div>
      <h4 className="text_Home">Sélectionne en trois maximum ! </h4>
    </div>
  );
}

export default Home;
