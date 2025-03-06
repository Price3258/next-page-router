import React from "react";

import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";
import { getAllEvents, getEventById } from "@/helpers/api-util";

export default function EventDetailPage(props) {
  const { selectedEvent } = props;

  if (!selectedEvent) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = await context.params.eventId;
  const selectedEvent = await getEventById(eventId);

  return {
    props: {
      selectedEvent,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const pathWithParams = events.map((event) => ({
    params: { eventId: event.id },
  }));
  return {
    paths: pathWithParams,
    fallback: false,
  };
}
