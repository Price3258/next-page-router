import React from "react";

import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";
import { getEventById, getFeaturedEvents } from "@/helpers/api-util";

export default function EventDetailPage(props) {
  const { selectedEvent } = props;

  if (!selectedEvent) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
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
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const pathWithParams = events.map((event) => ({
    params: { eventId: event.id },
  }));
  return {
    paths: pathWithParams,
    fallback: true, // blocking으로 해도됨 블로킹은 만들어질때까지 기다리는것. 즉 위에 로딩이 안뜸.
  };
}
