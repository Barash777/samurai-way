import React from 'react';
import {Route, Routes} from 'react-router-dom';
import ProfileContainer from '../Profile/ProfileContainer';
import Login from '../Forms/Login/Login';
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';

const Content = () => {
    // const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    // if (!isAuth) {
    //     return <Navigate to={'/login'}/>
    // }

    return (
        <div className="app-wrapper-content">
            <Routes>
                {/*<Route path={'/'} element={<Navigate to="/profile"/>}/>*/}
                {/*<Route path="/profile/:userId" element={<ProfileContainer/>}/>*/}
                {/*<Route path="/profile/:userId" element={<ProfileParams/>}/>*/}
                {/*<Route path={'/profile/:userId'} element={<div>id</div>}/>*/}


                <Route path="profile" element={<ProfileContainer/>}>
                    <Route path=":userId/*" element={<ProfileContainer/>}/>
                    {/*<Route path="" element={<ProfileContainer/>}/>*/}
                </Route>

                <Route path="/login" element={<Login/>}/>
                <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                <Route path="/users" element={<UsersContainer/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
                {/*<Route path={'/*'} element={<div>Error 404</div>}/>*/}
            </Routes>
        </div>
    );
};

export default Content;