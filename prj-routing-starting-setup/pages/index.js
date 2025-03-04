import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getFeaturedEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

export default function HomePage() {
  const router = useRouter();

  const featuredEvents = getFeaturedEvents();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={featuredEvents} />
    </>
  );
}
