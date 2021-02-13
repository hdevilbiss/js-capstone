/**
 * Import style
 */
import "./style/app.scss";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Import components
 */
import Palindrome from "./components/Palindrome";
import Roman from "./components/Roman";
import Rot from "./components/Rot";

/**
 * Import Firebase SDK(s)
 */
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyCEXe97m7Z7yb04LjuydXj9DnXZkM9oC2U",
  authDomain: "js-capstone-3c74d.firebaseapp.com",
  projectId: "js-capstone-3c74d",
  storageBucket: "js-capstone-3c74d.appspot.com",
  messagingSenderId: "611722735055",
  appId: "1:611722735055:web:80460c8a812716605a36ba"
});

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          JavaScript Capstone
        </h1>
        <div class="btn">
          <a href="https://github.com/hdevilbiss/js-capstone">
          <FontAwesomeIcon icon={faGithub} />
          Source Code
          </a>
        </div>
      </header>
      <div className="wrapper">
        <Palindrome />
        <Roman />
        <Rot />
      </div>
    </div>
  );
}

export default App;
