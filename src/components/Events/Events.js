import React from 'react'
import './Events.css'
import FinedEvent from "../Find/FinedEvent";

const baseUrl = "https://mishpahug-java221-team-a.herokuapp.com";

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: [],
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
            .then((event) => {
                let data1 = event.content;

                this.setState({event: data1, loading: false});

            })
            .catch(function (err) {
                console.log(err)
            })
    }


    render() {
        let event = this.state.event;
        if (this.state.loading) {
            return <h2>loading..</h2>
        } else {

            return (
                <div>

                    { event.map((event) => {return(
                    <FinedEvent event={event}/>
                    )})}
                </div>
            )

        }

    }
}

export default Events;