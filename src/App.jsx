import { useState } from "react";

function App() {
  const [showGif, setShowGif] = useState(true);

  return (
    <div className="max-w-screen-xl mx-auto p-5 flex flex-col gap-4 font-satoshi">
      <strong className="mt-5 text-2xl">
        tmpst.xyz | The Start of a Portfolio | 12/21/24
      </strong>
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
      <div className="h-36 my-4 flex items-center gap-2">
        <button
          onClick={() => setShowGif(!showGif)}
          className={`w-24 py-1 px-2 border-2 border-gray-700 bg-white h-full rounded-xl text-center transition-all duration-200 hover:bg-gray-100`}
        >
          {showGif ? "Hide" : "Show"} Gifs
        </button>

        <img
          src="https://cdn.dribbble.com/users/934248/screenshots/3282460/circle-perspection_dribbble.gif"
          alt=""
          className={`h-full border-2 border-gray-700 rounded-2xl ${
            showGif ? "" : "hidden"
          }`}
        />

        <img
          src="https://i.pinimg.com/originals/67/15/25/671525495c3984fb6d8357e4bb908134.gif"
          alt=""
          className={`h-full border-2 border-gray-700 rounded-2xl ${
            showGif ? "" : "hidden"
          }`}
        />

        <p
          className={`py-1 px-2 border-2 border-gray-700 bg-white w-24 h-full rounded-2xl flex items-center text-center ${
            showGif ? "" : "hidden"
          }`}
        >
          <span>kinda like these...?</span>
        </p>
      </div>
      <div>
        <strong>Features I&apos;d Enjoy</strong>
        <ul style={{ listStyleType: "circle" }} className="mx-6">
          <li>Animated hero page</li>
          <li>
            Usage of many different transitions/animation techniques (without
            making it overwhelming).
          </li>
          <li>
            Something complex to show proficiency... 3d rendering with threejs?
            Complex page interactions?
          </li>
          <li>
            Ingaging portfolio section to show off work experience... Timeline?
            Project cards? Animated walkthrough?
          </li>
          <li>
            About me section; Personal info, Resume, Goals/Aspirations?, Links
            to socials (in a creative way).
          </li>
          <li>Some interesting way to navigate to the fun site... tmpst.fun</li>
        </ul>
      </div>
      <div>
        <strong>Inspiration</strong>
        <ul style={{ listStyleType: "circle" }} className="mx-6">
          <li>
            <a href="https://www.thegr8binil.me/">
              https://www.thegr8binil.me/
            </a>
          </li>
          <li>
            <a href="https://brittanychiang.com/">
              https://brittanychiang.com/
            </a>
          </li>
          <li>
            <a href="https://minhpham.design/">https://minhpham.design/</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <strong>Now going to follow this tutorial</strong>
        <a
          href="https://storage.googleapis.com/frontend-tribe-main-site.appspot.com/email-content/frontend-tribe-light-saas-landing-page-resource-bundle.zip?GoogleAccessId=firebase-adminsdk-gw41z%40frontend-tribe-main-site.iam.gserviceaccount.com&Expires=1766275200&Signature=v1UTpUXQNlH9LLCVRoPkJfzdMR39eWCcV9g3Uil7DFtR6yScz8HrQJL8Cm6dkytgp3f7%2FteyR2gmHDsT2Lwr9mueLKAZxNP7cT9BswPkwbIq5N%2FbYSz2k%2BkpsS%2Bd0HeaVT5QO7CWPvLnXvjaeg9kSouPfb3es0CIYeJeJjk8V%2Bdrm%2FxGfkdF2zOAFcnHG%2BTn9IRsG4OL0dXPmqdhL3sW6GCoOOGvtdb%2BBVBzyrtCEX9QDkGl83rfBdqwod2mY2E06JoZBJufeWNtj211bJXWkjUyp2kYy8WQHuivpwWwhY%2BKe9mmwO%2B9Hc5bvfBZjEv89GtY8fOljoUMeOYJkBn7lg%3D%3D"
          className="mt-2 underline duration-200 hover:text-gray-700"
        >
          Download Link For The Video Pack
        </a>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7hi5zwO75yc?si=_6HRTBfpkkjtojvj"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="my-2 rounded-2xl shadow-md border-2 border-gray-700"
        ></iframe>
        <p>
          Planning on making this another site for the portfolio after some
          adjustments maybe
        </p>
        <p>
          If I end up doing that I&apos;ll link it here:{" "}
          <span className="underline">Not done yet!</span>
        </p>
      </div>
    </div>
  );
}

export default App;
