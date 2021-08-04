import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Menu from '@components/Menu';
import Sign from '@views/Sign';
import Home from '@views/Home';
import Explore from '@views/Explore';
import Messages from '@views/Messages';
import Notifications from '@views/Notifications';
import Bookmarks from '@views/Bookmarks';

import ActualThemes from "@components/Sections/Actual";
import Search from '@components/Search';
import Footer from '@components/Footer';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/sign">
                        <Sign/>
                        <Footer/>
                    </Route>
                    <Route path="/">
                        <div className="container">
                            <aside className="left">
                                <Menu/>
                            </aside>
                            <Switch>
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                                <Route path="/explore">
                                    <Explore/>
                                </Route>
                                <Route path="/notifications">
                                    <Notifications/>
                                </Route>
                                <Route path="/messages">
                                    <Messages/>
                                </Route>
                                <Route path="/bookmarks">
                                    <Bookmarks/>
                                </Route>
                            </Switch>
                            <aside className="right">
                                <Search/>
                                <ActualThemes/>
                            </aside>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
