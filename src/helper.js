import { cardVariantTypes, eventManegerTexts } from "./constants";

export function getCardVariant(card, selectedEvents, isSelectedSection) {
  if (isSelectedSection) return cardVariantTypes.selected;

  if (selectedEvents.length < 3) {
    return cardVariantTypes.default;
  }
  if (selectedEvents.every((event) => event.id !== card.id)) {
    return cardVariantTypes.disabled;
  }
  return cardVariantTypes.default;
}

export const getTime = (date) => {
  return new Date(date).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const checkIfAlreadySelected = (selectedEvents, event) => {
  return selectedEvents.find((currentEvent) => currentEvent.id === event.id);
};

//conflicting cases for if selected event is 2-3
// 1:30 - 2:30
// 1-3
// 2-2

export const checkIsConflicting = (selectedEvents, event) => {
  return selectedEvents.some((existingEvent) => {
    debugger;
    const existingStart = new Date(existingEvent.start_time);
    const existingEnd = new Date(existingEvent.end_time);
    const newStart = new Date(event.start_time);
    const newEnd = new Date(event.end_time);

    if (newStart <= existingStart && newEnd >= existingEnd) {
      return true; //1:30 - 3:30
    } else if (newEnd > existingStart && newEnd <= existingEnd) {
      return true; //1-3
    } else if (newStart >= existingStart && newStart < existingEnd) {
      return true; //2-2:3
    }
  });
};

export const isValidEvent = (selectedEvents, event) => {
  if (checkIfAlreadySelected(selectedEvents, event)) {
    alert(eventManegerTexts.eventAlreadyAdded);
    return false;
  } else if (checkIsConflicting(selectedEvents, event)) {
    alert(eventManegerTexts.conflictingEvent);
    return false;
  }
  return true;
};
