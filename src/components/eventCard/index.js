import React from "react";
import { getTime } from "../../helper";
import Button from "../Button";
import { cardVariantTypes } from "../../constants";
import "./eventCard.css";

function EventCard({ data, cardVariant, handleActionClick }) {
  const { id, event_name, event_category, start_time, end_time } = data;

  const eventNameIntial = event_category.charAt(0);
  const startTime = getTime(start_time);
  const endTime = getTime(end_time);

  return (
    <div className={`eventCard ${cardVariant}`}>
      <p className="eventNameIntial">{eventNameIntial}</p>
      <div className="verticalLine" />
      <div className="eventInfoSection">
        <span id="eventName">{event_name}</span>
        <span className="eventCatogory">({event_category})</span>
        <span className="eventCatogory">
          {startTime}-{endTime}
        </span>
        <div className="buttonContainer">
          <Button
            text={
              cardVariant === cardVariantTypes.selected ? "Remove" : "Select"
            }
            variant={cardVariant}
            disabled={cardVariant === cardVariantTypes.disabled}
            onClick={handleActionClick}
          />
        </div>
      </div>
    </div>
  );
}

export default EventCard;
