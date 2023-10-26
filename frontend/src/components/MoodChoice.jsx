import "./MoodChoice.css";

export default function MoodChoice() {
  return (
    <div>
      <h2>Hello, lecteur !!!</h2>
      <div className="moodchoices">
        <button type="button">Entreprenant</button>
        <button type="button">Relax</button>
        <button type="button">Triste</button>
      </div>
    </div>
  );
}
