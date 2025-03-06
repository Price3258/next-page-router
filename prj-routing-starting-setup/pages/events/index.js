import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/helpers/api-util";
import React from "react";

export default function AllEventsPage(props) {
  const { events } = props;
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
  };
}
