import React, {useEffect, useState} from 'react';
import './assets/css/App.css';
// import Header from './components/Header/Header';
// import Sidebar from './components/Sidebar/Sidebar';
import MyContent from './components/Content/Content';
import {useAppDispatch, useAppSelector} from './hooks/main';
import {initializeTC} from './redux/appReducer';
import Preloader from './components/Preloader/Preloader';
import {Layout} from "antd";
import MyHeader from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const {Footer, Header, Sider, Content} = Layout;

function App() {
    const initialized = useAppSelector(state => state.app.initialized)
    const dispatch = useAppDispatch()

    const [collapsed, setCollapsed] = useState(false);


    useEffect(() => {
        dispatch(initializeTC())
    }, [dispatch])

    if (initialized === ('loading' || 'idle'))
        return <Preloader/>

    if (initialized === 'failed')
        return <div>Something wrong! Try again later!</div>

    return <Layout style={{minHeight: '100vh'}}>
        {/*<Header>*/}
        <MyHeader/>
        {/*</Header>*/}
        <Layout>
            <Sider theme={'light'} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <Sidebar/>
            </Sider>
            <Layout>
                <Content>
                    <MyContent/>
                </Content>
                {/*<Sidebar/>*/}
                {/*<MyContent/>*/}
                {/*<Footer>Footer</Footer>*/}
            </Layout>
        </Layout>

        {/*<Footer>
            <div>
                it's footer
            </div>
        </Footer>*/}
    </Layout>

    /*return <div>
        <Header/>
        <Sidebar/>
        <Content/>
    </div>

    return <div className="app-wrapper">
        <Header/>
        <Sidebar/>
        <Content/>
    </div>*/

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