import React from "react";

import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import { getEventById, getFeaturedEvents } from "@/helpers/api-util";
import Head from "next/head";

export default function EventDetailPage(props) {
  const { event } = props;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = await context.params.eventId;
  const selectedEvent = await getEventById(eventId);

  return {
    props: {
      event: selectedEvent,
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
