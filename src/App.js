import { useState } from "react";
import "./App.css";
import EventContainer from "./components/EventContainer";
import { isValidEvent } from "./helper";
import useFetch from "./hooks/useFetch";
import { eventManegerTexts, eventsURL } from "./constants";

function App() {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const {
    response: allEvents,
    isLoading,
    error,
  } = useFetch({ url: eventsURL, defaultResponse: [] });

  const onRemoveEvent = (selectedEvent) => {
    const filteredEvents = selectedEvents.filter(
      (event) => event.id !== selectedEvent.id
    );
    setSelectedEvents(filteredEvents);
  };

  const onSelectEvent = (event) => {
    if (!isValidEvent(selectedEvents, event)) {
      return;
    }
    setSelectedEvents([...selectedEvents, event]);
  };

  if (isLoading) return <div>Fetching events...</div>;

  if (error) return <div>Something went wrong</div>;

  return (
    <div className="container">
      <EventContainer
        header={eventManegerTexts.allEventsHeader}
        handleActionClick={onSelectEvent}
        events={allEvents}
        selectedEvents={selectedEvents}
      />
      <EventContainer
        header={eventManegerTexts.selectedEventsHeader}
        isSelectedSection={true}
        handleActionClick={onRemoveEvent}
        events={selectedEvents}
      />
    </div>
  );
}

export default App;
