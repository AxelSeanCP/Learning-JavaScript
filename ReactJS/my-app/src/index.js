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
/* 
const x = 5;
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>
*/

//render method
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
*/

//class component
/*
class Car extends React.Component {
    render(){
        return <h2>Hi, Im a Car!</h2>
    }
}*/

//function component
/*
function Car(){
    return <h2>Hi, Im a Car!</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);*/

//function component with props
/*
function Car(props){
    return <h2>Hi, Im a {props.color} Car!</h2>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red" />);
*/

//component in component
/*
function Car(){
    return <h2>Hi, Im a Car!</h2>
}

function Garage(){
    return (
        <>
            <h1>Who lives in my Garage??</h1>
            <Car />
        </>
    );
}
*/

//component in files --> lihat di w3school.com
//class component (stateful) --> lihat di w3school.com

//props
/*
function Car(props){
    //return <h2>I am a {props.brand}</h2>
    return <h2>I am a {props.brand.name} and my model is {props.brand.model}</h2>
}

function Garage(){
    const carInfo = { name: "Porsche", model: "GT3RS"};
    return (
        <>
            <h1>Who lives in my Garage??</h1>
            <Car brand = {carInfo} />
        </>
    );
}
*/

//events
//events ditulis dengan camelCase --> onClick, onChange
//event handler ditulis dalam kurung --> onClick={shoot}

function Football() {
    const shoot = (a,b) => {
        //alert(a);
        alert(b.type);
    }

    //passing parameter harus pake arrow function
    return (
        <button onClick={(event) => shoot("Goal!", event)} >Take The Shot</button>
    );
    //parameter event bakal berguna buat form
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);