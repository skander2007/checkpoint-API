import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  console.log(users)
  const [loading, setLoading] = useState(true);
  useEffect(() =>{
    const getUsers = () =>{
      fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setUsers(json)).then(setLoading(false)).catch((err)=>console.log(err))

      // fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>setUsers(data)).catch((err)=>console.log(err));
    };
    getUsers();
  ;
  console.log(users)

},[]);
  return (
    <div className="App">
   {loading ?
   <h1>loading...</h1> :
   users&&users.map(el=> (
   <div   >
<h3>{el.name}</h3>
<p>{el.email}</p>
{/* <p>{el.adress.street}</p> */}
</div> )
   )
}  
    </div>
  );
}

export default App;
