import React from 'react';
import ReactDOM from 'react-dom/client';
/*
const myArray = ['apple', 'orange', 'banana'];

const myList = myArray.map(item => <li>{item}</li>);
*/

//jsx -> buat nulis html lewat javascript
//const myElement = <h1>I love JSX</h1>;

//expression jsx, pakai {} buat masukin kode javascript ke dalam jsx
//const myElement = <h1>JSX is {5+5} times betters</h1>

//html code one top element (must be wrapped within an element)

// const myElement = (
//     //class diganti jadi className
//     <div className='myClass'>
//         <p>I am a paragraph</p>
//         <p>I am a paragraph too</p>
//         <input type='text' /> {/*elemen harus ditutup*/}
//     </div>
// );

//if expression (ternary)
const x = 5;
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
