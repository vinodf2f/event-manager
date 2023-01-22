import React from "react";
import { getCardVariant } from "../../helper";
import EventCard from "../EventCard";

function EventContainer({
  header,
  events,
  isSelectedSection,
  handleActionClick,
  selectedEvents,
}) {
  return (
    <div className="eventContainer">
      <h3 className="headerText">{header}</h3>
      <div className="eventsWrapper">
        {events.map((card) => {
          const cardvariant = getCardVariant(
            card,
            selectedEvents,
            isSelectedSection
          );
          const _handleActionClick = () => handleActionClick(card);
          return (
            <EventCard
              key={card.id}
              cardVariant={cardvariant}
              data={card}
              handleActionClick={_handleActionClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default EventContainer;
