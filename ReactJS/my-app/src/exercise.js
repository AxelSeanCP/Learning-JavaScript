import { useState } from "react";

function Exer1() { //button click counter
  const [counter, setCounter] = useState(0)

  const addCounter = () => {
    setCounter(counter => {
      return counter+1
    })
  }

  return (
    <div>
      <h1>This button has been clicked {counter} times!</h1>
      <button onClick={addCounter}>Click Me</button>
    </div>
  );
}

function Exer2 () { //text visibility by button click
    const [isVisible, setIsVisible] = useState(false);

    const myText = "This is a paragraph";
    const handleVisible = () => {
        setIsVisible(!isVisible)
    };

    return(
        <div>
            {isVisible && <p>{myText}</p>}
            <button onClick={handleVisible}>Toggle Visibility</button>
        </div>
    );
}

function Exer3() { //character count in a textarea
  const [jumlah, setJumlah] = useState(0);

  const handleChange = (event) => {
    const kalimat = event.target.value;
    setJumlah(kalimat.length)
  };

  return (
    <div>
      <textarea onChange={handleChange} />
      <p>Character Count: {jumlah}</p>
    </div>
  );
}

function Exer4() { //simple todolist
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleInputChange = (event) => {
    const newInput = event.target.value
    setInput(newInput)
  };

  const addTodo = () => {
    if(input.trim()){
      setList([...list, input.trim()]);
      setInput("")
    }
  };

  const handleDelete = index => {
    const newList = list.filter((isi, i) => i !== index) //mengembalikan array yang indexnya bukan index yang didelete
    setList(newList)
  }

  //map((todo,index)) todo berisi isiarray sedangkan index berisi indexnya, map sudah memisahkan secara otomatis
  return(
    <div>
      <input type="text" value={input} onChange={handleInputChange} /><button onClick={addTodo}>Add TODO</button>
      <ul>
        {list.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exer4;