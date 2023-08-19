import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const inp = (e) => setText(e.target.value);

  const add = () => {
    list.push(text);
    setList([...list]);
  };

  const deleteAll = () => {
    list.length = 0;
    setList([...list]);
  };

  return (
    <>
      <h1 className="heading">TODO APP USING REACT </h1>
      <div className="todo">
        <input type="text" onChange={inp} />
        <button onClick={add}>Add</button>
        <button onClick={deleteAll}>Delete All</button>
      </div>

      <div className="list">
        <ul>
          {list.map((x, i) => (
            <div key={i}>
              <li>{x}</li>
              <button
                onClick={() => setList((l) => l.filter((k, p) => p !== i))}
              >
                Delete
              </button>
              <button
                onClick={() =>
                  setList((l) =>
                    l.map((x, z) => {
                      if (z === i) {
                        return (x = prompt("send something"));
                      } else {
                        return x;
                      }
                    })
                  )
                }
              >
                Edit
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
