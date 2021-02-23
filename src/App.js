import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const names =["rahim hossain", "korim hossain"]
  
  const products = [
    {name: "photoshop", price: "$69.78"},
    {name: "PDF reader", price: "$38.96"}
  ]
  
  return (
  <div>
    <p>hello react</p>
    <Counter></Counter>
    <Users></Users>
    <ul>
      {
        products.map(pd => <li>{pd.name}</li>)
      }
      {
        names.map(name => <li>{name}</li>)
      }
     {
      names.map(name => <Officer names>{name}</Officer>)
     }
   </ul>
  
    <Product product={products[0]}></Product>
    <Product product={products[1]}></Product>

    <Officer name= {names[0]} dis = "assistant manager" div = "geophysical"></Officer>
    <Officer name= {names[1]} dis= "officer" div="admin"></Officer>
    <Officer name= "jamal" dis= "staf" div= "seismic"></Officer>
  
  </div>
  );
}


function Product(props){
  return(
    <div>
     <h2>{props.product.name}</h2>
     <h4>{props.product.price }</h4>
    </div>
  )
}

//creating a forma to accessing all similar property. 
function Officer(props){
  return(
  <div style={{border:'2px solid green', margin:'10px', textAlign:'center'}}>
    <h2>name:{props.name}</h2>
    <h3>designation:{props.dis}</h3>
    <h4>division:{props.div}</h4>
  </div>
  );
}


// adding counter
function Counter(){
  const[ count, setCount] = useState(10);
  return(
    <div>
      <h2>count:{count} </h2>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}


//calling api
function Users(){
 const [users, setUsers] = useState([]);
 useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data));
 }, []) //[] for stop randers of useEffect
 
 return(
   <div>
     <h3>Dynamic Users:{users.length}</h3>
     {
       console.log(users)
     }
     {
       users.map(user => <li>{user.name}</li>)
     }
   </div>
 )
}


export default App;
