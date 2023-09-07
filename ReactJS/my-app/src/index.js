import React from 'react';
import ReactDOM from 'react-dom/client';
/*
const myArray = ['apple', 'orange', 'banana'];

const myList = myArray.map(item => <li>{item}</li>);
*/

//jsx -> buat nulis html lewat javascript
//const myElement = <h1>I love JSX</h1>;
//expression jsx, pakai {} buat masukin kode javascript ke dalam jsx
const myElement = <h1>JSX is {5+5} times betters</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
