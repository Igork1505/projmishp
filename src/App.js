import React, {Component} from 'react';
import logo from './logo.svg';
import Homepage from './components/homepage';
import Main from './components/main/Main';
import Registration from "./components/Registration/Registration";
import Calendar from "./components/Registration/Calendar";
import Navigation from "./components/navigation/Navigation";
import {BrowserRouter, Route} from "react-router-dom";
import {Switch} from "react-router";
import NotificationList from "./components/NotificationList/NotificationList";
import Events from "./components/Events/Events";

class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <div>

                    <Navigation/>
                    <Switch>
                        <Route path="/" component={Main} exact/>
                        <Route path="/Registration" component={Registration}/>
                        <Route path="/Calendar" component={Calendar}/>
                        <Route path="/Homepage" component={Homepage}/>
                        <Route path="/NotificationList" component={NotificationList}/>

                    </Switch>
                    {/*<Events/>*/}
                </div>
            </BrowserRouter>


        );
    }
}

export default App;