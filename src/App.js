import React, { useState } from "react";
import "./styles.css";
const emojiDictonary = {
  "😱": "Fear",
  "😢": "Crying",
  "😊": "Smiling",
  "🥸": "Disguised",
  "😕": "Confused",
  "😟": "Worried"
};

var emojiWeKnow = Object.keys(emojiDictonary);

export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictonary[userInput];
    if (meaning === undefined) {
      meaning = "we domt have it in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictonary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Outt!!</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3> EMoji we KNOW</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
