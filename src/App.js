import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


//How to create react app_Number-1
function App() {
  const products = ["Geophone", "Repeater"]
  
  
  return (
    <div>
      <h1>Welcome to Learn React</h1>
      <ul>
      //create component
      <Friends></Friends>
      
      //using props
      <Products name = "Geophone"></Products>   //fixed data
      <Products name = {products[1]} price = "$220"></Products>  //dynamic data
     
      //destructuring
      <Officers></Officers>

      //using useState
      <Counter></Counter>

      //using useEffect
      <CallApi></CallApi>
      </ul>
   
    </div>
  );
}


//How to create component and use it_Number-2
function Friends(){
  const friends = ["rahim", "korim", "jamal", "rubel", "rakib"]
  return(
    <div>
      <h3>create component</h3>
      {
        friends.map(friend => <li>{friend}</li>)  //accessing all friend by threw loop.
      }
      <h3>{friends[3]}</h3> //accessing one by one
    </div>
  )
}


//How to send data using props_Number-3
function Products(props){
  return(
    <div>
      <p>products name is: {props.name}</p>
      <p>price: {props.price|| "$320"}</p>  //$320 is default value.
    </div>
  )
}


//using object property by destructuring_Number-4
function Officers(){
  const officers = {
    name: "Hasan", 
    age: "32", 
    section: "QC"
  }
 
 const {name, section} = officers 
  return(
    <h1>{name} & {section}</h1>  //destructuring data
  )
}


//How to declare useState and eventHandler_Number-5 & 6
function Counter(){
  const [count, setCount] = useState(0) //useStart need to declare in import section.
  return(
    <div>
      <h2>counter:{count} </h2>
     <button onClick = {()=>setCount(count+1)}>increase</button>
     <button onClick = {()=>setCount(count-1)}>decrease</button>
    </div>
  )
}


//How to declare useEffect and use it_Number-7 & 8
function CallApi(){
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setTodos(data))
  },[]) //for stop randers of useEffect
  return(
    <div>
      {
        console.log(todos)
      }
      <h2>List of todos: {todos.length}</h2>
      {
      todos.map(todo => <li>{todo.title}</li>)
      }
    </div>
  )
}

export default App;
