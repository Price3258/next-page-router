import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/dummy-data";
import React from "react";

export default function AllEventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}
