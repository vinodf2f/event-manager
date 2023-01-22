import { cardData, cardVariant, cardVariantTypes, eventManegerTexts } from "./constants";

interface getCardVariantProps {
  card: any;
  selectedEvents: cardData[];
  isSelectedSection: boolean ;
}


interface isValidEventResponse {
  isValid: boolean;
  errorMessage?: string | undefined;
}

export function getCardVariant({
  card,
  selectedEvents,
  isSelectedSection,
}: getCardVariantProps): keyof cardVariant {
  if (isSelectedSection) return cardVariantTypes.selected;

  if (selectedEvents.length < 3) {
    return cardVariantTypes.default;
  }
  if (selectedEvents.every((event) => event.id !== card.id)) {
    return cardVariantTypes.disabled;
  }
  return cardVariantTypes.default;
}

export const getTime = (date: string) => {
  return new Date(date).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const checkIfAlreadySelected = (selectedEvents: any[], event: any) => {
  return selectedEvents.find((currentEvent) => currentEvent.id === event.id);
};

//conflicting cases for if selected event is 2-3
// 1:30 - 2:30
// 1-3
// 2-2

export const checkIsConflicting = (selectedEvents: any[], event: any) => {
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

export const isValidEvent = (
  selectedEvents: any[],
  event: any
): isValidEventResponse => {
  if (checkIfAlreadySelected(selectedEvents, event)) {
    return {
      isValid: false,
      errorMessage: eventManegerTexts.eventAlreadyAdded,
    };
  } else if (checkIsConflicting(selectedEvents, event)) {
    return { isValid: false, errorMessage: eventManegerTexts.conflictingEvent };
  }
  return { isValid: true };
};
