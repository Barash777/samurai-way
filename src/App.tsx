import React from 'react';
import './css/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>

            <div className="app-wrapper-content">
                <Dialogs/>
                {/*<Profile/>*/}
            </div>

        </div>
    );
}

export default App;
