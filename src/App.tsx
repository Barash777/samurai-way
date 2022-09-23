import React, {useEffect} from 'react';
import './assets/css/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import {useAppDispatch, useAppSelector} from './hooks/main';
import {initializeTC} from './redux/appReducer';
import Preloader from './components/Preloader/Preloader';


function App() {
    const initialized = useAppSelector(state => state.app.initialized)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(initializeTC())
    }, [dispatch])

    if (initialized === ('loading' || 'idle'))
        return <Preloader/>

    if (initialized === 'failed')
        return <div>Something wrong! Try again later!</div>

    return <div className="app-wrapper">
        <Header/>
        <Sidebar/>
        <Content/>
    </div>

    /*return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <Content/>
        </div>
    );*/
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