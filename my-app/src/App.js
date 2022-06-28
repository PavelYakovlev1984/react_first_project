// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import React from "react";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";

const App = (props   ) => {

    return (
        <BrowserRouter>
        < div
    className = 'app-wrapper' >
        < Header / >
        < NavBar / >
        < div className='app-wrapper-content'>
            <Routes>
        <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage}/>}/>
        <Route path='/profile' element={<Profile  state={props.state.profilePage} addPost={props.addPost}/>}/>
     <Route path='/news' element={<News postsElements={props.postsElements}/>}/>
        {/*<Route path='/music' element={<Music />}/>*/}
                </Routes>
        < /div>
</div>


</BrowserRouter>)

}
export default App;
