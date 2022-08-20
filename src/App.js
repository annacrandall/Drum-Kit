import { useEffect } from "react";
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
  { name: "horror-movie", audio: drumsTwo, keyPress: "W" },
  { name: "achievement-sound", audio: drumsThree, keyPress: "E" },
  { name: "rolling-drum", audio: drumsFour, keyPress: "A" },
  { name: "wacky-sound", audio: drumsFive, keyPress: "S" },
  { name: "more-drums", audio: drumsSix, keyPress: "D" },
  { name: "organ", audio: drumsSeven, keyPress: "Z" },
  { name: "horror-drums", audio: drumsEight, keyPress: "X" },
  { name: "", audio: drumsNine, keyPress: "C" },
];
function App() {
  const handleClick = (audio) => {
    const playAudio = new Audio(audio);
    playAudio.volume = 0.3
    playAudio.play();
  }
     
  const handleKeyDown = ({ key }) => {
    const { audio } = drumKit.find(({ keyPress }) => keyPress.toLowerCase() === key.toLowerCase())
    const playAudio = new Audio(audio);
    playAudio.volume = 0.3
    playAudio.play();
    }
        
     // (how to add two events to one button)
   
     useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  
  return (
    <section className="border-4 border-black m-10 p-10 rounded">
      <div className="border-2 border-black rounded drop-shadow">
        <h1 className="text-center text-xl font-mono tracking-wide">Ana's Drum Kit</h1>
        </div>
    <div className="relative" id="drum-machine">
      <div className="flex justify-center gap-4 items-center h-screen" id="display">
        {drumKit.map(({ keyPress, audio, name }) => (
          <button
            className="drum-pad border-2 border-black p-2 rounded hover:bg-slate-600 hover:text-white transition-all 
            hover:shadow-lg hover:shadow-lime-800 "
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
      </section>
  );
}

export default App;
