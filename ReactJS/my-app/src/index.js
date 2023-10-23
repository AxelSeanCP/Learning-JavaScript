import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react'; //penting buat hook

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

//------------------------------class component
/*
class Car extends React.Component {
    render(){
        return <h2>Hi, Im a Car!</h2>
    }
}*/

//------------------------------function component
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

//------------------------------component in component
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

//------------------------------props
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

//------------------------------events
//events ditulis dengan camelCase --> onClick, onChange
//event handler ditulis dalam kurung --> onClick={shoot}

// function Football() {
//     const shoot = (a,b) => {
//         //alert(a);
//         alert(b.type);
//     }

//     //passing parameter harus pake arrow function
//     return (
//         <button onClick={(event) => shoot("Goal!", event)} >Take The Shot</button>
//     );
//     //parameter event bakal berguna buat form
// }
//<Football />

//------------------------------conditional
//if-else

// function MadeGoal() {
//     return<h1>Goal!!!</h1>
// }

// function MissedGoal() {
//     return <h1>Missed!!!</h1>
// }

// function Goal(props){
//     const isGoal = props.isGoal;
//     if (isGoal) {
//         return <MadeGoal />
//     }else {
//         return <MissedGoal />
//     }
// }
//<Goal isGoal={true} />

//&& operator

// function Garage(props) {
//     const cars = props.cars;
//     return (
//         <>
//             <h1>Garage</h1>
//             {cars.length > 0 &&
//                 <h2>You have {cars.length} cars in your garage</h2>
//             }
//         </>
//     )
// }
// const cars = ["Ford", "BMW"];
//<Garage cars={cars} />

//ternary operator

// function Goal(props){
//     const isGoal = props.isGoal;
//     return <div> {isGoal ? <MadeGoal /> : <MissedGoal />} </div>
// }
//<Goal isGoal = {true} />

//------------------------------Lists
// function Cars(props){
//     return <li>I am a {props.brand}</li>
// }

// function Garage(){
//     const cars = [
//         {id: 1, brand: "Ford"},
//         {id: 2, brand: "BMW"},
//         {id: 3, brand: "Audi"},
//     ];

//     return (
//         <div>
//             <h1>Who lives in my garage?</h1>
//             {cars.map(car => <Cars key={car.id} brand={car.brand} />)}
//         </div>
//     );
// }
//<Garage />

//------------------------------Forms
//handling forms

// function MyForm(){
//    const [name, setName] = useState("");
    //name dijadikan empty string, setName jadi method buat ganti valuenya name

//     return (
//         <form>
//             <label>Enter your name:
//                 <input 
//                     type='text'
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//             </label>
//         </form>
//     )
// }

//submiting forms

// function MyForm(){
//     const [name, setName] = useState("");

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`The name you entered was ${name}`);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Enter your name:
//                 <input 
//                     type='text'
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//             </label>
//             <input type='submit' />
//         </form>
//     );
// }

//multiple input fields
/*
function MyForm(){
    const [inputs, setInputs] = useState({});
    //inputs dijadikan object kosong

    //handleChange untuk ganti value saat input diisi
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        //setInputs dimasukkan callback function, values = inputs karena saat method dipanggil isinya inputs masuk ke values
        //di function terjadi pembuatan object baru dengan menggunakan { //isi object baru }
        //{...values, [name]: value} -> untuk mengcopy semua isi dari state inputs
        //, [name]: value -> untuk menambah property baru di dalam state inputs (object)
        //,[name]: value tidak harus 1 tapi bisa ditambah koma koma lagi
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputString = JSON.stringify(inputs, null, 2); //supaya isi object bisa di print
        alert(inputString);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input 
                    type='text'
                    name='username'
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input 
                    type='number'
                    name='age'
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type='submit' />
        </form>
    );
}

*/

//select
/*
function MyForm() {
    const [myCar, setMyCar] = useState("BMW");

    const handleChange = (event) => {
        setMyCar(event.target.value);
    }

    return(
        <form>
            <select value={myCar} onChange={handleChange}>
                <option>Ford</option>
                <option>BMW</option>
                <option>Porsche</option>
            </select>
        </form>
    )
}
//<MyForm />
*/

//react css styling
import './meltryllis.css';

//inline styling <h1 style={{color: "red", backgroundColor: "blue"}}>Hello Style!</h1>
//object styling
/*
const Header = () => {
    const myStyle = {
        color: "#f5f0f0",
        backgroundColor: "#171f1f",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    return (
        <div>
            <h1 style={myStyle}>Hello my negus</h1>
            <span>im not in danger skyler, i am the danger</span>
        </div>
    )
}
*/
//css stylesheet
//harus pake import './meltryllis.css'; (import dari file baru custom)

//multiple state hooks
/*
const Car = () =>{
    // const [brand, setBrand] = useState("Ford");
    // const [model, setModel] = useState("Mustang");
    // const [year, setYear] = useState("1964")
    // const [color, setColor] = useState("Blue")
    //bisa juga pakai object
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "Blue"
    });

    //update state
    const updateColor = () => {
        setCar(previousState => {
            return {...previousState, color: "Red"}
        })
    }

    return (
        <div>
            <h1>My {car.brand}</h1>
            <p>
                it is a {car.color} {car.model} from {car.year}
            </p>
            <button
            type='button'
            onClick={updateColor}
            >Red</button>
        </div>
    )
}
*/

import Exer4 from "./exercise"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Exer4 />);
//fix error babel : npm install --save-dev @babel/plugin-proposal-private-property-in-object
//must be learned last : react memo (skip rendering)