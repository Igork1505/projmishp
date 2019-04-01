import React from 'react';
import 'jquery/src/jquery';
import  './Navigation.css'
import {NavLink} from "react-router-dom";
import Registration from "../Registration/Registration";
import Homepage from "../homepage";
import Main from "../main/Main";

class Navigation extends React.Component{
    render() {
        return(
            <div>


                <input id="hamburger" className="hamburger" type="checkbox"/>
                <label className="hamburger" htmlFor="hamburger">
                    <i></i>
                    <text>
                        <close>close</close>
                        <open>menu</open>
                    </text>
                </label>
                <section className="drawer-list">
                    <ul>
                        <li><NavLink to="/">Sign In</NavLink></li>
                       <li><NavLink to="/Registration">Registration</NavLink></li>
                        <li><NavLink to="/Homepage">Homepage</NavLink></li>
                        <li><NavLink to="/Calendar">Calendar</NavLink></li>
                        <li><NavLink to="/NotificationList">Notification List</NavLink></li>
                        <li><NavLink to="/Events">Events</NavLink></li>

                    </ul>
                </section>
            </div>



        )





}
}
export default Navigation;