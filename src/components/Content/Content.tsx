import React from 'react';
import {Route, Routes} from 'react-router-dom';
// import ProfileContainer from '../Profile/ProfileContainer';
import Login from '../Forms/Login/Login';
// import DialogsContainer from '../Dialogs/DialogsContainer';
// import UsersContainer from '../Users/UsersContainer';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import {WithSuspense} from "../../hoc/WithSuspense";
// import Preloader from "../Preloader/Preloader";


const DialogsContainer = WithSuspense(React.lazy(() => import('../Dialogs/DialogsContainer')));
const UsersContainer = WithSuspense(React.lazy(() => import('../Users/UsersContainer')));
const ProfileContainer = WithSuspense(React.lazy(() => import('../Profile/ProfileContainer')));

const Content = () => {

    return (
        <div className="app-wrapper-content">
            <Routes>

                <Route path={''} element={<></>}/>
                <Route path="/profile"
                       element={<ProfileContainer/>}>
                    <Route path=":userId/*" element={<ProfileContainer/>}/>
                    {/*<Route path="" element={<ProfileContainer/>}/>*/}
                </Route>

                <Route path="/login" element={<Login/>}/>
                <Route path="/dialogs/*"
                    // element={<Suspense fallback={<Preloader/>}><DialogsContainer/></Suspense>}/>
                       element={<DialogsContainer/>}/>
                <Route path="/users"
                       element={<UsersContainer/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path={'*'} element={<div>Error 404</div>}/>
            </Routes>
        </div>
    );
};

export default Content;