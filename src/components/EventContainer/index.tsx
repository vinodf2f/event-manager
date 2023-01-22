import React from "react";
import { cardData } from "../../constants";
import { getCardVariant } from "../../helper";
import EventCard from "../EventCard";

interface EventContainerProps {
  header: string;
  events: cardData[];
  isSelectedSection?: boolean ;
  handleActionClick: (card: cardData) => void;
  selectedEvents?: cardData[] ;
}

const EventContainer: React.FC<EventContainerProps> = ({
  header,
  events,
  isSelectedSection=false,
  handleActionClick,
  selectedEvents=[],
}) => {
  return (
    <div className="eventContainer">
      <p className="headerText">{header}</p>
      <div className="eventsWrapper">
        {events.map((card) => {
          const cardvariant = getCardVariant({
            card,
            selectedEvents,
            isSelectedSection,
          });
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
};

export default EventContainer;
