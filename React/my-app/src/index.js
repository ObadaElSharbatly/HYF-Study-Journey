import ReactDOM from "react-dom";
import "./index.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris Sev",
  location: "Las Vegas",
  foodType: "Everything",
  age: 32,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chris__sev",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App(props) {
  const {name, location, foodType, age, likes, twitterUsername, avatar} = props.user;
  console.log(name);
  return (
    <div className="App user-deets">
      <div className="user-deets">
      <img src={avatar} alt="avatar pho" />
      <h3>{name}</h3>
      <p>
        <strong>Location</strong>
        <span>{location} </span>
      </p>
      <p>
        <strong>Food Type</strong>
        <span>{foodType} </span>
      </p>
      <p>
        <strong>Age </strong>
        <span>{age} </span>
      </p>
      <p>
        <strong>Likes </strong>
        <span>{likes} </span>
      </p>
      <p>
        <strong>Twitter</strong>
        <a href={twitterUsername}>@{twitterUsername} </a>
      </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App user={user} />, rootElement);
