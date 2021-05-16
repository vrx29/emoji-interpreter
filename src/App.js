import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😃": "Grinning Face",
  "❤️": "Red Heart",
  "🥺": "Pleading Face",
  "🔥": "Fire",
  "😂": "Face with Tears of Joy",
  "🥰": "Smiling Face with Hearts",
  "😊": "Smiling Face with Smiling Eyes",
  "🤩": "Star-Struck"
};

const emojiKeys = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function emojiInterpreter(event) {
    var emojiMeaning = emojiDictionary[event.target.value];
    if (emojiMeaning === undefined) {
      emojiMeaning = "We don't have this emoji in our Database..";
    }
    setEmojiMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setEmojiMeaning(emojiMeaning);
  }

  return (
    <div className="header">
      <h1>Emoji Interpreter!</h1>
      <p>Looking for meaning of emojis, this the place 😃</p>
      <input
        className="input"
        onChange={emojiInterpreter}
        placeholder="Search meaning for your Emoji here"
      />
      <h5 className="output">{emojiMeaning}</h5>

      {emojiKeys.map((emoji) => {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
