import { useState } from "react";

function App() {
  const [showGif, setShowGif] = useState(true);

  return (
    <div className="p-5 flex flex-col gap-4 font-satoshi">
      <strong className="text-xl">The Portfolio</strong>
      <div>
        <p>
          Idea is maybe like a design where when going onto the site its a big
          circle that shrinks to become a smooth moving mouse cursor
        </p>
        <p>
          And when going between the two sites, tmpst.xyz (serious porfolio
          site), and tmpst.fun (fun portfolio of non-design stuff)
        </p>
        <br />
        <p>
          The circle will expand to take up the screen, then the page will
          switch to the other one, and the new page will have the circle go back
          to being small
        </p>
        <p>Kinda like a smooth grow/shrink trasition between the two pages</p>
      </div>
      <div className="w-48 mt-4 flex flex-col items-center bg-gray-700 rounded-xl shadow-xl">
        <button
          onClick={() => setShowGif(!showGif)}
          className={`py-1 px-2 border-2 border-gray-700 bg-white w-full h-full rounded-xl text-center transition-all duration-200 hover:bg-gray-100`}
        >
          {showGif ? "Hide" : "Show"} Gifs
        </button>

        <img
          src="https://cdn.dribbble.com/users/934248/screenshots/3282460/circle-perspection_dribbble.gif"
          alt=""
          className={`w-48 border-x-2 border-gray-700 rounded-2xl ${
            showGif ? "" : "hidden"
          }`}
        />

        <img
          src="https://i.pinimg.com/originals/67/15/25/671525495c3984fb6d8357e4bb908134.gif"
          alt=""
          className={`w-48 border-x-2 border-t-2 border-gray-700 rounded-2xl ${
            showGif ? "" : "hidden"
          }`}
        />

        <p
          className={`py-1 px-2 border-2 border-gray-700 bg-white w-full h-full rounded-2xl text-center ${
            showGif ? "" : "hidden"
          }`}
        >
          kinda like this...?
        </p>
      </div>
    </div>
  );
}

export default App;
