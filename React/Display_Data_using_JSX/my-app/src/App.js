
import './App.css';

function User ({user, title}) {
  function hello () {
    console.log("Hello", user.name);
  }

  return (
  <div style={{
      "backgroundColor" : user.active ? "lightgreen" : "red"
    }}>
    
    <h1>{title}</h1>
    <p>Name {user.name}</p>

    <p>age: {user.age}</p>

    <p>
    {user.active ?
    <button style={{"backgroundColor": "darkgreen"}} onClick={hello} >Deactivate</button>:
    <button style={{"backgroundColor": "white", "color": "red"}}>activate</button>}
    </p>
    <hr/>
  </div>
  )
}

function App(props) {
  const title = props.title
  const users = props.users
  

  return (
    <div className="App">
      
      {users.map( oneUser => { 
        return <User user={oneUser} title={title} />
      })}
      

    </div>
  );
}

export default App;
