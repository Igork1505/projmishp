import React from 'react'
import './Events.css'

const baseUrl = "https://mishpahug-java221-team-a.herokuapp.com";

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {},
            loading: false,

        };
    };

    componentDidMount() {
        this.setState({loading: true});
        fetch(baseUrl + "/event/allprogresslist?page=0&size=10", {
            method: 'POST',
            headers: {"Content-Type": "application/json"}

        })
            .then(response => {
                return response.json();
            })
            .then((data) => {
                this.setState({event: data, loading: false})
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    render() {
        if (this.state.loading) {
            return <h2>loading..</h2>
        } else {
            return (
                <div>
                    <h2>{'eventId:' + this.state.event.eventId}</h2>
                    <h2>{'title:' + this.state.event.title}</h2>
                    <h2>{'holiday:' + this.state.event.holiday}</h2>
                    <h2>{'confession:' + this.state.event.confession}</h2>
                    <h2>{'date:' + this.state.event.date}</h2>
                    <h2>{'time:' + this.state.event.time}</h2>
                    <h2>{'duration:' + this.state.event.duration}</h2>
                    <h2>{'address:' + this.state.event.address}</h2>

                </div>
            );
        }
    }
}

export default Events;