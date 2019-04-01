import React from 'react';
import './NotificationList.css'
class NotificationList extends React.Component {
    render() {
        return (

            <div className="container-fluid col-10 testtab">
                <ul className="nav nav-tabs nav-justified ulnav">
                    <div className="col-12 col-sm-4">
                        <li className="nav-item">
                            <a href="#" className="nav-link">In progress</a>
                        </li>
                    </div>
                    <div className="col-12 col-sm-4">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Pending</a>
                        </li>
                    </div>
                    <div className="col-12 col-sm-4">
                        <li className="nav-item">
                            <a href="#" className="nav-link active">Done</a>
                        </li>
                    </div>
                </ul>
                <div className="card_cont container-fluid">
                    <div className="card">
                        <div className="card-header row " data-toggle="collapse" data-target="#demo2">
                            <h4 className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 h4">Shabbat</h4>
                            <h5 className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 right date">2018-03-23 19:00</h5>
                        </div>
                        <div className="card-body cardbody collapse" id='demo2'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header row" data-toggle="collapse" data-target="#demo3">
                            <h4 className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 h4">Shabbat</h4>
                            <h5 className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 right date">2018-03-23 19:00</h5>
                        </div>
                        <div className="card-body cardbody collapse" id='demo3'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header row" data-toggle="collapse" data-target="#demo4">
                            <h4 className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 h4">Shabbat</h4>
                            <h5 className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 right date">2018-03-23 19:00</h5>
                        </div>
                        <div className="card-body cardbody collapse" id='demo4'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header row" data-toggle="collapse" data-target="#demo5">
                            <h4 className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 h4">Shabbat</h4>
                            <h5 className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 right date">2018-03-23 19:00</h5>
                        </div>
                        <div className="card-body cardbody collapse" id='demo5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header row" data-toggle="collapse" data-target="#demo6">
                            <h4 className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 h4">Shabbat</h4>
                            <h5 className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 right date">2018-03-23 19:00</h5>
                        </div>
                        <div className="card-body cardbody collapse" id='demo6'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header row">
                            <h4 className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 h4">Shabbat</h4>
                            <h5 className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 right date">2018-03-23 19:00</h5>
                        </div>
                        <div className="card-body cardbody">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi u
                            t aliquip ex ea commodo
                            consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam
                        </div>
                    </div></div>
            </div>




        )
    }
}

export default NotificationList;