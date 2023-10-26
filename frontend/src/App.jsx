import Carroussel from "./components/Carroussel";
import MoodChoice from "./components/MoodChoice";

function App() {
  return (
    <>
      <MoodChoice />
      <Carroussel />
      <Carroussel />
      <Carroussel className="carroussel3" />
    </>
  );
}

export default App;
