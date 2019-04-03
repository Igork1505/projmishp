import React from 'react'

class FinedEvent extends React.Component {
  render() {
      return(

              <div>
                  <h2>{'eventId:' + this.props.event.eventId}</h2>
                  <h2>{'title:' + this.props.event.title}</h2>
                  <h2>{'holiday:' + this.props.event.holiday}</h2>
                  <h2>{'confession:' + this.props.event.confession}</h2>
                  <h2>{'date:' + this.props.event.date}</h2>
                  <h2>{'time:' + this.props.event.time}</h2>
                  <h2>{'duration:' + this.props.event.duration}</h2>
                  <h2>{'address:' + this.props.event.address}</h2>
              </div>

      )
  }
  }

    export default FinedEvent;