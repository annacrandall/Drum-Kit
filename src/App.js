import logo from "./logo.svg";
import drumsOne from "./drum-1.wav";
import drumsTwo from "./drum-2.wav";
import drumsThree from "./drum-3.wav";
import drumsFour from "./drum-4.wav";
import drumsFive from "./drum-5.wav";
import drumsSix from "./drum-6.wav";
import drumsSeven from "./drum-7.wav";
import drumsEight from "./drum-8.wav";
import drumsNine from "./drum-9.wav";

const drumKit = [
  { name: "tamborine", audio: drumsOne, keyPress: "Q" },
  { name: "hydroflask", audio: drumsTwo, keyPress: "W" },
  { name: "house", audio: drumsThree, keyPress: "E" },
  { name: "yeah", audio: drumsFour, keyPress: "A" },
  { name: "wall", audio: drumsFive, keyPress: "S" },
  { name: "pool", audio: drumsSix, keyPress: "D" },
  { name: "allgreen", audio: drumsSeven, keyPress: "Z" },
  { name: "soylent", audio: drumsEight, keyPress: "X" },
  { name: "kale", audio: drumsNine, keyPress: "C" },
];
function App() {
  const handleClick = (audio) => {
    console.log(audio);
    const playAudio = new Audio(audio);
    playAudio.play();
  };
  return (
    <div className="relative" id="drum-machine">
      <div className="flex justify-center gap-4 items-center h-screen" id="display">
        {drumKit.map(({ keyPress, audio, name }) => (
          <button
            className="drum-pad border-2 border-black p-2 rounded hover:bg-slate-600 hover:text-white transition-all 
            hover:shadow-lg hover:shadow-violet-500"
            key={keyPress}
            id={name}
            onClick={() => handleClick(audio)}
            type="button"
          >
            {keyPress}
            <audio src={audio} id={keyPress} className="clip"></audio>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
