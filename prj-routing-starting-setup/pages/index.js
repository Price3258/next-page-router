import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getFeaturedEvents } from "@/dummy-data";
import React from "react";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventSearch />
      <EventList items={featuredEvents} />
    </>
  );
}
