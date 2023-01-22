import React, { useContext, useState } from "react";
import "./App.css";
import EventContainer from "./components/EventContainer";
import Loader from "./components/Loader";
import { isValidEvent } from "./helper";
import useFetch from "./hooks/useFetch";
import { cardData, eventManegerTexts, eventsURL } from "./constants";
import { SnackbarContext } from "./context/snackbar";

function App() {
  const [selectedEvents, setSelectedEvents] = useState<cardData[]>([]);
  const { addSnackbar } = useContext(SnackbarContext);
  const {
    response: allEvents,
    isLoading,
    error,
  } = useFetch({ url: eventsURL, defaultResponse: [] });

  const onRemoveEvent = (selectedEvent: cardData) => {
    const filteredEvents = selectedEvents.filter(
      (event) => event.id !== selectedEvent.id
    );
    setSelectedEvents(filteredEvents);
  };

  const onSelectEvent = (event: cardData) => {
    const { isValid, errorMessage } = isValidEvent(selectedEvents, event);
    if (!isValid && errorMessage) {
      addSnackbar(errorMessage);
    } else {
      setSelectedEvents([...selectedEvents, event]);
    }
  };

  if (isLoading) return <Loader />;

  if (error) return <div>{eventManegerTexts.errorText}</div>;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
