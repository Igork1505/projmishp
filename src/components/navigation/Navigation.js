import React from 'react';
import 'jquery/src/jquery';
import  './Navigation.css'

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
                        <li><a href="#">Sign in</a></li>
                        <li><a href="#">Calendar</a></li>
                        <li><a href="#">Add event</a></li>

                    </ul>
                </section>
            </div>



        )





}
}
export default Navigation;