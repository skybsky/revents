import React, { Component } from "react";
import EventsListItem from "./EventsListItem";

class EventsList extends Component {
  render() {
    const { events } = this.props;

    return (
      <React.Fragment>
        <h1>Event List</h1>
        {events.map(event => (
          <EventsListItem key={event.id} event={event}/>
        ))}
       </React.Fragment>
    );
  }
}

export default EventsList;
