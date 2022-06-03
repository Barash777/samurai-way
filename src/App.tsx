import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './css/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>

                <div className="app-wrapper-content">
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
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