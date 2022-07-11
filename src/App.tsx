import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import './css/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>

            <div className="app-wrapper-content">
                <Routes>
                    {/*<Route path={'/'} element={<Navigate to="/profile"/>}/>*/}
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    {/*<Route path={'/*'} element={<div>Error 404</div>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;

/*
// for react-router-dom version 6.0+

import {BrowserRouter, Routes, Route} from "react-router-dom";

<BrowserRouter>
        <div className='app-booker'>
              <Header />
              <NavBar />
         <div class='app-booker-content'>
             <Routes>
                 <Route path="/dialog" element= {<News/>}/>
                 <Route path="/profile" element={<Profile/>}/>
             </Routes>
         </div>
        </div>
     </BrowserRouter>
 */