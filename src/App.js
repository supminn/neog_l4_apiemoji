import React, {useState} from "react";
import './App.css';

var serverUrl = "https://raw.githubusercontent.com/piciuok/Emoji-JSON/master/emoji.json";
let emojiList;
fetch(serverUrl).then(res => res.json()).then(js => emojiList = js);

function App() {
  var [emojiInput,setEmoji] = useState("");
  var [meaning, setMeaning] = useState("Meaning would be displayed here...")

  function emojiHandler(event){
    emojiInput = event.target.value;
    setEmoji(emojiInput);
    for(var i=0;i<emojiList.length;i++){
      if(emojiInput === emojiList[i].emoji){
        setMeaning(emojiList[i].name);
        break;
      }
      else{
        setMeaning("Not found in database");
      }
    }
  }
  function emojiClickHandler(item){
    setEmoji(item.emoji);
    setMeaning(item.name);
  }
  
  return (
    <div className="App">
      <header>
        <h1>Emoji Genious</h1>
      </header>
      <section>
      <input type="text" placeholder="Enter or choose emoji" id="emo-input" onChange={emojiHandler}/>
      <h2>{emojiInput}</h2>
      <h3>{meaning}</h3>
      </section>
      <section>
        <div className="display-flex">
          {emojiList.map((item) => (
            <div 
              className="flex-items"
              key={item.emoji}
              onClick={() => emojiClickHandler(item)}>
              {item.emoji}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
