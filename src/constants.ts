export interface cardVariant {
  default: string;
  disabled: string;
  selected: string;
}
export interface cardData {
  id: number;
  event_name: string;
  event_category: string;
  start_time: string;
  end_time: string;
}

export const eventManegerTexts = {
  allEventsHeader: "All Events",
  selectedEventsHeader: "Selected events",
  eventAlreadyAdded: "Event already added",
  conflictingEvent: "Conflicting event",
  errorText: "Something went wrong..!",
};

export const eventsURL =
  "https://run.mocky.io/v3/2744c231-8991-4ae8-bc45-1f645437585a";

export const cardVariantTypes: { [key: string]: keyof cardVariant } = {
  default: "default",
  disabled: "disabled",
  selected: "selected",
};
