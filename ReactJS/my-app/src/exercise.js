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

export default Exer2;