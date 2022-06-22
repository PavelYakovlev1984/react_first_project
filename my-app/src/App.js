import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
    <div><Header/></div>
    <Technologies/>
    </div>
  );
}

const Technologies = () => {
  return (
    <ul>
    <li>CSS</li>
    <li>html</li>
    <li>js</li>
    <li>react</li></ul>
  )
}


const Header = () => {
  return (
   <div>
   <a href="#">Home</a><a href="#">News Feed</a><a href="#">Messages</a>
   </div>
  );
}

export default App;
