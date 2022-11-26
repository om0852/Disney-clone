import React, { useState } from "react";
import Notedesc from "./componenet/Notedesc";
import Notelist from "./componenet/Notelist";
import "./Noteapp.css";
function Note() {
  let inputvalue = document.getElementById("inputtitle");
  const [set, setset] = useState(false);
  const [noteitem, setnoteitem] = useState([]);
  const [noteinput, setnote] = useState({
    title: "",
    description: "",
  });

  const clicked = (prevalue) => {
    // console.log()
    if (set === true) {
      console.log(prevalue.target.value);

      if (prevalue.target.value === "") {
        setset(false);
      } else {
        setset(true);
      }
    } else {
      setset(true);
    }
  };
  const textarea = (notede) => {
    // console.log(notede);
    setnote((oldarr) => {
      return {
        ...oldarr,
        description: notede,
      };
    });
    // console.log(noteinput)
  };
  const setinput = (prevalue) => {
    setnote((oldarr) => {
      return {
        ...oldarr,
        title: prevalue.target.value,
      };
    });
    // console.log(prevalue.target.value)
    console.log(noteinput);
  };
  const add = (notede) => {
    setnoteitem((oldarr) => {
      return [...oldarr, noteinput];
    });
    console.log(noteitem);
  };
  const clearitem = (id) => {
    // alert(id);
    console.log(id);
    setnoteitem(() => {
      return noteitem.filter((value, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="  containers">
      <h2 className="text-center">what's new today</h2>
      <div className="Notetaker container">
        <input
          className="text-center container inputtitle"
          id="inputtitle"
          placeholder="Enter your note"
          onClick={clicked}
          onChange={setinput}
        />
        {set && <Notedesc add={add} textarea={textarea} />}
      </div>
      <div className="display-flex">
        {noteitem.map((value, index) => {
          return (
            <Notelist
              value={value.title}
              key={index}
              id={index}
              description={value.description}
              clearitem={clearitem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Note;
